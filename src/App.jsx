import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Highlights from './components/Highlights/Highlights'
import Testimonials from './components/Testimonials/Testimonials'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Highlights/>
    <Testimonials/>
    <About/>
    <Footer/>
    </>
  )
}

export default App