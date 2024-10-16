import React from "react";
import medicineImage from './medicine.png';
import pot from './pot.webp';

const workItems = [
  {
    title: "Doctor Revision",
    date: "September 2023",
    image: medicineImage,
    description: "A healthcare platform for doctors and patients.",
    popup: true,
  },
  {
    title: "The Pot Pundit",
    date: "February 2023",
    image: pot,
    description: "A blog on the latest in the cannabis industry.",
    link: "https://thepotpundit.com",
  },
  {
    title: "Anti Gambling Gambling Club",
    date: "October 2023",
    image: medicineImage,
    description: "A movement to combat gambling addiction.",
    link: "https://antigambling.netlify.app",
  },
];

const Work = ({ onPopupOpen }) => {
  const handleItemClick = (item) => {
    if (item.link) {
      // If the item has a link, open in new tab
      window.open(item.link, "_blank");
    } else if (item.popup) {
      // If item should trigger a popup, call onPopupOpen
      onPopupOpen(item);
    }
  };

  return (
    <div className="mt-16 w-full text-customBlue transition-all duration-1000 ease-in-out">
      <p className="text-left text-customBlue tracking-wider text-base font-semibold transition-all duration-1000 ease-in-out">
        PREVIOUS WORK
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {workItems.map((item, index) => (
          <div
            key={index}
            className="w-full cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
            <div
              className="w-full h-[300px] bg-cover bg-center shadow-md bg-no-repeat mb-4"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <p className="text-left text-lg font-semibold">{item.title}</p>
            <p className="text-left text-sm text-neutral-500">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
