import React from "react";
import { motion } from "framer-motion";
const IsUnderonstruction = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center min-h-screen w-full relative p-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // only triggers once
    >
      <div className="relative flex items-center justify-center">
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[200px] font-bold tracking-tight sm:text-[350px] md:text-[400px] lg:text-[410px] text-center select-none pointer-events-none"
          style={{
           color: "black",
            background: "linear-gradient(180deg, #2E8B57 30%, black 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          503
        </motion.span>

        <motion.div
          className="absolute z-20 text-center top-1/2 md:top-3/5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl text-black font-medium font-plus"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              background: "linear-gradient(180deg, black 20%,  #2E8B57 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            In Development!
          </motion.h1>

          <motion.h2
            className="text-[25px] sm:text-[32px] md:text-[35px] font-medium text-black mb-2 font-plus"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Perfecting the portfolio.
          </motion.h2>

          <motion.p
            className="text-gray-700 text-center mb-5 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            I'm currently redesigning my portfolio to better showcase my work
            and skills. Please check back soon for the grand reveal!
          </motion.p>


            <motion.button
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              animate={{ y: 0 }}
              className="bg-gradient-to-br from-black to-[#2E8B57] text-white px-7 py-3 rounded-xl shadow-lg flex items-center gap-2 mx-auto cursor-pointer font-plus"
            >
              {/* <Home size={18} /> */}
              View Features
            </motion.button>
        
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IsUnderonstruction;
