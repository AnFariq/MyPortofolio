import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'GitHub', href: '#github' },
//    { name: 'Figma', href: '#figma' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/AnFariq",
      label: "GitHub",
      color: "accent-gold",
      delay: 0.6
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/andifariq",
      label: "LinkedIn",
      color: "accent-blue",
      delay: 0.7
    },
    {
      icon: Mail,
      href: "mailto:fariqputrapratamaandicha@gmail.com",
      label: "Email",
      color: "accent-gold",
      delay: 0.8
    }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const sidebarVariants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled 
            ? 'glass-card border-b border-accent-gold/20 backdrop-blur-glass' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl sm:text-2xl font-bold gradient-text cursor-pointer hover:scale-105 transition-transform duration-300 font-display"
              onClick={() => scrollToSection('#home')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && scrollToSection('#home')}
            >
              Creative.Dev
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-text-secondary hover:text-accent-gold transition-all duration-300 hover:scale-105 transform font-medium text-sm xl:text-base focus-ring px-2 py-1 rounded"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Desktop Social Links */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: social.delay }}
                  className="tech-icon hover-lift group"
                  aria-label={social.label}
                >
                  <social.icon size={18} className={`text-${social.color} group-hover:scale-110 transition-transform`} />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-text-primary p-2 rounded-lg hover:bg-white/10 transition-colors focus-ring"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] glass-card z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors focus-ring"
                    aria-label="Close menu"
                  >
                    <X size={24} className="text-text-primary" />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="space-y-2 mb-8">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.name}
                      variants={itemVariants}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left py-3 px-4 text-text-secondary hover:text-accent-gold hover:bg-white/5 rounded-lg transition-all duration-300 font-medium text-lg focus-ring"
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </nav>

                {/* Social Links */}
                <div className="border-t border-white/10 pt-6">
                  <p className="text-text-muted text-sm mb-4">Connect</p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        variants={itemVariants}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tech-icon hover-lift"
                        aria-label={social.label}
                      >
                        <social.icon size={20} className={`text-${social.color}`} />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.div
                  variants={itemVariants}
                  className="mt-8"
                >
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="w-full btn-primary py-3 rounded-xl font-semibold focus-ring"
                  >
                    Get In Touch
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar