import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const DescriptiveText = () => {
  const items = [
    { number: "1+", text: "Years Of Experience" },
    { number: "3+", text: "Projects Delivered" },
    { number: "100%", text: "Clients Satisfaction" },
  ];

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center min-h-[50vh] justify-center p-4 px-2 sm:p-6 mx-5 overflow-hidden  mt-[5rem]"
    >
      {/* Floating background blobs */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-[#2E8B57]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-[#2E8B57]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Content */}
      <div className="relative max-w-4xl text-center z-10">
        {/* Heading */}
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          custom={1}
          className="font-inter text-neutral-800 text-center text-[32px] sm:text-[38px] md:text-[40px] font-bold leading-tight tracking-[-2px] mb-6 block"
        >
          With{" "}
          <motion.span
            className="relative inline-block font-inter tracking-[-2px] text-[#2E8B57]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          >
            1+ years
          </motion.span>{" "}
          of hands-on experience, I've helped startups and teams build modern,
          accessible web experiences with cutting-edge frontend technologies.
        </motion.span>

        {/* Paragraph */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          custom={2}
          className="text-center text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto font-outfit leading-relaxed mt-2"
        >
          From concept to deployment, I craft scalable solutions that not only
          meet business goals but also delight users.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          custom={3}
          className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-10"
        >
          {items.map(({ text, number }, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              animate={controls}
              custom={idx + 4}
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div className="text-3xl sm:text-4xl font-bold text-[#2E8B57] font-outfit">
                {number}
              </motion.div>
              <div className="text-sm text-neutral-600 font-outfit mt-1">
                {text}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DescriptiveText;
