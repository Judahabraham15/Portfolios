import React, { useState, useRef } from 'react'
import './Contacts.css'
import { SiGmail } from "react-icons/si"
import { FaHandPointRight, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { HiBadgeCheck } from 'react-icons/hi'
import { FiSend } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from '@emailjs/browser';
import { UserSchema } from '../../Validations/Validation';

const Contact = () => {
  const contacts = [
    {
      icon: <SiGmail size={30} color="#D44638" />,
      title: 'Gmail',
      info: 'judahabrahamforgood@gmail.com',
      para: <a href='mailto:judahabrahamforgood@gmail.com' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black', marginTop: '3px' }}>Contact Me</a>,
      icons: <a href='mailto:judahabrahamforgood@gmail.com' target='_blank' rel="noopener noreferrer"> <FaHandPointRight size={18} color='black' style={{ verticalAlign: 'middle', marginLeft: '5px' }} /></a>
    },
    {
      icon: <FaWhatsapp size={30} color="#25D366" />,
      title: 'Whatsapp',
      info: '+234 9076078226',
      para: <a href='https://wa.me/2349076078226' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black', marginTop: '3px' }}>Contact Me</a>,
      icons: <a href='https://wa.me/2349076078226' target='_blank' rel="noopener noreferrer"><FaHandPointRight size={18} color='black' style={{ verticalAlign: 'middle', marginLeft: '5px' }} /> </a>
    },
    {
      icon: <FaLinkedin color='#0A66C2' size={30} />,
      title: 'Linkedin',
      info: 'Abraham Judah',
      para: <a href='https://www.linkedin.com/in/judah-abraham-aaba1b339/' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black', marginTop: '3px' }}>Contact Me</a>,
      icons: <a href='https://www.linkedin.com/in/judah-abraham-aaba1b339/' target='_blank' rel="noopener noreferrer"><FaHandPointRight size={18} color='black' style={{ verticalAlign: 'middle', marginLeft: '5px' }} /></a>
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 14 } }
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -30 },
    show: { scale: 1, opacity: 1, rotate: 0, transition: { type: "spring", stiffness: 200, damping: 10 } },
    hover: { scale: 1.2, rotate: 10, transition: { type: "spring", stiffness: 300 } }
  };

  const textBtnVariants = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, delay: 0.5 } },
    hover: { scale: 1.07 }
  };

  const [errors, setErrors] = useState({})
  const [showpopup, setShowpopup] = useState(false)
  const nameRef = useRef()
  const emailRef = useRef()
  const textareaRef = useRef()
  const form = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    const name = nameRef.current;
    const email = emailRef.current;
    const textarea = textareaRef.current;

    const newErrors = {};

    if (name.value === '') {
      newErrors.name = 'Name is required';
      name.style.border = '2px solid red';
    } else {
      name.style.border = '2px solid green';
    }

    if (email.value === '') {
      newErrors.email = 'Email is required';
      email.style.border = '2px solid red';
    } else {
      email.style.border = '2px solid green';
    }

    if (textarea.value === '') {
      newErrors.textarea = 'Message is required';
      textarea.style.border = '2px solid red';
    } else {
      textarea.style.border = '2px solid green';
    }

    const formData = {
      name: name.value,
      email: email.value,
    };

    await UserSchema.validate(formData, { abortEarly: false })
      .then(() => {
        if (Object.keys(newErrors).length === 0) {
          sendEmail(e);
        }
      })
      .catch((err) => {
        err.inner.forEach((e) => {
          newErrors[e.path] = e.message;
          if (e.path === 'email') {
            email.style.border = '2px solid red';
          }
          if (e.path === 'name') {
            name.style.border = '2px solid red';
          }
        });
      });

    setErrors(newErrors);
  }

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_nkorx5h', 'template_z7mj92k', form.current, {
      publicKey: 'iN8U8APlcPQw3-zBy',
    })
      .then(() => {
        setShowpopup(true);
        form.current.reset();
        setTimeout(() => {
          setShowpopup(false);
        }, 3000);
      })
      .catch((error) => {
        console.log('FAILED...', error.text);
      });
  };
  
    const sectionVariants = {
    hidden: { opacity: 0, filter: 'blur(8px)', y: 40 },
    show: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 60, staggerChildren: 0.18 }
    }
  };


  return (
     <motion.div
      className='contacts'
      id='contact'
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      style={{ overflow: "visible" }} // Prevents extra scroll/space
    >
      <motion.div
        className="contacts-text"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <h1>Contacts</h1>
        <p>Whether you have a project in mind or just want to say hi ,I'd love to hear from you.</p>
      </motion.div>
      <div className="contacts-grid">
        <motion.div
          className="cards-list"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {contacts.map(({ icon, title, info, para, icons }, index) => (
            <motion.div
              className="cards"
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.04, boxShadow: "0 4px 24px rgba(33,136,56,0.13)" }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <motion.div
                className="iconic"
                variants={iconVariants}
                whileHover="hover"
              >
                {icon}
              </motion.div>
              <motion.span
                className='tit'
                variants={cardVariants}
              >
                {title}
              </motion.span>
              <motion.span
                className='gmail'
                variants={cardVariants}
              >
                {info}
              </motion.span>
              <motion.span
                className='para-icons'
                variants={cardVariants}
                style={{ display: "flex", alignItems: "center" }}
              >
                {para}
                <motion.span
                  variants={iconVariants}
                  whileHover="hover"
                  style={{ display: "inline-flex" }}
                >
                  {icons}
                </motion.span>
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="input-section"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <h2>Lets Discuss Your Project</h2>
          <form className='contact-form' onSubmit={sendEmail} ref={form}>
            <div className="contact-forms">
              <input type='text' id='name' name="name" ref={nameRef} className='inputs' placeholder='Your Full Name' required />
              {errors.name && <span className="error-mess">{errors.name}</span>}
            </div>
            <div className="contact-forms">
              <input type='email' id='email' name='email' ref={emailRef} className='inputs' placeholder='Your Email Address' required />
              {errors.email && <span className="error-mess">{errors.email}</span>}
            </div>
            <div className="contact-forms">
              <textarea type='text' id='textarea' name='message' ref={textareaRef} className='text-area' placeholder='Hey Judah, are you up for this role?' required />
              {errors.textarea && <span className="error-mess">{errors.textarea}</span>}
            </div>
            <motion.button
              className='text-btn'
              variants={textBtnVariants}
              initial="hidden"
              animate="show"
              whileHover="hover"
              style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", border: "none", background: "none" , fontFamily :'inherit'}}
              type='submit'
              onClick={handleSubmit}
            >
              Send Message
              <motion.span
                variants={iconVariants}
                whileHover="hover"
                style={{ display: "inline-flex", marginLeft: 5, verticalAlign: "middle" }}
              >
                <FiSend color='black' size={20} />
              </motion.span>
            </motion.button>
          </form>
        </motion.div>
      </div>
      <AnimatePresence>
        {showpopup && (
          <motion.div
            className="popup"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <div className="pop-card">
              <HiBadgeCheck size={18} color="black" style={{ verticalAlign: "middle", marginRight: '5px' }} />
              <p>Message Sent 💚!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
export default Contact