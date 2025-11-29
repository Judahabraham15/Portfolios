import "./App.css";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills/Skills";
import Timeline from "./Components/Timeline/Timeline";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import React, { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";
import IsUnderonstruction from "./Components/IsUnderConstruction";
import ScrollToTop from "./Components/ScrollToTop";
import DescriptiveText from "./Components/DescriptiveText";
import ProjectsGallery from "./Components/ProjectsGallery";
import Lenis from "lenis";
function App() {
  const [isLoading, setisLoading] = useState(true);
  const isUnderConstruction = true;

  useEffect(() => {
    const timer = setTimeout(() => setisLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (isUnderConstruction) {
    document.title = "Under Construction | Portfolio";
    return <IsUnderonstruction />;
  }
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup on unmount to prevent memory leaks
    return () => lenis.destroy();
  }, []);
  return (
    <div className="app">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <ProjectsGallery />
          <DescriptiveText />
          <About />
          <Projects />
          <Skills />
          <Timeline />
          <Contacts />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  );
}

export default App;
