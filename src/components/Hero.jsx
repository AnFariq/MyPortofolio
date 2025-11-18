import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Code, Palette, Smartphone, Sparkles, Zap, Globe, Rocket } from 'lucide-react'
import { useMagneticEffect } from '../hooks/useAnimations'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-15, 15, -15],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  const sparkleVariants = {
    initial: { scale: 0, rotate: 0 },
    animate: {
      scale: [0, 1, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  const techStack = [
    {
      icon: Code,
      title: "Web Development",
      description: "React, Next.js, TypeScript",
      color: "accent-gold",
      delay: 0
    },
    {
      icon: Palette,
      title: "UI/UX Design", 
      description: "Figma, Prototyping, Systems",
      color: "accent-blue",
      delay: 0.1
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "React Native, Flutter",
      color: "accent-purple",
      delay: 0.2
    }
  ]

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-27"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)`
      }}
    >
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-grid-modern opacity-5" />
      
      {/* Enhanced floating elements */}
      <motion.div
        variants={sparkleVariants}
        initial="initial"
        animate="animate"
        className="absolute top-20 left-10 text-accent-gold opacity-60 hidden lg:block"
      >
        <Sparkles size={32} />
      </motion.div>
      <motion.div
        variants={sparkleVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.5 }}
        className="absolute top-40 right-20 text-accent-blue opacity-60 hidden lg:block"
      >
        <Zap size={28} />
      </motion.div>
      <motion.div
        variants={sparkleVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute bottom-32 left-20 text-accent-purple opacity-60 hidden lg:block"
      >
        <Globe size={24} />
      </motion.div>
      <motion.div
        variants={sparkleVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 1.5 }}
        className="absolute top-60 right-1/3 text-accent-emerald opacity-60 hidden lg:block"
      >
        <Rocket size={20} />
      </motion.div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        <div className="text-center max-w-6xl mx-auto">
          <motion.div
            variants={textVariants}
            className="mb-8 sm:mb-12"
          >
            <div className="mb-6 sm:mb-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-accent-gold/10 to-accent-blue/10 border border-accent-gold/30 rounded-full text-accent-gold text-sm sm:text-base font-medium mb-4 sm:mb-6 backdrop-blur-sm"
            >
              🎓 S1 Sistem Informasi - Universitas Dinamika Surabaya
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="inline-block mx-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border border-accent-blue/30 rounded-full text-accent-blue text-sm sm:text-base font-medium mb-6 sm:mb-8 backdrop-blur-sm"
            >
              🚀 Available for Projects
            </motion.span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
              <span 
                className="gradient-text text-shadow-glow block mb-2 sm:mb-4"
                data-text="Andicha Fariq Putra Pratama"
              >
                Andicha Fariq Putra Pratama
              </span>
              <span className="text-text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display">
                Creative Developer & Digital Designer
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary mb-8 sm:mb-12 lg:mb-16 leading-relaxed max-w-4xl mx-auto px-4 font-light"
          >
            Transforming ideas into exceptional digital experiences with 
            <span className="text-accent-gold font-semibold mx-2">modern technology</span> and 
            <span className="text-accent-blue font-semibold mx-2">stunning design</span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 lg:mb-20 px-4"
          >
            <motion.button
              ref={useMagneticEffect(0.3)}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full text-text-primary font-semibold text-base sm:text-lg lg:text-xl hover-lift magnetic-button flex items-center justify-center gap-3 focus-ring"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Download size={20} className="sm:size-10" />
              Get Started
            </motion.button>
            
            <motion.button
              ref={useMagneticEffect(0.3)}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="accent-border px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full text-text-primary font-semibold text-base sm:text-lg lg:text-xl hover-lift magnetic-button flex items-center justify-center gap-3 focus-ring"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Globe size={20} className="sm:size-10" />
              View Work
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20 px-4"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.title}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="modern-card p-6 sm:p-8 lg:p-10 rounded-2xl hover-lift group"
                style={{ 
                  '--mouse-x': `${mousePosition.x}%`,
                  '--mouse-y': `${mousePosition.y}%`
                }}
              >
                <div className={`tech-icon mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 text-${tech.color}`}>
                  <tech.icon size={28} className="sm:size-32" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-3">{tech.title}</h3>
                <p className="text-text-secondary text-sm sm:text-base">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.2, 
                rotate: 180,
                transition: { duration: 0.5 }
              }}
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-accent-gold hover:text-accent-blue transition-all duration-500 focus-ring p-2 rounded-full"
              aria-label="Scroll to services"
            >
              <ArrowDown size={32} className="sm:size-25" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero