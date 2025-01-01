import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="z-10 fixed top-0 right-0 m-3 p-3">
      <div className="flex justify-between items-center">
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md focus:outline-none"
        >
          <img
            src="/assets/hamburger-icon.png"
            alt="hamburger-icon"
            className="w-6"
          />
        </button>

        <nav className="hidden lg:flex flex-col space-y-4">
          {['hero', 'projects', 'experience', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-lg font-bold text-gray-500 hover:text-white rounded-lg px-2 py-1"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
      </div>

      <div
        className={`lg:hidden absolute right-0 mt-4 transform transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-90 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {isOpen && (
          <nav className="flex flex-col bg-white shadow-md rounded-md p-4 space-y-4">
            {['hero', 'projects', 'experience', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-gray-500 hover:text-black rounded-lg px-4 py-2 hover:bg-gray-200"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
