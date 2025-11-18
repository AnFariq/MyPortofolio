import React, { useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useParallax } from '../hooks/useAnimations'

const Background = () => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })


  const initParticles = useCallback((width, height) => {
    const particles = []
    const particleCount = Math.min(80, Math.floor((width * height) / 15000))
    const colors = [
      { r: 245, g: 158, b: 11 },   // accent-gold
      { r: 59, g: 130, b: 246 },   // accent-blue
      { r: 139, g: 92, b: 246 },   // accent-purple
      { r: 6, g: 182, b: 212 },    // accent-cyan
    ]

    for (let i = 0; i < particleCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)]
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        color: `${color.r}, ${color.g}, ${color.b}`,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02
      })
    }
    return particles
  }, [])

  const drawParticle = useCallback((ctx, particle, time) => {
    const pulseFactor = 1 + Math.sin(time * particle.pulseSpeed + particle.pulsePhase) * 0.2
    const currentRadius = particle.radius * pulseFactor
    
    // Main particle
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, currentRadius, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`
    ctx.fill()
    
    // Glow effect
    const glowGradient = ctx.createRadialGradient(
      particle.x, particle.y, 0,
      particle.x, particle.y, currentRadius * 4
    )
    glowGradient.addColorStop(0, `rgba(${particle.color}, ${particle.opacity * 0.4})`)
    glowGradient.addColorStop(0.5, `rgba(${particle.color}, ${particle.opacity * 0.2})`)
    glowGradient.addColorStop(1, `rgba(${particle.color}, 0)`)
    
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, currentRadius * 4, 0, Math.PI * 2)
    ctx.fillStyle = glowGradient
    ctx.fill()
  }, [])

  const drawConnection = useCallback((ctx, p1, p2, distance, maxDistance) => {
    const opacity = Math.max(0, (1 - distance / maxDistance) * 0.3)
    
    const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
    gradient.addColorStop(0, `rgba(${p1.color}, ${opacity})`)
    gradient.addColorStop(0.5, `rgba(${p1.color}, ${opacity * 0.8})`)
    gradient.addColorStop(1, `rgba(${p2.color}, ${opacity})`)
    
    ctx.beginPath()
    ctx.moveTo(p1.x, p1.y)
    ctx.lineTo(p2.x, p2.y)
    ctx.strokeStyle = gradient
    ctx.lineWidth = 0.8
    ctx.stroke()
  }, [])

  const updateParticle = useCallback((particle, width, height, mouseX, mouseY) => {
    // Update position
    particle.x += particle.vx
    particle.y += particle.vy

    // Mouse interaction with enhanced physics
    const dx = mouseX - particle.x
    const dy = mouseY - particle.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    if (distance < 150) {
      const force = (150 - distance) / 150
      const angle = Math.atan2(dy, dx)
      particle.vx -= Math.cos(angle) * force * 0.03
      particle.vy -= Math.sin(angle) * force * 0.03
    }

    // Apply damping
    particle.vx *= 0.99
    particle.vy *= 0.99

    // Boundary collision with bounce
    if (particle.x <= particle.radius || particle.x >= width - particle.radius) {
      particle.vx = -particle.vx * 0.9
      particle.x = Math.max(particle.radius, Math.min(width - particle.radius, particle.x))
    }
    if (particle.y <= particle.radius || particle.y >= height - particle.radius) {
      particle.vy = -particle.vy * 0.9
      particle.y = Math.max(particle.radius, Math.min(height - particle.radius, particle.y))
    }

    // Add slight random movement
    particle.vx += (Math.random() - 0.5) * 0.01
    particle.vy += (Math.random() - 0.5) * 0.01

    // Limit maximum velocity
    const maxSpeed = 2
    const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
    if (speed > maxSpeed) {
      particle.vx = (particle.vx / speed) * maxSpeed
      particle.vy = (particle.vy / speed) * maxSpeed
    }
  }, [])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const particles = particlesRef.current
    const time = Date.now() * 0.001

    // Clear canvas with trail effect
    ctx.fillStyle = 'rgba(6, 8, 16, 0.08)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Update and draw particles
    particles.forEach((particle, i) => {
      updateParticle(particle, canvas.width, canvas.height, mouseRef.current.x, mouseRef.current.y)
      drawParticle(ctx, particle, time)

      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[j].x - particle.x
        const dy = particles[j].y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 200) {
          drawConnection(ctx, particle, particles[j], distance, 200)
        }
      }
    })

    animationRef.current = requestAnimationFrame(animate)
  }, [updateParticle, drawParticle, drawConnection])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particlesRef.current = initParticles(canvas.width, canvas.height)
    }

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouseRef.current = { 
          x: e.touches[0].clientX, 
          y: e.touches[0].clientY 
        }
      }
    }

    // Initialize
    handleResize()
    
    // Start animation
    animate()

    // Event listeners
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    // Performance optimization: reduce quality on low-end devices
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      // Reduce particle count for better performance
      particlesRef.current = particlesRef.current.slice(0, 30)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate, initParticles])

  return (
    <div className="fixed inset-0 z-0">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-grid-modern opacity-5" />
      
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ 
          mixBlendMode: 'screen',
          willChange: 'transform'
        }}
      />
      
      {/* Enhanced ambient lighting effects */}
      <div 
        ref={useParallax(0.2)} 
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-accent-gold/20 to-accent-amber/10 rounded-full filter blur-3xl animate-pulse-glow opacity-60" 
      />
      <div 
        ref={useParallax(0.3)} 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-accent-blue/20 to-accent-cyan/10 rounded-full filter blur-3xl animate-pulse-glow opacity-60" 
        style={{ animationDelay: '1s' }} 
      />
      <div 
        ref={useParallax(0.1)} 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent-purple/10 via-accent-blue/10 to-accent-cyan/10 rounded-full filter blur-3xl animate-pulse-glow opacity-40" 
        style={{ animationDelay: '2s' }} 
      />
      
      {/* Additional mesh gradient overlay */}
      <div className="absolute inset-0 bg-mesh-primary opacity-30 mix-blend-soft-light" />
      
      {/* Vignette effect for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-primary-dark/50 pointer-events-none" />
    </div>
  )
}

export default Background