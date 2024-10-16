import React, { useState, useEffect } from "react";
import NavBar from "./NavBar"; 
import Hero from "./hero"; 
import Work from "./work"; 
import Enquire from "./Enquire"; 
import Popup from "./Popup"; // Import the Popup component
import "./index.css"; 

function App() {
  const [loaded, setLoaded] = useState(false); 
  const [activeSection, setActiveSection] = useState("Home"); 
  const [selectedItem, setSelectedItem] = useState(null); // State to handle selected portfolio item for popup

  useEffect(() => {
    // Trigger the transition after the component has mounted
    setTimeout(() => {
      setLoaded(true);
    }, 100); 
  }, []);

  const handlePopupOpen = (item) => {
    setSelectedItem(item); // Set the selected item to open in the popup
  };

  const handlePopupClose = () => {
    setSelectedItem(null); // Close the popup by resetting the selected item
  };

  return (
    <div
      className={`App flex flex-col w-full bg-offWhite items-center min-h-screen transition-opacity duration-1000 ease-in-out ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <NavBar active={activeSection} setActive={setActiveSection} />

      {/* Main container for all page content with consistent width */}
      <div
        className={`w-full flex flex-col items-center mx-auto px-4 max-w-screen-xl transform transition-all duration-1000 ease-in-out ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="w-full flex flex-col font-rubik">
          {activeSection === "Home" && (
            <>
              <Hero /> {/* Show Hero if Home is active */}
              <Work onPopupOpen={handlePopupOpen} /> {/* Pass popup handler to Work */}
            </>
          )}
          {activeSection === "Work" && <Work onPopupOpen={handlePopupOpen} />} {/* Show Work if Work is active */}
          {activeSection === "Enquire" && <Enquire />} {/* Show Enquire if active */}
        </div>
      </div>

      {/* Render the popup if there is a selected item */}
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
