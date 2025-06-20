import React from 'react'
import Blink from '../../assets/Blink.png'
import Sam from  '../../assets/Sam.png'
import Weather from '../../assets/Weather.png'
import To from '../../assets/To.png'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
} from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb'
import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {

    const Projects = [
        {
          img : Blink,
          title: "Blinkist-Landing Page",
          desc: "A Blinkist-Landing Page  with more features and a modern Login Page",
          icons : [<FaCss3Alt color='#1a1a1a' key="css3" />, <FaReact color='#1a1a1a' key="react" />, <FaJs color='#1a1a1a' key="js" />],
          link: "https://blinkist-landing-page-seven.vercel.app/"
        },
        {
          img: Sam, 
          title: "Samsung Landing Page",
          desc: "A Samsung Landing Page that showcases the quality of Samsung Products",
          icons: [<FaCss3Alt color='#1a1a1a' key="css3" />, <FaReact color='#1a1a1a' key="react" />, <FaJs color="#1a1a1a" key="js" />],
          link: "https://samsung-nu.vercel.app/"
        },
        {
          img: Weather,
          title: "Weather App",
          desc: "A Weather App that tells the current weather of a city.",
          icons: [<FaJs color='#1a1a1a' key="js" />, <FaHtml5 color='#1a1a1a' key="html5" />, <FaCss3Alt color='#1a1a1a' key="css3-2" />],
          link: "https://weather-app-oapd.vercel.app/"
        },
        {
          img: To, 
          title: "To-do-List",
          desc: "An App to store Tasks to be done.",
          icons: [<FaHtml5 color='#1a1a1a' key="html5" />, <FaCss3Alt color='#1a1a1a' key="css3" />, <FaJs color='#1a1a1a' key="js" />], 
          link: "https://to-do-lists-f4xt.vercel.app/"
        }
    ]

    // Animation variants
    const containerVariants = {
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.18
        }
      }
    }

    const cardVariants = {
      hidden: { opacity: 0, y: 60, scale: 0.95 },
      show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 14 } }
    }

    return (
      <div className='projects' id='projects'>
        <motion.div
          className="projects-text"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
        >
          <h1> Projects</h1>
          <p className='ppp'>Check out some of Judah<span className="dev">4Good</span> projects.</p>
        </motion.div>
        <div className="projects-wrap">
          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {Projects.map(({ title, img, icons, desc, link }, index) => (
              <motion.div
                className="card"
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.04, boxShadow: "0 4px 24px rgba(33,136,56,0.13)" }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <div className="img-src">
                  <img src={img} className='img-blink' alt={title} />
                </div>
                <div className="card-text">
                  <h1>{title}</h1>
                  <p>{desc}</p>
                  <div className="icons-tag">
                    {icons.map((icon, i) => (
                      <span key={i}>{icon}</span>
                    ))}
                  </div>
                  <div className="live">
                    {link && (
                      <>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                          <TbWorldWww color="#1a1a1a" className='preview' />
                        </a>
                        <p>Live Preview</p>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    )
}

export default Projects