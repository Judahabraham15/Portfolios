
import './App.css'
import About from './Components/About/About'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import Timeline from './Components/Timeline/Timeline'
import Contacts from './Components/Contacts/Contacts'
import Footer from './Components/Footer/Footer'
// import React, { useEffect } from 'react';
// import Lenis from '@studio-freight/lenis';
function App() {
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.2, // control how slow/smooth it scrolls
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function
  //     smooth: true,
  //   })

  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)
  // }, [])
  return (
    <div className='app'>
     <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
     <Timeline/>
     <Projects/>
    <Contacts/>
    <Footer/>
    </div>
  )
}

export default App
