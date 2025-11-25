"use client";

import { InfiniteMovingCards } from "./UI/MovingCards";


const projects = [
  {
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763627962/port_ckjluh.png",
    alt: "Project 1",
    href: "https://ikechwukwu-portfolio.vercel.app/",
  },
  {
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763627842/Blink_zspbte.png",
    alt: "Project 2",
    href: "https://blinkist-landing-page-seven.vercel.app/",
  },
  {
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763633342/Screenshot_2025-11-20_105948_vnxvlg.png",
    alt: "Project 3",
    href: "https://j-upload.vercel.app",
  },
  {
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763632234/Screenshot_2025-11-20_104944_uxotyh.png",
    alt: "Project 4",
    href: "https://medicx.app",
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
