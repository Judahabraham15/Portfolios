import React from 'react'
import './Timeline.css'
import { FaCode, FaProjectDiagram, FaReact, FaUserFriends } from 'react-icons/fa'
import { HiBadgeCheck } from "react-icons/hi";
import { motion } from 'framer-motion'

const Timeline = () => {
  const Timelines = [
    { title: "Started Coding", desc: "Began my coding journey in 2022, learning HTML and CSS.", side: "left", icon: <FaCode color="#218838" />  , text: "Click Icon to View Certificate" , icons : <HiBadgeCheck size={18} color="#2e8b57" style = {{verticalAlign : "middle"}} />},
    { title: "First Project", desc: "Built my first to-do app and a frontend Blinkist clone in 2024.", side: "right", icon: <FaProjectDiagram color="#218838" /> },
    { title: "React & Tailwind", desc: "Dove into React.js and Tailwind CSS for modern UI development.", side: "left", icon: <FaReact color="#218838" /> },
    { title: "Freelancing", desc: "Yet to take collaborative Jobs.", side: "right", icon: <FaUserFriends color="#218838" /> }
  ];

  
  const dotPositions = ['7.5%', '33%', '59%', '86%'];

  return (
    <div className='container' id='qualifications'>
      <motion.div
        className="time-line"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
      >
        <h1>Experience</h1>
        <p>Judah<span className='dev'>4Good's</span> Journey</p>
      </motion.div>
      <div className="timeline" style={{ position: 'relative' }}>
        {/* Animated vertical line */}
        <motion.div
          className="timeline-vertical"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
        />
        {/* Animated dots */}
        {dotPositions.map((top, idx) => (
          <motion.div
            className={`timeline-dot dot${idx + 1}`}
            key={idx}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 + idx * 0.15, type: "spring" }}
            viewport={{ once: true }}
            style={{ top }}
          />
        ))}
        <div className="timeline-contain">
          {Timelines.map(({ title, desc, side, icon , text , icons }, idx) => (
            <motion.div
              className={`timeline-item ${side}`}
              key={idx}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.2 + idx * 0.18 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.04, boxShadow: "0 4px 24px rgba(33,136,56,0.13)" }}
            >
              <h2>
                <span style={{ marginRight: 8, verticalAlign: 'middle' }}>{icon}</span>
                {title}
              </h2>
              <p>{desc}</p>
              <br/>
              <p>{text}  <a href='https://www.udemy.com/certificate/UC-79960699-3110-46ac-9c86-899685284c83/' target='_blank'>{icons}</a></p>
             
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline