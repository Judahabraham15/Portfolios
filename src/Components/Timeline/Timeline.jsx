import React from 'react'
import './Timeline.css'
import { FaCode, FaProjectDiagram, FaReact, FaUserFriends } from 'react-icons/fa'
import {motion } from 'framer-motion'

const Timeline = () => {
  const Timelines = [
    {
      title: "Started Coding",
      desc: "Began my coding journey in 2022, learning HTML, CSS.",
      side: "left",
      icon: <FaCode color="#218838" />
    },
    {
      title: "First Project",
      desc: "Built my first to-do app and a frontend Blinkist clone in 2024.",
      side: "right",
      icon: <FaProjectDiagram color="#218838" />
    },
    {
      title: "React & Tailwind",
      desc: "Dove into React.js and Tailwind CSS for modern UI development.",
      side: "left",
      icon: <FaReact color="#218838" />
    },
    {
      title: "Freelancing",
      desc: "Yet to take collaborative Jobs.",
      side: "right",
      icon: <FaUserFriends color="#218838" />
    }
  ]
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 14 } }
  }

  return (
    <div className='container' id='qualifications'>
      <motion.div
        className="time-line"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
      >
        <h1>Qualifications</h1>
        <p>Judah<span className='dev'>4Good's</span> Journey</p>
      </motion.div>
      <div className="timeline">
        <motion.div
          className="timeline-contain"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {Timelines.map(({ title, desc, side, icon }, idx) => (
            <motion.div
              className={`timeline-item ${side}`}
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.04, boxShadow: "0 4px 24px rgba(33,136,56,0.13)" }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <h2>
                <span style={{ marginRight: 8, verticalAlign: 'middle' }}>{icon}</span>
                {title}
              </h2>
              <p>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Timeline