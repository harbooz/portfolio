import Header from "./components/Header";
import Skills from "./components/Skills/Skills";
import About from "./components/About";
import Education from "./components/Education/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import { FaEquals } from "react-icons/fa";
import { Link } from "react-router-dom";

function App() {
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeMenu, setActiveMenu] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleCloseMenu = () => {
    if (activeMenu && screenSize <= 768) {
      setActiveMenu(false);
    }
  };

  return (
    <div className="app-wrapper">
      {!activeMenu && (
        <div className="mobile__menu">
          <Link className="burger-menu" onClick={setActiveMenu}>
            <FaEquals />
          </Link>
        </div>
      )}
      {activeMenu && <Header handleCloseMenu={handleCloseMenu} />}

      <main className="main__sections">
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
