import React from 'react'
import Spline from '@splinetool/react-spline';
import './Hero.css'
import { useEffect } from 'react';
const Hero = () => {
  useEffect(()=>{
    const textElement = document.getElementById('ChangeText');
  const textArray = ['Smart Development' ,  'Innovative Solutions' ,'Digital Systems']
    let textIndex = 0;

    const ChangeText = () => {
      textElement.style.opacity= 0;
      setTimeout(()=>{
       textElement.textContent = textArray[textIndex];
       textIndex = (textIndex + 1  ) % textArray.length
       textElement.style.opacity = 1;
       textElement.style.color = '#2C5364';
      } , 500)
    }
    const interval = setInterval(()=>{
ChangeText()
    }  , 2000)
    return () => clearInterval (interval);
    
  }, [])
  return (
    <div className='hero'>
     <div className="content">
        <h1>Unlock Potential through{''} <span id='ChangeText'>Technology</span> with Judah4Good</h1>
        <p>As a dedicated and aspiring software developer, I combine technical expertise with creative vision to build software that is both powerful and intuitive. With a focus on quality  , reliability , and user experience, I deliver solutions that meet the highest standards of excellence and drive buisness success.</p>
     </div>
     <div className="spline">
         <Spline
        scene="https://prod.spline.design/GlU9mQH8ujn-nfgQ/scene.splinecode" 
      />
      </div>
    </div>
  )
}

export default Hero