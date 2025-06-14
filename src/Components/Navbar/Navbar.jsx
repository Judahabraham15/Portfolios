import React, { use } from 'react'
import './Navbar.css'
import { useState , useEffect } from 'react'

const Navbar = () => {

   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
     const navlinks = document.querySelectorAll('.nav-links a') 
  navlinks.forEach(link => {
    link.addEventListener('click' , function(e){
      e.preventDefault()
      // Time to target the Id for each section
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if(targetElement){
        window.scrollTo({
       top : targetElement.offsetTop,
       behavior : 'smooth'
      });
      };
    });
  }) ;
    const handleScroll = () => {
      // Change 80 to the scrollY value where you want the color to change
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' nav-scrolled' : ''}`}>
      <h1 className='nav-header'>Judah<span className='dev'>4Good</span></h1>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
           <li><a href="#qualifications">Qualifications</a></li>
        <li><a href='#skills'> Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar