import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './About.css'
import Spline from '@splinetool/react-spline';

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-120px' , }) // triggers a bit before fully in view

  return (
   <motion.div
      className='about'
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.95, filter: 'blur(5px)' , borderRadius: '20px' }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' , borderRadius: '0px' }
          : {}
      }
      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1], // springy ease
      }}
      id="about"
    >
      
    </motion.div>
  )
}

export default About