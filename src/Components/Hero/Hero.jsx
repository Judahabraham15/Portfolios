import React from 'react'
import Spline from '@splinetool/react-spline';
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
     <div className="content">
        <h1>Hi , I am Judah Abraham</h1>
        <p>Dictate your products with Judah4Good</p>
     </div>
     <div className="spline">
        <Spline
        scene="https://prod.spline.design/oY1prPE9wputgk4R/scene.splinecode" 
      />
      </div>
    </div>
  )
}

export default Hero