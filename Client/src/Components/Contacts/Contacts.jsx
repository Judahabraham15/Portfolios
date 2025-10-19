import React, { useState, useRef } from 'react'
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
      para: <a href='mailto:judahabrahamforgood@gmail.com' target='_blank' rel="noopener noreferrer" className="no-underline text-black mt-0.5">Contact Me</a>,
      icons: <a href='mailto:judahabrahamforgood@gmail.com' target='_blank' rel="noopener noreferrer"> <FaHandPointRight size={18} color='black' className="align-middle ml-1.5" /></a>
    },
    {
      icon: <FaWhatsapp size={30} color="#25D366" />,
      title: 'Whatsapp',
      info: '+234 9076078226',
      para: <a href='https://wa.me/2349076078226' target='_blank' rel="noopener noreferrer" className="no-underline text-black mt-0.5">Contact Me</a>,
      icons: <a href='https://wa.me/2349076078226' target='_blank' rel="noopener noreferrer"><FaHandPointRight size={18} color='black' className="align-middle ml-1.5" /> </a>
    },
    {
      icon: <FaLinkedin color='#0A66C2' size={30} />,
      title: 'Linkedin',
      info: 'Abraham Judah',
      para: <a href='https://www.linkedin.com/in/judah-abraham-aaba1b339/' target='_blank' rel="noopener noreferrer" className="no-underline text-black mt-0.5">Contact Me</a>,
      icons: <a href='https://www.linkedin.com/in/judah-abraham-aaba1b339/' target='_blank' rel="noopener noreferrer"><FaHandPointRight size={18} color='black' className="align-middle ml-1.5" /></a>
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
      className="p-8 mb-10 font-['Nunito'] overflow-visible"
      id='contact'
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="flex justify-start items-center flex-col"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center">Contacts</h1>
        <p className="text-sm sm:text-base text-center mt-2">
          Whether you have a project in mind or just want to say hi, I'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-4 md:gap-8 max-w-4xl w-full mx-auto items-start">
        <motion.div
          className="flex flex-col gap-2.5 mt-8 md:mt-15 items-center md:items-start"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {contacts.map(({ icon, title, info, para, icons }, index) => (
            <motion.div
              className="rounded-xl bg-[#e6f4ea] p-5 my-2 shadow-[0_2px_16px_rgba(33,136,56,0.08)] w-4/5 sm:w-4/5 md:w-[70%] min-h-[120px] md:min-h-[100px] flex flex-col justify-center items-center"
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.04, boxShadow: "0 4px 24px rgba(33,136,56,0.13)" }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <motion.div
                className="mb-2"
                variants={iconVariants}
                whileHover="hover"
              >
                {icon}
              </motion.div>
              <motion.span
                className="text-sm text-center"
                variants={cardVariants}
              >
                {title}
              </motion.span>
              <motion.span
                className="mb-2 text-sm text-center"
                variants={cardVariants}
              >
                {info}
              </motion.span>
              <motion.span
                className="text-sm flex items-center"
                variants={cardVariants}
              >
                {para}
                <motion.span
                  variants={iconVariants}
                  whileHover="hover"
                  className="inline-flex"
                >
                  {icons}
                </motion.span>
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="p-0 md:px-4 md:py-5 min-w-[220px] w-full h-fit mt-0 md:mt-5"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <h2 className="mb-4 md:mb-5 text-lg sm:text-xl text-center md:text-left">
            Lets Discuss Your Project
          </h2>
          <form className="w-full relative" onSubmit={sendEmail} ref={form}>
            <div className="relative mb-5 md:mb-8">
              <input
                type='text'
                id='name'
                name="name"
                ref={nameRef}
                className="p-3.5 md:p-[23px] max-w-[90%] md:max-w-[280px] w-full rounded-lg mt-2.5 bg-[#e6f4ea] border-none h-6 text-base md:text-[17px] font-['Nunito']"
                placeholder='Your Full Name'
                required
              />
              {errors.name && (
                <span className="text-red-600 text-xs font-bold absolute -top-2.5 right-8">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="relative mb-5 md:mb-8">
              <input
                type='email'
                id='email'
                name='email'
                ref={emailRef}
                className="p-3.5 md:p-[23px] max-w-[90%] md:max-w-[280px] w-full rounded-lg mt-2.5 bg-[#e6f4ea] border-none h-6 text-base md:text-[17px] font-['Nunito']"
                placeholder='Your Email Address'
                required
              />
              {errors.email && (
                <span className="text-red-600 text-xs font-bold absolute -top-2.5 right-8">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="relative mb-5 md:mb-8">
              <textarea
                type='text'
                id='textarea'
                name='message'
                ref={textareaRef}
                className="p-3.5 md:p-[18px] max-w-[90%] md:max-w-[280px] w-full rounded-lg mt-2.5 bg-[#e6f4ea] border-none h-32 md:h-40 resize-none text-base md:text-[17px] font-['Nunito']"
                placeholder='Hey Judah, are you up for this role?'
                required
              />
              {errors.textarea && (
                <span className="text-red-600 text-xs font-bold absolute -top-2.5 right-8">
                  {errors.textarea}
                </span>
              )}
            </div>

            <motion.button
              className="text-base md:text-lg cursor-pointer transition-all duration-300 ease-in-out inline-flex items-center border-none bg-transparent font-['Nunito'] justify-center md:justify-start mt-2.5"
              variants={textBtnVariants}
              initial="hidden"
              animate="show"
              whileHover="hover"
              type='submit'
              onClick={handleSubmit}
            >
              Send Message
              <motion.span
                variants={iconVariants}
                whileHover="hover"
                className="inline-flex ml-1.5 align-middle"
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
            className="flex justify-end items-center mr-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <div className="h-12 w-full max-w-[200px] bg-[#e6f4ea] text-black flex justify-center items-center p-1.5 shadow-[0_2px_16px_rgba(33,136,56,0.8)] rounded-lg">
              <HiBadgeCheck size={18} color="black" className="align-middle mr-1.5" />
              <p>Message Sent 💚!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Contact