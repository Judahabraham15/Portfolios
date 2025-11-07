import React from "react";
import { motion, number } from "framer-motion";

const DescriptiveText = () => {
  const items = [
    {
      number: "1+",
      text: "Years Of Experience",
    },
    {
        number: "3+", 
        text: "Projects Delivered"
    }, 
    {
        number : "100%",
        text: "Clients Satisfaction"
    }
  ];
  return (
    <section className="relative flex items-center min-h-[50vh] justify-center p-4 px-2 sm:p-6 mx-5 overflow-hidden rounded-2xl mt-[5rem]">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#a4fca4] to-white -z-10"></div> */}

      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-[#2E8B57]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-[#2E8B57]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative max-w-4xl text-center z-10">
        {/* Small badge/tag */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#2E8B57]/10 rounded-full text-[#2E8B57] text-sm font-semibold font-outfit">
            <span className="w-2 h-2 bg-[#2E8B57] rounded-full animate-pulse"></span>
            Experience & Expertise
          </span>
        </motion.div> */}

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-inter  text-neutral-800 text-center text-[32px] sm:text-[38px] md:text-[40px] font-bold leading-tight tracking-[-2px] mb-6"
        >
          With{" "}
          <span className="relative inline-block font-inter tracking-[-2px]">
            <span className="text-[#2E8B57]">1+ years</span>
          </span>{" "}
          of hands-on experience, I've helped startups and teams build modern,
          accessible web experiences with cutting-edge frontend technologies.
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto font-outfit leading-relaxed mt-2"
        >
          From concept to deployment, I craft scalable solutions that not only
          meet business goals but also delight users.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-10"
        >
          {items.map(({ text, number }, idx) => (
            <div className="text-center" key={idx}>
              <div className="text-3xl sm:text-4xl font-bold text-[#2E8B57] font-outfit">
                {number}
              </div>
              <div className="text-sm text-neutral-600 font-outfit mt-1">{text}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DescriptiveText;
