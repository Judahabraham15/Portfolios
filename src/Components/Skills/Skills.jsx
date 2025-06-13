import React from 'react'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
} from 'react-icons/fa';

import './Skills.css'
import { SiTailwindcss } from 'react-icons/si';
import { SiFramer } from 'react-icons/si';
import { motion, percent } from 'framer-motion';

const skills = [
  { name: 'HTML', level: 'Advanced', icon: <FaHtml5/>, percent: 100 },
  { name: 'CSS', level: 'Intermediate', icon: <FaCss3Alt />, percent: 70 },
  { name: 'Javascript', level: 'Beginner', icon: <FaJs />, percent: 40 },
  { name: 'React.Js', level: 'Beginner', icon: <FaReact />, percent: 40 },
  { name: 'Tailwind.css', level: 'Beginner', icon: <SiTailwindcss/>, percent: 20 },
  {name: 'Framer Motion' , level: 'Beginner' , icon: <SiFramer/>, percent :20}
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const skillVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 12 } }
};

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <motion.div
        className="skills-cont"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
      >
        <h1>Skills</h1>
        <p>Why Choose Judah<span className='dev'>4Good?</span></p>
      </motion.div>
      <div className="skills-wrap">
        <motion.h2
          className="title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Frontend Engineer
        </motion.h2>
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skills.map(({ name, icon, level, percent }, idx) => (
            <motion.div className="skill" key={name} variants={skillVariants} whileHover={{ scale: 1.05 }}>
              <motion.div
                className="skill-icon"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                {icon}
              </motion.div>
              <div className="skill-name">{name}</div>
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percent}%` }}
                  transition={{ duration: 1, delay: 0.2 + idx * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                />
              </div>
              <div className="skill-level">{level}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>

  )
}


export default Skills