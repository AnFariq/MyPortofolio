import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      title: 'UMKMConnect',
      description: 'Website menghubungkan umkm kecil',
      image: '/umkmconnect.png',
      tech: ['React', 'MongoDB', 'Stripe'],
      github: 'https://github.com/AnFariq/UMKMConnect',
      demo: 'https://umkm-connect-one.vercel.app/',
      featured: true
    },
    {
      title: 'BudayaConnect',
      description: 'Design untuk website yang menampilkan seluruh budaya yang ada di indonesia',
      image: '/api/placeholder/600/400',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      github: 'https://github.com/AnFariq/BudayaConnect',
      demo: 'https://budaya-nu.vercel.app/',
      featured: false
    },
    {
      title: 'Trust-Gadai',
      description: 'Sebuah platform gadai online untuk memproses gadai agar lebih efisien dan di lengkapi dengan keamanan yang baik.',
      image: '/api/placeholder/600/400',
      tech: ['PHP', 'MySQl', 'Tailwind'],
      github: 'https://github.com/AnFariq/Trust-Gadai',
      featured: false
    },
    {
      title: 'Website Streaming',
      description: 'Website yang saya buat untuk memudahkan menonton sebuah anime dan membaca komik secara gratis.',
      image: '/api/placeholder/600/400',
      tech: ['PHP', 'MySQL', 'NodeJS', 'Tailwind'],
      github: 'https://github.com/AnFariq/Website-Streaming',
      featured: false
    },
    {
      title: 'Program - D',
      description: 'Sebuah tools yang sedang saya kembangkan untuk membantu para aktivis siber',
      image: '/api/placeholder/600/400',
      tech: ['Python'],
      github: 'https://github.com/AnFariq/Program-D',
      featured: true
    },
    {
      title: 'Analitica - Windows Apps',
      description: 'Saya mengembangkan aplikasi ini karena di analitica sendiri belum tersedia aplikasi windows',
      image: '/api/placeholder/600/400',
      tech: ['C++', 'Dart', 'Swift', 'C#'],
      github: 'https://github.com/AnFariq/Flutter-Webview_analaitica-windows',
      featured: true
    }
  ]

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

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Explore my latest projects and creative solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)'
              }}
              className={`glass-card rounded-2xl overflow-hidden hover-glow group ${
                project.featured ? 'ring-2 ring-neon-cyan/50' : ''
              }`}
            >
              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold gradient-text opacity-20">
                    {project.title.charAt(0)}
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan text-xs font-semibold rounded-full border border-neon-cyan/50">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-web3-card/50 text-text-muted text-xs font-medium rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-web3-card/50 rounded-lg text-text-secondary hover:text-neon-cyan transition-colors duration-300 border border-white/10"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-neon-cyan/10 rounded-lg text-neon-cyan hover:bg-neon-cyan/20 transition-colors duration-300 border border-neon-cyan/30"
                  >
                    <ExternalLink size={16} />
                    Demo
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('github')?.scrollIntoView({ behavior: 'smooth' })}
            className="neon-border px-8 py-4 rounded-full text-text-primary font-semibold hover-glow"
          >
            View More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio