import React from 'react'
import Spline from '@splinetool/react-spline';
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
     <div className="content">
        <h1>Hi , I am Judah Abraham</h1>
     </div>
     <div className="spline">
       <Spline
        scene="https://prod.spline.design/ZOzYjRusZdOzI8zh/scene.splinecode" className='spline'
      />
      </div>
    </div>
  )
}

export default Hero