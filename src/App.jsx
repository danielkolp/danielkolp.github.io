import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import FeaturedWork from './components/FeaturedWork'
import About from './components/About'
import Footer from './components/Footer'
import ProjectPage from './components/ProjectPage'
import AboutPage from './components/AboutPage'

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0 })
      return
    }

    const targetId = location.hash.replace('#', '')
    const frameId = requestAnimationFrame(() => {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })

    return () => cancelAnimationFrame(frameId)
  }, [location.pathname, location.hash])

  return null
}

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedWork />
      <About />
    </>
  )
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
