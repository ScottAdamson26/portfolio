import React, { useState, useEffect } from "react";

const NavBar = ({ active, setActive, homeRef, workRef, enquireRef }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update navigation click to scroll instead of changing state
  const handleNavClick = (navItem) => {
    setActive(navItem);
    if (navItem === "Home") {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (navItem === "Work") {
      workRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (navItem === "Enquire") {
      enquireRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-full max-w-screen-xl w-full mx-auto p-4">
      <nav
        className={` font-rubik rounded-full px-6 py-3 w-full mt-2 ${
          hasScrolled ? "bg-offWhite shadow-lg" : ""
        }`}
      >
        <ul className="flex justify-between items-center">
          {["Home", "Work", "Enquire"].map((item) => (
            <li key={item} className="nav-item">
              <button
                onClick={() => handleNavClick(item)}
                className={`${
                  active === item
                    ? "border-customBlue text-customBlue shadow-md"
                    : "border-transparent text-darkGrey"
                } px-4 py-[5px] border-2 rounded-full hover:border-customBlue hover:shadow-md transition-all duration-500 ease-in-out cursor-pointer box-border`}
                style={{ minWidth: "80px", textAlign: "center" }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
