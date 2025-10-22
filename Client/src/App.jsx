import "./App.css";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Timeline from "./Components/Timeline/Timeline";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import React, { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";
// import Lenis from '@studio-freight/lenis'

function App() {
  const [isLoading, setisLoading] = useState(true);
  const isUnderConstruction = true;
  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoading(false);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="app">
      {isLoading ? <Loader /> : <Hero />}
      <Navbar />

      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
