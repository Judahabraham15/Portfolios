import React from 'react'
import Spline from '@splinetool/react-spline';
import './Hero.css'
import { useEffect, useRef } from 'react';
import Button from '../Button/Button';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Use useSpring for extra smoothness only when scrolling
  const borderRadius = useSpring(
    useTransform(scrollYProgress, [0, 0.7], ["0px", "40px"]),
    { stiffness: 60, damping: 18 }
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.7], [1, 0.95]),
    { stiffness: 60, damping: 18 }
  );
  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.7], [0, -80]),
    { stiffness: 60, damping: 18 }
  );

  useEffect(() => {
    const textElement = document.getElementById('ChangeText');
    const textArray = ['Frontend Engineer', 'Aspiring FullStack Dev', 'Student', 'Software Engineer']
    let textIndex = 0;

    const ChangeText = () => {
      textElement.style.opacity = 0;
      setTimeout(() => {
        textElement.textContent = textArray[textIndex];
        textIndex = (textIndex + 1) % textArray.length
        textElement.style.opacity = 1;
        textElement.style.color = '#2E8B57';
      }, 500)
    }
    const interval = setInterval(() => {
      ChangeText()
    }, 2000)
    return () => clearInterval(interval);

  }, [])

  const categories = [
    { name: '70%', texts: 'Team Player' },
    { name: '90%', texts: 'Eagerness To Learn' },
    { name: '54%', texts: 'Coding Skills' }
  ]
  return (
    <section ref={heroRef} className="hero" id="home">
      <motion.div
        style={{ borderRadius, scale, y }}
        className="hero-content"
      >
        <div className="spline-bg">
          <Spline scene="https://prod.spline.design/UHHVCJtm-7Y3qLyP/scene.splinecode" />
          <div className="hero-overlay"></div>
        </div>
        <div className="content">
          <h1>
            Hi! I am Judah Abraham. <span id='ChangeText'>Software Engineer</span>
          </h1>
          <p>
            As a dedicated and aspiring software developer, I combine technical expertise with creative vision to build software that is both powerful and intuitive. With a focus on quality, reliability, and user experience, I deliver solutions that meet the highest standards of excellence and drive business success.
          </p>
        </div>
        <div className="text">
          {categories.map(({ name, texts }, idx) => (
            <div key={idx} className="qualities">
              <span className='devs'>{name}</span>
              <p>{texts}</p>
            </div>
          ))}
        </div>
        <div className="btn-container">
         <a href='#contact'> <Button title={'Lets Work Together'} /></a>      
           </div>
      <div className = 'socials'>
        <div className="insta">
          <a href='https://instagram.com/judahabraham2008' target='_blank'>
             <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="30px" height="30px" fillRule="nonzero" className="instagram"><g fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(8,8)"><path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path></g></g></svg>
             </a>
        </div>
        <div className="git">
          <a href='https://github.com/JudahAbraham15' target='_blank'>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" className="github">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg>
               </a>
        </div>
        <div className="whatsapp">
          <a href='https://twitter.com/AbrahamJud10090' target='_blank'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="x" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
          </svg>
            
      </a>
        </div>
        <div className="linkedin">
          <a href='https://www.linkedin.com/in/judah-abraham-aaba1b339/' target='_blank'>
           <svg
        xmlns="http://www.w3.org/2000/svg"
        className="linkedin"
        height="1.6em"
        viewBox="0 0 448 512"
      >
        <path
          d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
        ></path>
      </svg>
      </a>
        </div>
      </div>
      </motion.div>
    </section>

       

        
        
    
  )
}

export default Hero