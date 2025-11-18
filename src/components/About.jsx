import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award, Code, Palette, Globe, Users } from 'lucide-react'

const About = () => {
  const education = {
    university: "Universitas Dinamika Surabaya",
    degree: "S1 Sistem Informasi",
    status: "Mahasiswa Aktif",
    location: "Surabaya, Indonesia",
    startDate: "2022",
    expectedGraduation: "2026"
  }

  const skills = [
    {
      icon: Code,
      title: "Web Development",
      description: "React, Next.js, TypeScript, Node.js"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Prototyping"
    },
    {
      icon: Globe,
      title: "Web3 Technologies",
      description: "Blockchain, Smart Contracts, DApps"
    },
    {
      icon: Users,
      title: "Soft Skills",
      description: "Teamwork, Communication, Problem Solving"
    }
  ]

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
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-blue/5 via-transparent to-transparent pointer-events-none" />
      
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
            data-text="About Me"
          >
            <span className="gradient-text text-shadow-glow">About Me</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Passionate student developer with a love for creating innovative digital solutions and beautiful user experiences
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Education Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="modern-card p-6 sm:p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="tech-icon w-12 h-12 sm:w-14 sm:h-14"
                >
                  <GraduationCap className="text-accent-gold" size={24} />
                </motion.div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary font-display">
                    Education
                  </h3>
                  <p className="text-text-secondary text-sm sm:text-base">
                    Academic Background
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-accent-blue mt-1 flex-shrink-0" size={16} />
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary">
                      {education.university}
                    </h4>
                    <p className="text-text-secondary">
                      {education.degree}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="text-accent-purple flex-shrink-0" size={16} />
                  <div>
                    <p className="text-text-secondary">
                      {education.startDate} - {education.expectedGraduation}
                    </p>
                    <p className="text-accent-gold font-medium text-sm">
                      {education.status}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="text-accent-cyan flex-shrink-0" size={16} />
                  <p className="text-text-secondary">
                    {education.location}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Personal Introduction */}
            <motion.div variants={itemVariants} className="modern-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 font-display">
                My Journey
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As an active Information Systems student at Universitas Dinamika Surabaya, I'm passionate about 
                bridging the gap between technology and design. My academic journey has equipped me with strong 
                foundational knowledge in software development, database management, and system analysis.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                My goal is to create innovative solutions that not only solve problems but also provide 
                exceptional user experiences.
              </p>
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="modern-card p-6 sm:p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="tech-icon w-12 h-12 sm:w-14 sm:h-14"
                >
                  <Award className="text-accent-blue" size={24} />
                </motion.div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary font-display">
                    Skills & Expertise
                  </h3>
                  <p className="text-text-secondary text-sm sm:text-base">
                    What I bring to the table
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.title}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    className="glass-card p-4 rounded-xl hover-lift group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                        className="tech-icon w-10 h-10"
                      >
                        <skill.icon 
                          size={18} 
                          className="text-accent-gold group-hover:scale-110 transition-transform duration-200" 
                        />
                      </motion.div>
                      <h4 className="text-text-primary font-semibold group-hover:text-accent-gold transition-colors duration-300">
                        {skill.title}
                      </h4>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Goals & Aspirations */}
            <motion.div variants={itemVariants} className="modern-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 font-display">
                Goals & Aspirations
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-text-secondary leading-relaxed">
                    <span className="text-text-primary font-medium">Short-term:</span> Excel in academic projects 
                    and build a strong portfolio of web applications and designs.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0" />
                  <p className="text-text-secondary leading-relaxed">
                    <span className="text-text-primary font-medium">Mid-term:</span> Gain industry experience 
                    through internships and freelance projects while specializing in full-stack development.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 flex-shrink-0" />
                  <p className="text-text-secondary leading-relaxed">
                    <span className="text-text-primary font-medium">Long-term:</span> Become a full-stack developer 
                    and UI/UX designer, creating innovative solutions that make a positive impact.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About