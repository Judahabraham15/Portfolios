"use client";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import IsUnderonstruction from "./Components/Pages/IsUnderConstruction";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Lenis from "lenis";
import HomePage from "./HomePage";
import NotFound from "./Components/Pages/NotFound";
import ProjectDetail from "./Components/Pages/ProjectDetail";
import Blog from "./Components/Pages/Blog";
import TopPage from "./Routes/TopPage";
function App() {
  const isUnderConstruction = true;

  if (isUnderConstruction) {
    document.title = "Under Construction | Portfolio";
    return <IsUnderonstruction />;
  }
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5,
      smooth: true,
    });
    window.lenis = lenis;
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup on unmount to prevent memory leaks
    return () => {
      lenis.destroy();
      delete window.lenis;
    };
  }, []);
  return (
    <div className="app">
      <>
        <Navbar />
        <TopPage />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects2/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
