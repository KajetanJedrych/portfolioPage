import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Kajetan's Portfolio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="text-gray-600 hover:text-blue-600">About</a></li>
            <li><a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
