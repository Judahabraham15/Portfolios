import React, { useRef } from 'react';
import './Footer.css';
import { HiUserGroup } from "react-icons/hi";
import { motion, useInView } from 'framer-motion';

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      className='footer'
      ref={footerRef}
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <span className='fot'>
        2025 © Judah <span className='dev'>Abraham</span>, All rights Reserved.
      </span>

      <motion.div
        className="footer-text"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className='p'>
          <motion.span
            whileHover={{ rotate: 10, scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 200 }}
            style={{ display: 'inline-block', marginRight: '5px', verticalAlign: 'middle' }}
          >
            <HiUserGroup color='black' size={18} />
          </motion.span>
          Ready for Challenges and Collaborations
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
