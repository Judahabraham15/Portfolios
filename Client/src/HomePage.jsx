import React from "react";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Timeline from "./Components/Timeline/Timeline";
import ScrollToTop from "./Components/ScrollToTop";
import Loader from "./Components/Loader/Loader";
import DescriptiveText from "./Components/DescriptiveText";
import ProjectsGallery from "./Components/ProjectsGallery";
import { useEffect, useState } from "react";
import TechCarousel from "./Components/TechCarousel";
import Vibe from "./Components/Vibe";
import { Testimonials } from "./Components/Testimonials";
import Work from "./Components/Work";

let hasLoaded = false;
const HomePage = ({ setIsModalOpen }) => {
  const [isLoading, setisLoading] = useState(!hasLoaded);

  useEffect(() => {
    if (hasLoaded) return;
    const timer = setTimeout(() => {
      hasLoaded = true;
      setisLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Hero setIsModalOpen={setIsModalOpen} />
          <ProjectsGallery />
          <DescriptiveText />
          <TechCarousel />
          <About />
          <Projects />
          <Work />
          <Testimonials />
          <Vibe />
          {/* <Timeline /> */}

          <ScrollToTop />
        </>
      )}
    </div>
  );
};

export default HomePage;
