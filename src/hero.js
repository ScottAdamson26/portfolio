// hero.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"; // Import the graduation cap icon

const Hero = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full transition-all duration-1000 ease-in-out mt-36">
      <div className="w-1/2 ml-10">
        <h1 className="text-customBlue font-bold text-6xl transition-all duration-1000 ease-in-out">
          Scott @ SJ DIGITAL
        </h1>

        <p className="font-normal text-customBlue text-3xl mt-5 transition-all duration-1000 ease-in-out">
          Crafting custom, user-friendly web apps with expert UI/UX design.
          UK-based.
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
