"use client";

import { useParams } from "react-router-dom";
import { InfiniteMovingCards } from "./UI/MovingCards";

const projects = [
  {
    slug: "pantheon",
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1768955091/Screenshot_2026-01-21_011811_ftbytq.png",
    alt: "PANTHEON",
    link: "/projects2/pantheon",
  },
  {
    slug: "shift",
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1785102092/Screenshot_2026-07-26_223846_korses.png",
    alt: "SHIFT",
    link: "/projects2/shift",
  },
    {
    slug: "page.ai-web",
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1785102092/Screenshot_2026-07-26_223954_jqiyrk.png",
    alt: "Page.ai-Web",
    link: "/projects2/page.ai-web",
  },
  {
    slug: "page.ai-desktop",
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1785102108/Screenshot_2026-07-24_135212_wr2hi8.png",
    alt: "Page.ai-Desktop",
    link: "/projects2/page.ai-desktop",
  },
  {
    slug: "myright",
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1782674208/Screenshot_2026-06-28_201430_pcnvi3.png",
    alt: "MyRight",
    link: "/projects2/myright",
  },
  {
    slug: "medicx",
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763632234/Screenshot_2025-11-20_104944_uxotyh.png",
    alt: "MEDICX",
    link: "/projects2/medicx",
  },

  {
    slug: "jshare",
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763633342/Screenshot_2025-11-20_105948_vnxvlg.png",
    alt: "JSHARE",
    link: "/projects2/jshare",
  },
  {
    slug: "haven",
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1782674606/Screenshot_2026-06-28_202240_j9raa1.png",
    alt: "HAVEN",
    link: "/projects2/haven",
  },
 
];

const ProjectsGallery = () => {
  return (
    <div className="h-[20rem] mb-[10rem] flex flex-col antialiased items-center justify-center relative overflow-hidden cursor-pointer">
      <InfiniteMovingCards items={projects} direction="left" speed="fast" />
    </div>
  );
};

export default ProjectsGallery;
