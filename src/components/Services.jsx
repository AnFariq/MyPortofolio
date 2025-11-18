import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Smartphone, Globe, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react'

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern web applications using React, Next.js, and Web3 technologies',
      features: ['React/Next.js', 'TypeScript', 'Web3 Integration', 'Smart Contracts'],
      color: 'accent-gold',
      gradient: 'gradient-gold'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces with modern design principles',
      features: ['Figma Design', 'Prototyping', 'User Research', 'Design Systems'],
      color: 'accent-blue',
      gradient: 'gradient-blue'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications for iOS and Android',
      features: ['React Native', 'Flutter', 'App Store Deployment', 'Performance Optimization'],
      color: 'accent-purple',
      gradient: 'gradient-purple'
    },
    {
      icon: Globe,
      title: 'Web3 Solutions',
      description: 'Decentralized applications and blockchain integration',
      features: ['Smart Contracts', 'DApps', 'NFT Marketplaces', 'DeFi Platforms'],
      color: 'accent-cyan',
      gradient: 'gradient-blue'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed and performance optimization for existing applications',
      features: ['Code Auditing', 'Performance Testing', 'SEO Optimization', 'CDN Setup'],
      color: 'accent-gold',
      gradient: 'gradient-gold'
    },
    {
      icon: Shield,
      title: 'Security & Testing',
      description: 'Comprehensive security audits and automated testing',
      features: ['Security Audits', 'Unit Testing', 'E2E Testing', 'CI/CD Setup'],
      color: 'accent-blue',
      gradient: 'gradient-blue'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-gold/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-display"
            data-text="Services"
          >
            <span className="gradient-text text-shadow-glow">Services</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive digital solutions to transform your ideas into reality with cutting-edge technology and design excellence
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                y: -8,
                transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
              }}
              onHoverStart={() => setHoveredService(service.title)}
              onHoverEnd={() => setHoveredService(null)}
              className="modern-card p-6 sm:p-8 rounded-2xl hover-lift group cursor-pointer relative overflow-hidden"
              style={{
                background: hoveredService === service.title 
                  ? `linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(59, 130, 246, 0.1))`
                  : undefined
              }}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon container */}
              <motion.div 
                className="tech-icon mb-6 sm:mb-8 mx-auto w-16 h-16 sm:w-20 sm:h-20 relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon 
                  size={32} 
                  className={`text-${service.color} absolute inset-0 m-auto group-hover:scale-110 transition-transform duration-300`} 
                />
                {hoveredService === service.title && (
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{ background: `linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(59, 130, 246, 0.2))` }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.5 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
              
              {/* Title */}
              <motion.h3 
                className={`text-xl sm:text-2xl font-bold text-text-primary mb-4 text-center transition-all duration-300 ${
                  hoveredService === service.title ? 'text-accent-gold' : ''
                }`}
              >
                {service.title}
              </motion.h3>
              
              {/* Description */}
              <p className="text-text-secondary mb-6 text-center leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
              
              {/* Features list */}
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                    className="flex items-center text-sm text-text-muted group-hover:text-text-secondary transition-colors duration-300"
                  >
                    <motion.div 
                      className={`w-2 h-2 bg-${service.color} rounded-full mr-3 flex-shrink-0`}
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="truncate">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Hover indicator */}
              <motion.div
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              >
                <ArrowRight size={20} className="text-accent-gold" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 sm:mt-20 lg:mt-24"
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-8 sm:px-10 py-4 sm:py-5 rounded-full text-text-primary font-semibold text-base sm:text-lg hover-lift focus-ring group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Discuss Your Project
                <ArrowRight 
                  size={20} 
                  className="group-hover:translate-x-1 transition-transform duration-300" 
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-text-muted mt-6 text-sm sm:text-base"
          >
            Let's create something amazing together
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default Services