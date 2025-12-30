import React, { useRef } from "react";
import { HiUserGroup } from "react-icons/hi";
import { motion, useInView } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });
  const year = new Date().getFullYear();

  const icons = [
    {
      icon: <IconBrandX />,
      link: "https://twitter.com/AbrahamJud10090",
    },
    {
      icon: <IconBrandGithub />,
      link: "https://github.com/JudahAbraham15",
    },
    {
      icon: <IconBrandLinkedin />,
      link: "https://www.linkedin.com/in/judah-abraham-aaba1b339/",
    },
    {
      icon: <IconMail />,
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="flex flex-col  items-center justify-center border-t border-t-gray-500 min-h-[10vh] px-6 py-4 text-center lg:text-left"
    >
      <span className="font-bold text-[15px] text-gray-900 font-nunito">
        {year} © Judah <span className="text-[#2E8B57]">Abraham</span>, All
        Rights Reserved
      </span>
      <div className="flex items-center justify-center gap-5 mt-3">
        {icons.map(({ icon, link }, idx) => (
          <a
            key={idx}
            href={link}
            className="text-gray-600 transition-colors ease-in duration-100 hover:text-neutral-900 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
