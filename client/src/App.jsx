import React from 'react'
import Home from './Components/pages/Home'
import Header from './Components/navbar/Header'
import Footer from './Components/pages/Footer'
import Feature from './Components/pages/Feature'
import About from './Components/pages/About'
import Pricing from './Components/pages/Pricing'
import Contact from './Components/pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
