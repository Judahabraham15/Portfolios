import React, { useEffect, useState, useRef } from 'react'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
} from 'react-icons/fa';

import './Skills.css'
import { SiTailwindcss } from 'react-icons/si';
import { SiFramer } from 'react-icons/si';
import { motion , useInView} from 'framer-motion';

const skills = [
  { name: 'HTML', level: 'Advanced', icon: <FaHtml5/>, percent: 100 },
  { name: 'CSS', level: 'Intermediate', icon: <FaCss3Alt />, percent: 70 },
  { name: 'Javascript', level: 'Beginner', icon: <FaJs />, percent: 40 },
  { name: 'React.Js', level: 'Beginner', icon: <FaReact />, percent: 50 },
  { name: 'Tailwind.css', level: 'Intermediate', icon: <SiTailwindcss/>, percent: 60 },
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

function useCountUp(isInView, target, duration = 1.2) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }
    let start = 0;
    const end = parseInt(target);
    if (isNaN(end)) return;
    const increment = end / (duration * 60); // 60fps
    let frame = 0;

    function update() {
      frame++;
      const next = Math.min(Math.round(start + increment * frame), end);
      setCount(next);
      if (next < end) {
        requestAnimationFrame(update);
      }
    }
    update();
  }, [isInView, target, duration]);

  return count;
}
const Skills = () => {
   const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, margin: '-80px' });
  const count = useCountUp(isInView, 7);
  return (
    <div className="skills-wrapper" id='skills'>
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
          <motion.div
        className="ski"
         ref={countRef}
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", delay: 0.5 }}
        viewport={{ once: true }}
      >
        <span className='devss'>{count}+</span>
        <p>Completed Projects</p>
      </motion.div>
    </div>

  )
}


export default Skills