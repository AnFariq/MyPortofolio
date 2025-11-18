import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import CertificationPreview from './components/CertificationPreview'
import Portfolio from './components/Portfolio'
import GitHub from './components/GitHub'
import Figma from './components/Figma'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background from './components/Background'

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-primary-dark overflow-x-hidden">
        <Background />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <CertificationPreview />
            <Portfolio />
            <GitHub />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
