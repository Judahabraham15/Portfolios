"use client";

import { InfiniteMovingCards } from "./UI/MovingCards";
import Sam from  '../assets/Sam.png'
const ProjectsGallery = () => {
  return (
     <div className="h-[20rem] mb-[10rem] flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={projects}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default ProjectsGallery;

const projects = [
  {
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763627962/port_ckjluh.png",
    alt: "Project 1",
  },
  {
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763627842/Blink_zspbte.png",
    alt: "Project 2",
  },
  {
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763633342/Screenshot_2025-11-20_105948_vnxvlg.png",
    alt: "Project 3",
  },
  {
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763632234/Screenshot_2025-11-20_104944_uxotyh.png",
    alt: "Project 4",
  },

];
