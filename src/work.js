import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import medicineImage from "./med1.png";
import antigamba from "./medicine.png";
import potpundit from "./potpundit.png";

const workItems = [
  {
    title: "Anti Gambling Gambling Club",
    date: "October 2023",
    image: antigamba,
    description: "A movement to combat gambling addiction.",
    link: "https://antigambling.netlify.app",
  },
  {
    title: "Doctor Revision",
    date: "September 2023",
    image: medicineImage,
    description:
      "An interactive learning platform for UK-based medical students to revise for their final year UKMLA exam.",
    popup: true,
  },
  {
    title: "The Pot Pundit",
    date: "January 2023",
    image: potpundit,
    description: "Cannabis.",
    link: "https://thepotpundit.com",
  },
];

const Work = ({ activeSection, onPopupOpen }) => {
  const handleItemClick = (item) => {
    if (item.link) {
      window.open(item.link, "_blank");
    } else if (item.popup) {
      onPopupOpen(item);
    }
  };

  return (
    <div
      className="  w-full text-customBlue transition-all duration-1000 ease-in-out pt-24"
    >
      <p className="text-left text-darkGrey tracking-wider text-sm uppercase opacity-70 font-semibold transition-all duration-1000 ease-in-out">
        Latest Work
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {workItems.map((item, index) => (
          <div
            key={index}
            className="w-full cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
            <div className="relative w-[612px] h-auto mb-4 overflow-hidden shadow-md group">
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale-hover"
              />

              {/* Icon */}
              <div className="absolute bg-beige inset-0  flex items-center justify-center opacity-0 hover:opacity-65 transition-opacity duration-500 ease-in-out">
              
              </div>
            </div>

            {/* Text Information */}
            <p className="text-left text-lg font-semibold">{item.title}</p>
            <p className="text-left text-sm text-neutral-500">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
