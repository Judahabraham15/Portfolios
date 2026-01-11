"use client";

import { useParams } from "react-router-dom";
import { InfiniteMovingCards } from "./UI/MovingCards";

const projects = [
  {
    slug: "ikechukwu",
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763627962/port_ckjluh.png",
    alt: "DEVCHUKS",
    link: "/projects2/ikechukwu",
  },
  {
    slug: "blinkist",
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763627842/Blink_zspbte.png",
    alt: "BLINKIST",
    href: "https://blinkist-landing-page-seven.vercel.app/",
    link: "/projects2/blinkist",
  },
  {
    slug: "jshare",
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763633342/Screenshot_2025-11-20_105948_vnxvlg.png",
    alt: "JSHARE",
    link: "/projects2/jshare",
  },
  {
    slug: "medicx",
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763632234/Screenshot_2025-11-20_104944_uxotyh.png",
    alt: "MEDICX",
    link: "/projects2/medicx",
  },
];

const ProjectsGallery = () => {
  return (
    <div className="h-[20rem] mb-[10rem] flex flex-col antialiased items-center justify-center relative overflow-hidden cursor-pointer">
      <InfiniteMovingCards items={projects} direction="right" speed="slow" />
    </div>
  );
};

export default ProjectsGallery;
