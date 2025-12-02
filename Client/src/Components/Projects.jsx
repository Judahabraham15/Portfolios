import React from "react";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJsSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";

const Projects = () => {
  const Projects = [
    {
      img: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763627842/Blink_zspbte.png",
      title: "Blinkist-Landing Page",
      desc: "A Blinkist-Landing Page with more features and a modern Login Page",
      icons: [
        <FaCss3Alt color="#1a1a1a" key="css3" />,
        <FaReact color="#1a1a1a" key="react" />,
        <FaJs color="#1a1a1a" key="js" />,
      ],
      link: "https://blinkist-landing-page-seven.vercel.app/",
    },
    {
      title: "Ikechukwu Portfolio",
      img: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763627962/port_ckjluh.png",
      desc: "A website that displays the skills of a pharmacist who transitioned to tech",
      icons: [
        <FaReact color="#1a1a1a" />,
        <FaCss3Alt color="#1a1a1a" />,
        <FaJsSquare color="#1a1a1a" />,
      ],
      link: "https://ikechwukwu-portfolio.vercel.app/",
    },
    {
      img: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763632234/Screenshot_2025-11-20_104944_uxotyh.png",
      title: "MedicX",
      desc: "A Samsung Landing Page that showcases the quality of Samsung Products",
      icons: [
        <FaCss3Alt color="#1a1a1a" key="css3" />,
        <FaReact color="#1a1a1a" key="react" />,
        <FaJs color="#1a1a1a" key="js" />,
      ],
      link: "https://samsung-nu.vercel.app/",
    },
    {
      img: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763633342/Screenshot_2025-11-20_105948_vnxvlg.png",
      title: "JShare",
      desc: "A Weather App that tells the current weather of a city.",
      icons: [
        <FaJs color="#1a1a1a" key="js" />,
        <FaHtml5 color="#1a1a1a" key="html5" />,
        <FaCss3Alt color="#1a1a1a" key="css3-2" />,
      ],
      link: "https://weather-app-oapd.vercel.app/",
    },
    {
      img: "",
      title: "To-do-List",
      desc: "An App to store Tasks to be done.",
      icons: [
        <FaHtml5 color="#1a1a1a" key="html5" />,
        <FaCss3Alt color="#1a1a1a" key="css3" />,
        <FaJs color="#1a1a1a" key="js" />,
      ],
      link: "https://to-do-lists-f4xt.vercel.app/",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 14 },
    },
  };

  return (
    <div className="bg-[#F0FFF0] mt-10 pb-10 mb-10" id="projects">
      <motion.div
        className="flex flex-col justify-start items-center  mb-12 pt-8 px-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800  font-outfit tracking-tight">
          {" "}
          Here's What I've Been Innovating
        </h1>
        {/* <p className='text-base md:text-lg text-gray-600 text-center'>
            Check out some of Judah<span className="text-[#2E8B57] font-semibold">4Good</span> projects.
          </p> */}
      </motion.div>

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 w-full max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {Projects.map(({ title, img, icons, desc, link }, index) => (
            <motion.div
              className="bg-[#e6f4ea] text-black rounded-2xl shadow-md min-h-[320px]  max-w-[360px] mx-auto  flex flex-col items-start justify-start p-5 sm:p-6"
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 4px 24px rgba(33,136,56,0.13)",
              }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div className="w-full flex flex-col items-center mb-2">
                <motion.img
                  src={img}
                  className="w-full max-w-[260px] h-auto rounded-lg mb-3 object-cover"
                  alt={title}
                  whileHover={{ rotate: 2.5, scale: 1.09 }}
                />
              </div>

              <div className="flex flex-col w-full items-start mt-0 font-['Nunito']">
                <h1 className="text-[#2E8B57] font-bold text-xl sm:text-[22px] mb-2">
                  {title}
                </h1>
                <p className="text-sm sm:text-[0.9rem] text-gray-700 mb-4">
                  {desc}
                </p>

                <div className="flex justify-start items-center gap-2 mb-auto">
                  {icons.map((icon, i) => (
                    <span key={i} className="text-2xl">
                      {icon}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col items-end w-full mt-auto pt-3">
                  {link && (
                    <>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-[8%] mb-1"
                      >
                        <button className="group px-2.5 py-2 md:px-3 md:py-2.5 cursor-pointer bg-[#E0E0E0] text-[#354B21] font-outfit font-medium rounded-md  transition-all duration-300">
                          <span className="text-sm md:text-md ">
                            View Project{" "}
                          </span>
                            <MdKeyboardArrowRight
                              className="inline-block  group-hover:pl-2  transition-all duration-300 w-8"
                              size={20}
                              style={{ verticalAlign: "middle" }}
                            />
                        </button>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
