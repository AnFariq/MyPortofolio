import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Eye, ExternalLink, Palette, Layers, Zap } from 'lucide-react'

const Figma = () => {
  const [designs, setDesigns] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate Figma API call with demo data
    const fetchDesigns = async () => {
      try {
        setLoading(true)
        // In a real implementation, you would use Figma API
        // const response = await fetch('https://api.figma.com/v1/files/YOUR_FILE_ID', {
        //   headers: {
        //     'X-Figma-Token': 'YOUR_FIGMA_TOKEN'
        //   }
        // })
        
        // Demo data
        setTimeout(() => {
          setDesigns([
            {
              id: 1,
              name: 'Mobile Banking App',
              description: 'Complete mobile banking application design with modern UI patterns',
              type: 'Mobile App',
              image: '/api/placeholder/400/300',
              thumbnailUrl: '/api/placeholder/400/300',
              figmaUrl: 'https://figma.com',
              category: 'Mobile Design',
              tools: ['Figma', 'Prototyping', 'UI Kit'],
              featured: true
            },
            {
              id: 2,
              name: 'E-Commerce Dashboard',
              description: 'Admin dashboard for e-commerce platform with analytics and management tools',
              type: 'Web Dashboard',
              image: '/api/placeholder/400/300',
              thumbnailUrl: '/api/placeholder/400/300',
              figmaUrl: 'https://figma.com',
              category: 'Web Design',
              tools: ['Figma', 'Design System', 'Components'],
              featured: true
            },
            {
              id: 3,
              name: 'Social Media Platform',
              description: 'Social networking app with modern design and user interactions',
              type: 'Mobile & Web',
              image: '/api/placeholder/400/300',
              thumbnailUrl: '/api/placeholder/400/300',
              figmaUrl: 'https://figma.com',
              category: 'UI/UX Design',
              tools: ['Figma', 'User Research', 'Wireframing'],
              featured: false
            },
            {
              id: 4,
              name: 'Fitness Tracking App',
              description: 'Health and fitness tracking application with data visualization',
              type: 'Mobile App',
              image: '/api/placeholder/400/300',
              thumbnailUrl: '/api/placeholder/400/300',
              figmaUrl: 'https://figma.com',
              category: 'Mobile Design',
              tools: ['Figma', 'Animation', 'Micro-interactions'],
              featured: false
            },
            {
              id: 5,
              name: 'SaaS Landing Page',
              description: 'Modern landing page design for SaaS product with conversion focus',
              type: 'Web Design',
              image: '/api/placeholder/400/300',
              thumbnailUrl: '/api/placeholder/400/300',
              figmaUrl: 'https://figma.com',
              category: 'Web Design',
              tools: ['Figma', 'Responsive Design', 'Prototyping'],
              featured: false
            },
            {
              id: 6,
              name: 'Design System',
              description: 'Comprehensive design system with components and guidelines',
              type: 'Design System',
              image: '/api/placeholder/400/300',
              thumbnailUrl: '/api/placeholder/400/300',
              figmaUrl: 'https://figma.com',
              category: 'Design System',
              tools: ['Figma', 'Components', 'Documentation'],
              featured: true
            }
          ])
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error('Error fetching Figma designs:', error)
        setLoading(false)
      }
    }

    fetchDesigns()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  if (loading) {
    return (
      <section id="figma" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-neon-pink"></div>
            <p className="text-text-secondary mt-4">Loading Figma designs...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="figma" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Figma Designs</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Explore my UI/UX design work and creative solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {designs.map((design) => (
            <motion.div
              key={design.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 0 30px rgba(255, 20, 147, 0.3)'
              }}
              className={`glass-card rounded-2xl overflow-hidden hover-glow group ${
                design.featured ? 'ring-2 ring-neon-pink/50' : ''
              }`}
            >
              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-neon-purple/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">
                    <Palette className="text-neon-pink" />
                  </div>
                </div>
                {design.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-neon-pink/20 text-neon-pink text-xs font-semibold rounded-full border border-neon-pink/50">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <motion.a
                    href={design.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neon-pink text-white p-3 rounded-full"
                  >
                    <Eye size={20} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-neon-pink transition-colors duration-300">
                    {design.name}
                  </h3>
                  <span className="px-2 py-1 bg-neon-pink/10 text-neon-pink text-xs font-medium rounded-full border border-neon-pink/30">
                    {design.type}
                  </span>
                </div>
                
                <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                  {design.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {design.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-web3-card/50 text-text-muted text-xs font-medium rounded-full border border-white/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-text-muted text-sm">
                    {design.category}
                  </span>
                  
                  <motion.a
                    href={design.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 text-neon-pink hover:text-neon-purple transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    View in Figma
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Layers className="text-neon-pink" size={32} />
              <h3 className="text-2xl font-bold gradient-text">Need a Design?</h3>
            </div>
            <p className="text-text-secondary mb-6">
              I create beautiful, functional designs that users love. Let's work together on your next project.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="neon-border px-8 py-3 rounded-full text-text-primary font-semibold hover-glow"
            >
              Discuss Your Design Project
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Figma