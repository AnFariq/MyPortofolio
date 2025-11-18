import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Star, GitBranch, ExternalLink, Code } from 'lucide-react'

const GitHub = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.github.com/users/AnFariq/repos?sort=updated&per_page=12')
        if (!response.ok) {
          throw new Error('Failed to fetch repositories')
        }
        const data = await response.json()
        setRepos(data)
      } catch (err) {
        setError(err.message)
        // Fallback data for demo
        setRepos([
          {
            id: 1,
            name: 'awesome-web3-project',
            description: 'A cutting-edge Web3 application with blockchain integration',
            stargazers_count: 42,
            forks_count: 15,
            language: 'JavaScript',
            html_url: 'https://github.com',
            topics: ['web3', 'blockchain', 'react']
          },
          {
            id: 2,
            name: 'ui-component-library',
            description: 'Modern React component library with TypeScript support',
            stargazers_count: 128,
            forks_count: 34,
            language: 'TypeScript',
            html_url: 'https://github.com',
            topics: ['react', 'typescript', 'components']
          },
          {
            id: 3,
            name: 'mobile-app-template',
            description: 'Cross-platform mobile app template with React Native',
            stargazers_count: 67,
            forks_count: 23,
            language: 'JavaScript',
            html_url: 'https://github.com',
            topics: ['react-native', 'mobile', 'template']
          },
          {
            id: 4,
            name: 'api-server',
            description: 'RESTful API server with Node.js and Express',
            stargazers_count: 89,
            forks_count: 28,
            language: 'TypeScript',
            html_url: 'https://github.com',
            topics: ['nodejs', 'api', 'typescript']
          },
          {
            id: 5,
            name: 'design-system',
            description: 'Comprehensive design system for modern web applications',
            stargazers_count: 156,
            forks_count: 45,
            language: 'CSS',
            html_url: 'https://github.com',
            topics: ['design-system', 'css', 'ui']
          },
          {
            id: 6,
            name: 'machine-learning',
            description: 'Machine learning experiments and implementations',
            stargazers_count: 234,
            forks_count: 67,
            language: 'Python',
            html_url: 'https://github.com',
            topics: ['machine-learning', 'python', 'ai']
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: 'text-yellow-400',
      TypeScript: 'text-blue-400',
      Python: 'text-green-400',
      CSS: 'text-pink-400',
      HTML: 'text-orange-400',
      Java: 'text-red-400',
      Go: 'text-cyan-400',
      Rust: 'text-orange-600',
    }
    return colors[language] || 'text-gray-400'
  }

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
      <section id="github" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-neon-cyan"></div>
            <p className="text-text-secondary mt-4">Loading repositories...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="github" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">GitHub Repositories</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Explore my open-source contributions and personal projects
          </p>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8 p-4 glass-card rounded-lg max-w-md mx-auto"
          >
            <p className="text-text-secondary text-sm">
              Using demo data. Connect your GitHub API for real repositories.
            </p>
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {repos.map((repo) => (
            <motion.div
              key={repo.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 0 30px rgba(255, 0, 255, 0.3)'
              }}
              className="glass-card p-6 rounded-xl hover-glow group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="tech-icon">
                    <Code size={20} className="text-neon-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary group-hover:text-neon-purple transition-colors duration-300">
                      {repo.name}
                    </h3>
                    {repo.language && (
                      <div className="flex items-center gap-2 mt-1">
                        <div className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`} />
                        <span className="text-xs text-text-muted">{repo.language}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <motion.a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-text-secondary hover:text-neon-cyan transition-colors duration-300"
                >
                  <ExternalLink size={16} />
                </motion.a>
              </div>

              <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                {repo.description || 'No description available'}
              </p>

              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 bg-neon-purple/10 text-neon-purple text-xs font-medium rounded-full border border-neon-purple/30"
                    >
                      {topic}
                    </span>
                  ))}
                  {repo.topics.length > 3 && (
                    <span className="px-2 py-1 bg-web3-card/50 text-text-muted text-xs font-medium rounded-full">
                      +{repo.topics.length - 3}
                    </span>
                  )}
                </div>
              )}

              <div className="flex items-center justify-between text-text-muted text-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star size={14} />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitBranch size={14} />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>
                
                <motion.a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 text-neon-cyan hover:text-neon-purple transition-colors duration-300"
                >
                  <Github size={14} />
                  View
                </motion.a>
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
          <motion.a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 neon-border rounded-full text-text-primary font-semibold hover-glow"
          >
            <Github size={20} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default GitHub