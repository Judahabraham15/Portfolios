import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './About.css'
import { FaReact, FaNodeJs, FaCss3Alt, FaJsSquare, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import myself from '../../assets/Judahs.jpg'
import Button from '../Button/Button';
import Judah from '../../assets/JUDAH CV.pdf'
import { FiDownload } from "react-icons/fi";


const About = () => {
  const ref = useRef(null) 
  const isInView = useInView(ref, { once: true, margin: '-120px' , }) // triggers a bit before fully in view

  const experience =[
  {
    text : '5+', 
    desc : "Months of Experience"
  },
  {
    text : "7+",
    desc : "Projects Completed"
  },
   {
    text : "5+",
    desc :"Technologies"
   }
]
  return (
   <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.95, filter: 'blur(5px)'  }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
          : {}
      }
      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1], // springy ease
      }}
      id="about"
    >
        <motion.span
  className="about-float-icon react"
  initial={{ y: -30, opacity: 0 }}
  animate={isInView ? { y: 0, opacity: 0.9 } : {}}
  transition={{ duration: 1, delay: 0.2, type: "spring" }}
  style={{ position: "absolute", left: "6%", top: "10%" }}
>
  <FaReact size={32} color="#61dafb" />
</motion.span>
<motion.span className='about-float-icon html'
initial={{ y: -30 , opacity: 0}}
  animate={isInView ? { y: 0, opacity: 0.9 } : {}}
  transition={{duration : 1, delay : 0.2 , type : "spring"}}
  style={{position: "absolute" , left: "55%", top: "50%"}}
  >
    <FaHtml5 size={28} color='red'/>
</motion.span>
<motion.span
  className="about-float-icon node"
  initial={{ y: 30, opacity: 0 }}
  animate={isInView ? { y: 0, opacity: 0.9 } : {}}
  transition={{ duration: 1, delay: 0.4, type: "spring" }}
  style={{ position: "absolute", right: "8%", top: "22%" }}
>
  <FaNodeJs size={28} color="#3c873a" />
</motion.span>
<motion.span
  className="about-float-icon tailwind"
  initial={{ x: -30, opacity: 0 }}
  animate={isInView ? { x: 0, opacity: 0.9 } : {}}
  transition={{ duration: 1, delay: 0.6, type: "spring" }}
  style={{ position: "absolute", left: "10%", bottom: "10%" }}
>
  <SiTailwindcss  size={30} color="#61dafb" />
</motion.span>
<motion.span
  className="about-float-icon css"
  initial={{ x: 30, opacity: 0 }}
  animate={isInView ? { x: 0, opacity: 0.9 } : {}}
  transition={{ duration: 1, delay: 0.8, type: "spring" }}
  style={{ position: "absolute", right: "10%", bottom: "20%" }}
>
  <FaCss3Alt size={26} color="#264de4" />
</motion.span>
<motion.span
  className="about-float-icon js"
  initial={{ y: -30, opacity: 0 }}
  animate={isInView ? { y: 0, opacity: 0.9 } : {}}
  transition={{ duration: 1, delay: 1, type: "spring" }}
  style={{ position: "absolute", left: "50%", top: "8%" }}
>
  <FaJsSquare size={26} color="#f7df1e" />
</motion.span>
       
      <div className="about-content">
            <h1>Who is Judah <span className='dev'>Abraham?</span> </h1>
            <p>I'm Judah Abraham, Known as "Judah4Good". A passionate 16-year-old self-taught aspiring FullStack Developer with over 5+ months experience and a strong drive to solve real world problems and contribute greatly in the development of both apps and web develpoment. I am a DIY guy.
                <br/>
                <br/>
                At 16 , I have created some projects from a todo-list app to a frontend blinkist website and I am just getting warmed up! I love solving real world problems , adapting easily , handling pressure and I love building modern and functional user interfaces.
                <br/>
                <br/> 
                </p>
                <div className="texts">
                {experience.map(({text , desc} , idx)=>(
                  <div className="qualitiess" key={idx}>
                  <span className='devv'> {text}</span>
                  <p className='para'>{desc}</p>
                </div>
                ))}
                </div>
                
                 
                 <div className="btn-about-container">
                    <motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={isInView ? { scale: 1, opacity: 1 } : {}}
  transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
>
  <a href={Judah} download className='ap'>
    <Button title={'Download CV'} className={'btn-about'} icon={<FiDownload size={20} color='white'/>}/>
  </a>
  
</motion.div>
                 </div>        
      </div>
      <div className="img-content">
       <motion.img
  src={myself}
  className="image"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={isInView ? { scale: 1, opacity: 1 } : {}}
  transition={{ duration: 1, type: "spring" }}
  whileHover={{ scale: 1.05, rotate: 2 }}
/> 
      </div>
    </motion.div>
  )
}

export default About