import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Why from './pages/Why'
import Services from './pages/Services'
import ContactPage from './pages/ContactPage'
import About from './pages/About'
import WorkPage from './pages/WorkPage'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>

        <Route path='/why-us' element={<Why />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/contact' element={<ContactPage />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/our-work' element={<WorkPage />}/>


      </Routes>
      <Footer />
    </Router>
  )
}

export default App