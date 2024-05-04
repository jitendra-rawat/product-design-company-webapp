import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Why from './pages/Why'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>

        <Route path='/why-us' element={<Why />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App