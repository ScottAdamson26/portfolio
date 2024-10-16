import React, { useState, useEffect } from 'react';

const NavBar = ({ active, setActive }) => {
  const [hasScrolled, setHasScrolled] = useState(false); // State to track if the page has been scrolled

  // Track scroll position to toggle background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (navItem) => {
    setActive(navItem); // Set the active section
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full font-rubik rounded-full px-6 py-6 max-w-screen-xl mx-auto mt-2 ${
        hasScrolled ? ' bg-offWhite shadow-lg' : ''
      }`}
    >
      <ul className="flex justify-between items-center space-x-4">
        <li className="nav-item">
          <a
            onClick={() => handleNavClick('Home')}
            className={`${
              active === 'Home'
                ? 'border-2 border-customBlue text-customBlue'
                : 'border-2 border-offWhite text-gray-700'
            } px-4 py-2 rounded-full hover:border-customBlue transition-all duration-700 ease-in-out cursor-pointer`}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            onClick={() => handleNavClick('Work')}
            className={`${
              active === 'Work'
                ? 'border-2 border-customBlue text-customBlue'
                : 'border-2 border-offWhite text-darkGrey'
            } px-4 py-2 rounded-full hover:border-customBlue transition-all duration-700 ease-in-out cursor-pointer`}
          >
            Work
          </a>
        </li>
        <li className="nav-item">
          <a
            onClick={() => handleNavClick('Enquire')}
            className={`${
              active === 'Enquire'
                ? 'border-2 border-customBlue text-customBlue'
                : 'border-2 border-offWhite text-darkGrey'
            } px-4 py-2 rounded-full hover:border-customBlue transition-all duration-700 ease-in-out cursor-pointer`}
          >
            Enquire
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
