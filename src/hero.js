// hero.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"; // Import the graduation cap icon

const Hero = () => {
  return (
    <div className="flex flex-row justify-between items-center transition-all duration-1000 ease-in-out mt-28 ">
      <div className="w-1/2 md:ml-12">
        <h1 className="text-customBlue font-bold text-6xl transition-all duration-1000 ease-in-out">
          Scott @ SJ DIGITAL
        </h1>
        
        <p className="font-normal text-customBlue text-xl mt-5 transition-all duration-1000 ease-in-out">
          Experienced UI/UX designer, proficient in React development. Based in the UK.
        </p>
        {/* Graduation cap icon with text */}
        <div className="flex items-center text-darkGrey mt-4 transition-all duration-1000 ease-in-out">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
          <span className="text-sm">COMP SCI @ EDINBURGH UNIVERSITY</span>
        </div>
      </div>
      <div className="flex md:mr-20">
        {/* Display the headshot image */}
        <img
          src={`${process.env.PUBLIC_URL}/headshot.png`}
          alt="Scott's Headshot"
          className="w-64 h-auto rounded-full shadow-xl transition-all duration-1000 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Hero;
