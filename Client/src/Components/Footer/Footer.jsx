import React, { useRef } from "react";
import { HiUserGroup } from "react-icons/hi";
import { motion, useInView } from "framer-motion";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });
  const year = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      className="flex flex-col lg:flex-row items-center justify-between border-t border-t-black min-h-[10vh] px-5 py-4 text-center lg:text-left"
    >
      <span className="font-bold text-[15px]">
        {year} © Judah <span className="text-[#2E8B57]">Abraham</span>, All Rights Reserved
      </span>

      <p className="mt-2 lg:mt-0 flex items-center gap-2 text-[15px] font-bold">
        <HiUserGroup size={18} color="black" />
        Ready for Challenges and Collaborations.
      </p>
    </footer>
  );
};

export default Footer;

