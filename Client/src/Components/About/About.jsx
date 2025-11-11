import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
// import "./About.css";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaJsSquare,
  FaHtml5,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import myself from "../../assets/Judahs.jpg";
import Button from "../Button/Button";
import Judah from "../../assets/JUDAH CV.pdf";
import { FiDownload } from "react-icons/fi";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const experience = [
    {
      text: "5+",
      desc: "Months of Experience",
    },
    {
      text: "7+",
      desc: "Projects Completed",
    },
    {
      text: "5+",
      desc: "Technologies",
    },
  ];
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.95, filter: "blur(5px)" }}
      animate={
        isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}
      }
      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex items-center justify-start relative overflow-hidden w-full min-h-screen text-black font-nunito bg-[#F0FFF0] py-24 max-[576px]:flex-col max-[576px]:items-center max-[576px]:text-center max-[576px]:min-h-auto max-[576px]:gap-5 max-[576px]:bg-gradient-to-b max-[576px]:from-[#f0fff0] max-[576px]:to-[#e6f7e6] min-[577px]:max-[936px]:flex-col min-[577px]:max-[936px]:items-center min-[577px]:max-[936px]:text-center min-[577px]:max-[936px]:min-h-auto min-[577px]:max-[936px]:gap-5 min-[577px]:max-[936px]:bg-gradient-to-b min-[577px]:max-[936px]:from-[#f0fff0] min-[577px]:max-[936px]:to-[#e6f7e6]"
      id="about"
    >
      <motion.span
        className="about-float-icon react"
        initial={{ y: -30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 0.9 } : {}}
        transition={{ duration: 1, delay: 0.2, type: "spring" }}
        style={{ position: "absolute", left: "6%", top: "10%" }}
      >
        <FaReact size={32} color="#61dafb" />
      </motion.span>
      <motion.span
        className="about-float-icon html"
        initial={{ y: -30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 0.9 } : {}}
        transition={{ duration: 1, delay: 0.2, type: "spring" }}
        style={{ position: "absolute", left: "55%", top: "50%" }}
      >
        <FaHtml5 size={28} color="red" />
      </motion.span>
      <motion.span
        className="about-float-icon node"
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 0.9 } : {}}
        transition={{ duration: 1, delay: 0.4, type: "spring" }}
        style={{ position: "absolute", right: "8%", top: "22%" }}
      >
        <FaNodeJs size={28} color="#3c873a" />
      </motion.span>
      <motion.span
        className="about-float-icon tailwind"
        initial={{ x: -30, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 0.9 } : {}}
        transition={{ duration: 1, delay: 0.6, type: "spring" }}
        style={{ position: "absolute", left: "10%", bottom: "10%" }}
      >
        <SiTailwindcss size={30} color="#61dafb" />
      </motion.span>
      <motion.span
        className="about-float-icon css"
        initial={{ x: 30, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 0.9 } : {}}
        transition={{ duration: 1, delay: 0.8, type: "spring" }}
        style={{ position: "absolute", right: "10%", bottom: "20%" }}
      >
        <FaCss3Alt size={26} color="#264de4" />
      </motion.span>
      <motion.span
        className="about-float-icon js"
        initial={{ y: -30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 0.9 } : {}}
        transition={{ duration: 1, delay: 1, type: "spring" }}
        style={{ position: "absolute", left: "50%", top: "8%" }}
      >
        <FaJsSquare size={26} color="#f7df1e" />
      </motion.span>

      <div className="flex justify-center w-full h-full pl-[50px] mx-12 flex-col items-start max-[576px]:p-0 max-[576px]:m-0 max-[576px]:items-center min-[577px]:max-[936px]:p-0 min-[577px]:max-[936px]:m-0 min-[577px]:max-[936px]:items-center">
        <h1 className="text-black text-[35px] mt-0 mb-5 max-[576px]:text-[28px] max-[576px]:mb-4 min-[577px]:max-[936px]:text-[32px] min-[577px]:max-[936px]:mb-4">
          Who is Judah <span className="dev">Abraham?</span>{" "}
        </h1>
        <p className="w-full max-w-[650px] leading-[1.6rem] max-[576px]:text-[14px] max-[576px]:leading-[1.5rem] max-[576px]:max-w-[85%] max-[576px]:text-left min-[577px]:max-[936px]:text-[15px] min-[577px]:max-[936px]:leading-[1.5rem] min-[577px]:max-[936px]:max-w-[85%] min-[577px]:max-[936px]:text-left">
          I'm Judah Abraham, Known as "Judah4Good". A passionate 16-year-old
          self-taught aspiring FullStack Developer with over 5+ months
          experience and a strong drive to solve real world problems and
          contribute greatly in the development of both apps and web
          develpoment. I am a DIY guy.
          <br />
          <br />
          At 16 , I have created some projects from a todo-list app to a
          frontend blinkist website and I am just getting warmed up! I love
          solving real world problems , adapting easily , handling pressure and
          I love building modern and functional user interfaces.
          <br />
          <br />
        </p>
        <div className="flex flex-nowrap flex-row items-start justify-between w-[30%] ml-0 gap-[22px] font-nunito mt-5 max-[576px]:flex-row max-[576px]:flex-nowrap max-[576px]:justify-center max-[576px]:gap-[10px] min-[577px]:max-[936px]:flex-row min-[577px]:max-[936px]:flex-nowrap min-[577px]:max-[936px]:justify-center min-[577px]:max-[936px]:gap-[10px]">
          {experience.map(({ text, desc }, idx) => (
            <div className="flex flex-col items-start justify-start w-full p-[10px] box-border gap-2 text-[#2E8B57] max-[576px]:min-w-[100px] min-[577px]:max-[936px]:min-w-[100px]" key={idx}>
              <span className="text-[1.8rem] font-bold max-[576px]:text-[1.5rem]"> {text}</span>
              <p className="min-w-full w-full text-black text-[13px] leading-[1.2rem] max-[576px]:text-[12px] max-[576px]:leading-[1.3rem] min-[577px]:max-[936px]:text-[12px] min-[577px]:max-[936px]:leading-[1.3rem]">{desc}</p>
            </div>
          ))}
        </div>

        <div className="max-[576px]:w-full max-[576px]:flex max-[576px]:justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
          >
            <a href={Judah} download className="no-underline">
              <Button
                title={"Download CV"}
                className={"btn-about"}
                icon={<FiDownload size={20} color="white" />}
              />
            </a>
          </motion.div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-6 max-[576px]:order-[-1] max-[576px]:w-full max-[576px]:flex max-[576px]:justify-center max-[576px]:mb-4 max-[576px]:relative min-[577px]:max-[936px]:order-[-1] min-[577px]:max-[936px]:w-full min-[577px]:max-[936px]:flex min-[577px]:max-[936px]:justify-center min-[577px]:max-[936px]:mb-4 min-[577px]:max-[936px]:relative">
        <motion.img
          src={myself}
          className="max-w-[290px] w-full h-auto rounded-[20px] object-cover max-[576px]:w-[180px] max-[576px]:h-[180px] max-[576px]:rounded-full max-[576px]:object-cover max-[576px]:border-4 max-[576px]:border-[#2e8b57] max-[576px]:shadow-[0_10px_30px_rgba(0,0,0,0.15)] min-[577px]:max-[936px]:w-[200px] min-[577px]:max-[936px]:h-[200px] min-[577px]:max-[936px]:rounded-[60%] min-[577px]:max-[936px]:object-cover min-[577px]:max-[936px]:border-4 min-[577px]:max-[936px]:border-[#2e8b57] min-[577px]:max-[936px]:shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1, type: "spring" }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        />
      </div>
    </motion.div>
  );
};

export default About;