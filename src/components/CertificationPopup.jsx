import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Search, Filter, Award, Calendar, ExternalLink, Tag, ChevronDown } from 'lucide-react'

const CertificationPopup = ({ isOpen = false, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Mock data untuk sertifikat
  const mockCertificates = [
    {
      id: 1,
      name: "Web Development Fundamentals",
      issuer: "Tech Academy",
      date: "2024-03-15",
      category: "Programming",
      badge: "🏆",
      description: "Comprehensive course covering HTML, CSS, JavaScript, and modern web development practices.",
      credentialId: "TC-2024-03-15-001",
      credentialUrl: "#"
    },
    {
      id: 2,
      name: "React Advanced Patterns",
      issuer: "React Masters",
      date: "2024-02-20",
      category: "Programming",
      badge: "🥇",
      description: "Advanced React patterns including hooks, context, performance optimization, and testing.",
      credentialId: "RM-2024-02-20-042",
      credentialUrl: "#"
    },
    {
      id: 3,
      name: "UI/UX Design Principles",
      issuer: "Design School",
      date: "2024-01-10",
      category: "Design",
      badge: "🎨",
      description: "Fundamental principles of user interface and user experience design.",
      credentialId: "DS-2024-01-10-789",
      credentialUrl: "#"
    },
    {
      id: 4,
      name: "Blockchain Development",
      issuer: "Crypto Institute",
      date: "2023-12-05",
      category: "Web3",
      badge: "⛓️",
      description: "Introduction to blockchain technology, smart contracts, and DApp development.",
      credentialId: "CI-2023-12-05-256",
      credentialUrl: "#"
    },
    {
      id: 5,
      name: "Database Management",
      issuer: "Data Systems Pro",
      date: "2023-11-18",
      category: "Programming",
      badge: "🗄️",
      description: "Advanced database design, SQL, NoSQL, and database optimization techniques.",
      credentialId: "DSP-2023-11-18-512",
      credentialUrl: "#"
    },
    {
      id: 6,
      name: "Mobile App Development",
      issuer: "Mobile Dev Academy",
      date: "2023-10-22",
      category: "Programming",
      badge: "📱",
      description: "Cross-platform mobile app development using React Native and Flutter.",
      credentialId: "MDA-2023-10-22-333",
      credentialUrl: "#"
    },
    {
      id: 7,
      name: "Figma Advanced Prototyping",
      issuer: "Design Tools Pro",
      date: "2023-09-15",
      category: "Design",
      badge: "🎯",
      description: "Advanced prototyping techniques, component systems, and design collaboration.",
      credentialId: "DTP-2023-09-15-777",
      credentialUrl: "#"
    },
    {
      id: 8,
      name: "Cloud Computing Fundamentals",
      issuer: "Cloud Academy",
      date: "2023-08-30",
      category: "Cloud",
      badge: "☁️",
      description: "Introduction to cloud computing, AWS services, and cloud architecture.",
      credentialId: "CA-2023-08-30-999",
      credentialUrl: "#"
    },
    {
      id: 9,
      name: "Python for Data Science",
      issuer: "Data Science Institute",
      date: "2023-07-20",
      category: "Data Science",
      badge: "🐍",
      description: "Python programming for data analysis, visualization, and machine learning basics.",
      credentialId: "DSI-2023-07-20-444",
      credentialUrl: "#"
    },
    {
      id: 10,
      name: "Agile Project Management",
      issuer: "Agile Masters",
      date: "2023-06-12",
      category: "Soft Skills",
      badge: "📋",
      description: "Agile methodologies, Scrum framework, and project management best practices.",
      credentialId: "AM-2023-06-12-666",
      credentialUrl: "#"
    },
    {
      id: 11,
      name: "Cybersecurity Essentials",
      issuer: "Security Institute",
      date: "2023-05-08",
      category: "Security",
      badge: "🔒",
      description: "Fundamental cybersecurity concepts, threat detection, and security best practices.",
      credentialId: "SI-2023-05-08-888",
      credentialUrl: "#"
    },
    {
      id: 12,
      name: "DevOps Practices",
      issuer: "DevOps Academy",
      date: "2023-04-25",
      category: "DevOps",
      badge: "🔄",
      description: "CI/CD pipelines, containerization, and infrastructure as code.",
      credentialId: "DA-2023-04-25-111",
      credentialUrl: "#"
    }
  ]

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Programming', label: 'Programming' },
    { value: 'Design', label: 'Design' },
    { value: 'Web3', label: 'Web3' },
    { value: 'Cloud', label: 'Cloud' },
    { value: 'Data Science', label: 'Data Science' },
    { value: 'Soft Skills', label: 'Soft Skills' },
    { value: 'Security', label: 'Security' },
    { value: 'DevOps', label: 'DevOps' }
  ]

  // Filter certificates based on search and category
  const filteredCertificates = mockCertificates.filter(cert => {
    const matchesSearch = cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || cert.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isDropdownOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  }

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      y: 20,
      transition: {
        duration: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-4 sm:inset-8 lg:inset-16 bg-gradient-to-br from-primary-dark via-secondary-dark to-accent-dark rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="tech-icon w-12 h-12"
                  >
                    <Award className="text-accent-gold" size={24} />
                  </motion.div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-text-primary font-display">
                      My Certifications
                    </h2>
                    <p className="text-text-secondary text-sm">
                      {filteredCertificates.length} certificates found
                    </p>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="tech-icon w-10 h-10"
                >
                  <X className="text-text-secondary" size={20} />
                </motion.button>
              </div>

              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" size={18} />
                  <input
                    type="text"
                    placeholder="Search certificates..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-card-dark/50 border border-white/10 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 transition-all duration-300"
                  />
                </div>

                <div className="dropdown-container relative">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-card-dark/50 border border-white/10 rounded-xl text-text-primary hover:border-accent-gold transition-all duration-300 min-w-[180px]"
                  >
                    <Filter size={18} />
                    <span className="flex-1 text-left">
                      {categories.find(cat => cat.value === selectedCategory)?.label}
                    </span>
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </motion.button>

                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-card-dark/95 backdrop-blur-glass border border-white/10 rounded-xl shadow-xl z-10 max-h-60 overflow-y-auto"
                    >
                      {categories.map((category) => (
                        <button
                          key={category.value}
                          onClick={() => {
                            setSelectedCategory(category.value)
                            setIsDropdownOpen(false)
                          }}
                          className={`w-full px-4 py-2.5 text-left hover:bg-accent-gold/10 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl ${
                            selectedCategory === category.value ? 'bg-accent-gold/20 text-accent-gold' : 'text-text-primary'
                          }`}
                        >
                          {category.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {filteredCertificates.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center py-12"
                >
                  <Award className="text-text-muted mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    No certificates found
                  </h3>
                  <p className="text-text-secondary">
                    Try adjusting your search or filter criteria
                  </p>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {filteredCertificates.map((cert, index) => (
                    <motion.div
                      key={cert.id}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ 
                        scale: 1.03,
                        y: -5,
                        transition: { duration: 0.3 }
                      }}
                      className="modern-card p-4 sm:p-5 rounded-xl hover-lift group cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{cert.badge}</span>
                          <div>
                            <h3 className="text-text-primary font-semibold text-sm sm:text-base group-hover:text-accent-gold transition-colors duration-300 line-clamp-1">
                              {cert.name}
                            </h3>
                            <p className="text-text-secondary text-xs sm:text-sm">
                              {cert.issuer}
                            </p>
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ExternalLink className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={16} />
                        </motion.div>
                      </div>

                      <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2">
                        {cert.description}
                      </p>

                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="text-accent-blue" size={14} />
                          <span className="text-text-muted text-xs">
                            {new Date(cert.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Tag className="text-accent-purple" size={14} />
                          <span className="text-accent-purple text-xs font-medium">
                            {cert.category}
                          </span>
                        </div>
                      </div>

                      <div className="text-xs text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        ID: {cert.credentialId}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-6 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-text-muted text-sm text-center sm:text-left">
                  Showing {filteredCertificates.length} of {mockCertificates.length} certificates
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="px-6 py-2.5 bg-gradient-to-r from-accent-gold to-accent-blue text-primary-dark font-semibold rounded-xl hover-lift text-sm sm:text-base"
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CertificationPopup