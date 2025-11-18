import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, Eye, TrendingUp, Calendar, Filter, Search } from 'lucide-react'
import CertificationPopup from './CertificationPopup'

const CertificationPreview = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  // Mock data untuk preview
  const mockStats = {
    totalCertificates: 12,
    categories: 5,
    latestCertificate: "Web Development Advanced",
    latestDate: "2024-03-15"
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <>
      <section id="certifications" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-radial from-accent-purple/5 via-transparent to-transparent pointer-events-none" />
        
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
              data-text="Certifications"
            >
              <span className="gradient-text text-shadow-glow">Certifications</span>
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Professional certifications and achievements that showcase my expertise and commitment to continuous learning
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12"
          >
            {/* Total Certificates Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="modern-card p-6 sm:p-8 rounded-2xl hover-lift group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 to-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div 
                className="tech-icon mb-4 sm:mb-6 mx-auto w-16 h-16 sm:w-20 sm:h-20 relative z-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Award className="text-accent-gold" size={32} />
              </motion.div>
              
              <h3 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2 text-center relative z-10">
                {mockStats.totalCertificates}+
              </h3>
              <p className="text-text-secondary text-center text-sm sm:text-base relative z-10">
                Total Certificates
              </p>
            </motion.div>

            {/* Categories Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="modern-card p-6 sm:p-8 rounded-2xl hover-lift group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div 
                className="tech-icon mb-4 sm:mb-6 mx-auto w-16 h-16 sm:w-20 sm:h-20 relative z-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Filter className="text-accent-blue" size={32} />
              </motion.div>
              
              <h3 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2 text-center relative z-10">
                {mockStats.categories}
              </h3>
              <p className="text-text-secondary text-center text-sm sm:text-base relative z-10">
                Categories
              </p>
            </motion.div>

            {/* Latest Certificate Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="modern-card p-6 sm:p-8 rounded-2xl hover-lift group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div 
                className="tech-icon mb-4 sm:mb-6 mx-auto w-16 h-16 sm:w-20 sm:h-20 relative z-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <TrendingUp className="text-accent-purple" size={32} />
              </motion.div>
              
              <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2 text-center relative z-10">
                {mockStats.latestCertificate}
              </h3>
              <p className="text-text-secondary text-center text-sm sm:text-base relative z-10">
                Latest Achievement
              </p>
            </motion.div>

            {/* View All Button Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 }
              }}
              onClick={() => setIsPopupOpen(true)}
              className="modern-card p-6 sm:p-8 rounded-2xl hover-lift group cursor-pointer relative overflow-hidden bg-gradient-to-br from-accent-gold/10 to-accent-blue/10"
            >
              <motion.div 
                className="tech-icon mb-4 sm:mb-6 mx-auto w-16 h-16 sm:w-20 sm:h-20 relative z-10"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Eye className="text-accent-gold" size={32} />
              </motion.div>
              
              <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2 text-center relative z-10">
                View All
              </h3>
              <p className="text-text-secondary text-center text-sm sm:text-base relative z-10">
                Browse Certificates
              </p>
              
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye size={20} className="text-accent-gold" />
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.button
                onClick={() => setIsPopupOpen(true)}
                className="btn-primary px-8 sm:px-10 py-4 sm:py-5 rounded-full text-text-primary font-semibold text-base sm:text-lg hover-lift focus-ring group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Eye size={20} />
                  View All Certificates
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
              Explore my professional development journey
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Certification Popup */}
      <CertificationPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </>
  )
}

export default CertificationPreview