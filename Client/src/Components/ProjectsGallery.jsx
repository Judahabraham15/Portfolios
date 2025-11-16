"use client";

import { InfiniteMovingCards } from "./UI/MovingCards";
import Sam from  '../assets/Sam.png'
const ProjectsGallery = () => {
  return (
     <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
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
    src: Sam,
    alt: "Project 1",
  },
  {
    src: Sam,
    alt: "Project 2",
  },
  {
    src: Sam,
    alt: "Project 3",
  },
  {
    src: Sam,
    alt: "Project 4",
  },

];
