import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare, User, Briefcase, CheckCircle, ArrowRight } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({
      name: '',
      email: '',
      projectType: '',
      message: ''
    })
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  const projectTypes = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Web3 Development',
    'Performance Optimization',
    'Consultation',
    'Other'
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@example.com',
      href: 'mailto:contact@example.com',
      color: 'accent-gold'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: 'accent-blue'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
      color: 'accent-purple'
    }
  ]

  const benefits = [
    'Expert in modern web technologies',
    'UI/UX design with user focus',
    'Web3 and blockchain integration',
    'Agile development and timely delivery'
  ]

  const benefitColors = ['accent-gold', 'accent-blue', 'accent-purple', 'accent-cyan']

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
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
            data-text="Get In Touch"
          >
            <span className="gradient-text text-shadow-glow">Get In Touch</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to start your next project? Let's discuss how we can work together to bring your vision to life
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="modern-card p-6 sm:p-8 lg:p-10 rounded-2xl">
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold text-text-primary mb-6 font-display"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Let's Create Something Amazing
              </motion.h3>
              
              <motion.p 
                className="text-text-secondary mb-8 leading-relaxed text-sm sm:text-base"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Whether you need a stunning website, a mobile application, or a complete design system, 
                I'm here to help bring your vision to life. Let's schedule a consultation to discuss your project.
              </motion.p>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                    className="flex items-center gap-4 p-4 sm:p-5 glass-card rounded-xl hover-lift group"
                  >
                    <motion.div 
                      className="tech-icon w-12 h-12 sm:w-14 sm:h-14"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <info.icon 
                        size={24} 
                        className={`text-${info.color} group-hover:scale-110 transition-transform duration-200`} 
                      />
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-sm text-text-muted mb-1">{info.label}</p>
                      <p className="text-text-primary group-hover:text-accent-gold transition-colors duration-300 font-medium">
                        {info.value}
                      </p>
                    </div>
                    <ArrowRight 
                      size={16} 
                      className="text-text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" 
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="modern-card p-6 sm:p-8 rounded-2xl"
            >
              <h4 className="text-lg sm:text-xl font-semibold text-text-primary mb-6 font-display">
                Why Work With Me?
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <motion.div
                      className={`w-3 h-3 bg-${benefitColors[index]} rounded-full flex-shrink-0`}
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="text-text-secondary text-sm sm:text-base group-hover:text-text-primary transition-colors duration-300">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="modern-card p-6 sm:p-8 lg:p-10 rounded-2xl">
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold text-text-primary mb-6 font-display"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Send Me a Message
              </motion.h3>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <CheckCircle className="text-success" size={32} />
                    </motion.div>
                    <h4 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-text-secondary">
                      I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <label className="block text-text-primary mb-2 text-sm font-medium flex items-center gap-2">
                        <User size={16} />
                        Your Name
                      </label>
                      <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-4 py-3 bg-card-dark/50 border rounded-xl text-text-primary placeholder-text-muted focus:outline-none transition-all duration-300 ${
                          focusedField === 'name' 
                            ? 'border-accent-gold ring-2 ring-accent-gold/20' 
                            : 'border-white/10'
                        }`}
                        placeholder="John Doe"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>

                    <div>
                      <label className="block text-text-primary mb-2 text-sm font-medium flex items-center gap-2">
                        <Mail size={16} />
                        Email Address
                      </label>
                      <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-4 py-3 bg-card-dark/50 border rounded-xl text-text-primary placeholder-text-muted focus:outline-none transition-all duration-300 ${
                          focusedField === 'email' 
                            ? 'border-accent-gold ring-2 ring-accent-gold/20' 
                            : 'border-white/10'
                        }`}
                        placeholder="john@example.com"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>

                    <div>
                      <label className="block text-text-primary mb-2 text-sm font-medium flex items-center gap-2">
                        <Briefcase size={16} />
                        Project Type
                      </label>
                      <motion.select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('projectType')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-4 py-3 bg-card-dark/50 border rounded-xl text-text-primary focus:outline-none transition-all duration-300 ${
                          focusedField === 'projectType' 
                            ? 'border-accent-gold ring-2 ring-accent-gold/20' 
                            : 'border-white/10'
                        }`}
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <option value="">Select a project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </motion.select>
                    </div>

                    <div>
                      <label className="block text-text-primary mb-2 text-sm font-medium flex items-center gap-2">
                        <MessageSquare size={16} />
                        Project Details
                      </label>
                      <motion.textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={5}
                        className={`w-full px-4 py-3 bg-card-dark/50 border rounded-xl text-text-primary placeholder-text-muted focus:outline-none transition-all duration-300 resize-none ${
                          focusedField === 'message' 
                            ? 'border-accent-gold ring-2 ring-accent-gold/20' 
                            : 'border-white/10'
                        }`}
                        placeholder="Tell me about your project..."
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 8px 25px rgba(245, 158, 11, 0.4)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 btn-primary rounded-xl font-semibold text-base sm:text-lg hover-lift disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 focus-ring"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact