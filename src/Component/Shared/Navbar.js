import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black z-30"> {/* Make Navbar opaque */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold">
              Logo
            </a>
          </div>

          {/* Links (Hidden on small screens) */}
          <div className="hidden md:flex space-x-4">
            <a href="/" className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md">
              Home
            </a>
            <a href="/dashboard" className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md">
              Dashboard
            </a>
            <a href="/lessons" className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md">
              Lessons
            </a>
            
            <a href="/tutorials" className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md">
              Tutorials
            </a>
            <a href="/login" className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md">
              Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-black hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6 text-green-500 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Toggle based on isMenuOpen state) */}
      <div
        className={`md:hidden bg-black text-white bg-opacity-75 fixed inset-0 top-0 right-0 transform transition-all duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ zIndex: isMenuOpen ? '9999' : '' }}
      >
        <div className="flex justify-end p-4">
          <button
            type="button"
            className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <a href="/" className="block px-4 py-2 hover:bg-white hover:bg-opacity-20">
          Home
        </a>
        <a href="/dashboard" className="block px-4 py-2 hover:bg-white hover:bg-opacity-20">
          Dashboard
        </a>
        <a href="/lessons" className="block px-4 py-2 hover:bg-white hover:bg-opacity-20">
          Lessons
        </a>
        <a href="/tutorials" className="block px-4 py-2 hover:bg-white hover:bg-opacity-20">
          Tutorials
        </a>
        <a href="/login" className="block px-4 py-2 hover:bg-white hover:bg-opacity-20">
          Login
        </a>
      </div>

      {/* Content Overlay when Menu is Open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleMenu}  // Close the menu when clicking the overlay
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
