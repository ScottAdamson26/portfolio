import React from 'react';

const Popup = ({ title, description, image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 w-screen min-h-screen">
      <div className="relative bg-white max-w-screen-xl mx-auto w-full p-6">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-black text-lg font-bold"
          onClick={onClose}
        >
          ×
        </button>
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-customBlue  mb-2">{title}</h2>
        
        {/* Description */}
        <p className=" text-base opacity-90 text-customBlue font-semibold mb-4">{description}</p>
        
        {/* Image */}
        <div className="w-full h-auto">
          <img src={image} alt={title} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
