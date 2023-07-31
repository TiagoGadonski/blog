'use client'
// components/HamburgerMenu.tsx
import { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='static'>
      <button
        onClick={toggleMenu}
        className="inline-flex items-center justify-center p-1 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white absolute right-6"
      >
        <svg
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <div className={`pt-9 right-6 absolute ${isOpen ? 'block' : 'hidden'}`}>
        {/* Your menu items go here */}
        <div className="bg-gray-700 p-4 rounded-xl">
          <a href="#" className="block text-white rounded-xl hover:bg-gray-600 py-2 px-4">
            Menu Item 1
          </a>
          <a href="#" className="block text-white rounded-xl hover:bg-gray-600 py-2 px-4">
            Menu Item 2
          </a>
          {/* Add more menu items as needed */}
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
