import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section className="flex items-center justify-center relative overflow-hidden w-full min-h-screen py-36 px-2">


      <div className="w-full max-w-[650px] px-6 sm:px-0">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-black font-outfit text-3xl sm:text-3xl font-semibold mb-5.5"
        >
          About
        </motion.h1>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed sm:leading-loose">
          I love crafting solid and scalable products with exceptional user
          experiences, focusing on innovation and problem-solving across various
          industries.
        </p>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed sm:leading- mt-6">
          I'm Judah Abraham, a 17-year-old Nigerian self-taught software
          developer, with 1+ year experience in web development. I specialize in
          building modern, functional user interfaces and robust applications
          that solve real-world problems. I'm also looking to expand into app
          development soon.
        </p>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed sm:leading-relaxed mt-6">
          Known as "Judah4Good", I'm passionate about continuous learning and
          pushing my limits. From website clones to fully functional,
          production-ready web applications—I'm just getting warmed up, driven
          by a love for clean code, great design, and making an impact through
          technology.
        </p>

        <div className="group relative w-full h-[350px] sm:h-[400px] flex items-center justify-center mt-10 cursor-pointer">
          <div className="  absolute -translate-x-12 sm:-translate-x-16 -rotate-12 bg-white p-2 sm:p-3 rounded-lg shadow-xl transition-all duration-800 ease-out cursor-pointer z-10 group-hover:-translate-x-20 sm:group-hover:-translate-x-30 group-hover:-rotate-6  ">
            <div className="w-[180px] sm:w-[200px] h-[180px] sm:h-[200px] bg-gray-200 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dydmptpcg/image/upload/v1761944916/image_5_furztz.jpg"
                alt="Judah Abraham"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-center text-gray-800 text-sm sm:text-sm mt-2 font-bold font-nunito">
              @jeflux
            </p>
          </div>

          <div className="absolute translate-x-12 sm:translate-x-16 rotate-12 bg-white p-2 sm:p-3 rounded-lg shadow-xl transition-all duration-800 ease-in-out cursor-pointer group-hover:translate-x-20 sm:group-hover:translate-x-30 group-hover:rotate-6 ">
            <div className="w-[180px] sm:w-[200px] h-[180px] sm:h-[200px] bg-gray-200 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dydmptpcg/image/upload/v1761944916/image_5_furztz.jpg"
                alt="Judah Abraham"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-center text-gray-800 text-xs sm:text-sm mt-2 font-medium">
              @judah4good
            </p>
          </div>
        </div>

        {/* <div className="mt-8">
          <a href={Judah} download className="no-underline">
            <button
              title={"Download CV"}
              className={"btn-about"}
              icon={<FiDownload size={20} color="white" />}
            />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default About;
