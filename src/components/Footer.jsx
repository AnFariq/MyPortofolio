import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, Instagram, ArrowUp, Heart, Code, ExternalLink } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/AnFariq',
      label: 'GitHub',
      color: 'accent-gold'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/andifariq',
      label: 'LinkedIn',
      color: 'accent-blue'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/fa_2yq',
      label: 'Instagram',
      color: 'accent-purple'
    },
    {
      icon: Mail,
      href: 'mailto:fariqputrapratamaandicha@gmail.com',
      label: 'Email',
      color: 'accent-gold'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'GitHub', href: '#github' },
    //{ name: 'Figma', href: '#figma' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Web3 Solutions',
    'Performance Optimization'
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-gradient-to-t from-primary-dark via-secondary-dark to-transparent border-t border-white/10">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-gold/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-grid-modern opacity-3" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <motion.div 
                className="flex items-center gap-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="tech-icon w-12 h-12">
                  <Code className="text-accent-gold" size={24} />
                </div>
                <span className="text-2xl sm:text-3xl font-bold gradient-text font-display">Creative.Dev</span>
              </motion.div>
              <p className="text-text-secondary mb-6 leading-relaxed text-sm sm:text-base">
                Crafting digital experiences with cutting-edge web technologies and stunning design. Let's build the future together.
              </p>
              
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="tech-icon group"
                    aria-label={social.label}
                  >
                    <social.icon 
                      size={18} 
                      className={`text-${social.color} group-hover:scale-110 transition-transform duration-200`} 
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-text-primary mb-6 font-display">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      className="text-text-secondary hover:text-accent-gold transition-all duration-300 text-sm sm:text-base flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-text-primary mb-6 font-display">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li 
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-accent-gold rounded-full flex-shrink-0" />
                    <span className="text-text-secondary text-sm sm:text-base">
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-text-primary mb-6 font-display">
                Let's Connect
              </h3>
              <p className="text-text-secondary mb-6 text-sm sm:text-base leading-relaxed">
                Ready to start your next project? Let's discuss how we can work together to create something amazing.
              </p>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(245, 158, 11, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('#contact')}
                className="btn-primary px-6 py-3 rounded-xl text-text-primary font-semibold text-sm sm:text-base hover-lift focus-ring w-full sm:w-auto"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-text-secondary text-sm text-center sm:text-left"
            >
              <span>© 2024 Creative.Dev. All rights reserved.</span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-1">
                Made with 
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Heart className="text-accent-pink mx-1" size={14} />
                </motion.div>
                and 
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Code className="text-accent-gold mx-1" size={14} />
                </motion.div>
              </span>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                rotate: 180
              }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="tech-icon group"
              aria-label="Scroll to top"
            >
              <ArrowUp 
                size={18} 
                className="text-accent-gold group-hover:text-accent-blue transition-colors duration-300" 
              />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer