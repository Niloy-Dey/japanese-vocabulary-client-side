import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full text-white z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold">
              Logo
            </a>
          </div>

          {/* Links (Hidden on small screens) */}
          <div className="hidden  md:flex space-x-4">
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
              className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu.classList.toggle('hidden');
              }}
            >
              <svg
                className="h-6 w-6"
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

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden bg-blue-700 bg-opacity-75">
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
    </nav>
  );
};

export default Navbar;
