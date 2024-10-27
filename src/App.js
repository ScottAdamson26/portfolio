import React, { useState, useEffect, useRef } from "react";
import NavBar from "./NavBar";
import Hero from "./hero";
import Work from "./work";
import Enquire from "./Enquire";
import Popup from "./Popup";
import "./index.css";
function App() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [selectedItem, setSelectedItem] = useState(null);

  // Section refs for scrolling
  const homeRef = useRef(null);
  const workRef = useRef(null);
  const enquireRef = useRef(null);

  // Threshold distance from the top of the viewport in pixels
  const scrollThreshold = 100;

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the distance and visibility of each section
      const homeTop = homeRef.current?.getBoundingClientRect().top;
      const workTop = workRef.current?.getBoundingClientRect().top;
      const enquireTop = enquireRef.current?.getBoundingClientRect().top;
      const enquireHeight = enquireRef.current?.getBoundingClientRect().height;
  
      // Calculate if more than 50% of Enquire section is visible
      const enquireVisiblePercentage = enquireRef.current
        ? Math.min(
            window.innerHeight - enquireTop,
            enquireHeight
          ) / enquireHeight
        : 0;
  
      // Override: If > 50% of Enquire is visible, set it as active
      if (enquireVisiblePercentage > 0.8) {
        setActiveSection("Enquire");
        return;
      }
  
      // If Enquire is not > 50% visible, check Work and Home based on scroll threshold
      if (workTop <= scrollThreshold) {
        setActiveSection("Work");
      } else if (homeTop <= scrollThreshold) {
        setActiveSection("Home");
      }
    };
  
    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);
  
    // Cleanup scroll listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handlePopupOpen = (item) => {
    setSelectedItem(item);
  };

  const handlePopupClose = () => {
    setSelectedItem(null);
  };

  return (
    <div
      className={`App flex flex-col w-full bg-offWhite items-center min-h-screen transition-opacity duration-1000 ease-in-out ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <NavBar 
        active={activeSection} 
        setActive={setActiveSection} 
        homeRef={homeRef}
        workRef={workRef}
        enquireRef={enquireRef}
      />

      <div
        className={`w-full overflow-y-auto flex flex-col items-center mx-auto max-w-screen-xl px-4 transform transition-all duration-1000 ease-in-out ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="w-full flex flex-col font-rubik">
          <section id="Home" ref={homeRef}>
            <Hero />
          </section>
          <section id="Work" ref={workRef}>
            <Work
              activeSection={activeSection}
              onPopupOpen={handlePopupOpen}
            />
          </section>
          <section id="Enquire" ref={enquireRef}>
            <Enquire />
          </section>
        </div>
      </div>

      {selectedItem && (
        <Popup
          title={selectedItem.title}
          description={selectedItem.description}
          image={selectedItem.image}
          onClose={handlePopupClose}
        />
      )}
    </div>
  );
}

export default App;
