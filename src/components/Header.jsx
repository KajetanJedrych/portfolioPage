import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-amber-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <a href="https://www.jedrychk.com/" className="text-2xl font-bold text-gray-800">
          <span className="text-blue-600">Kajetan's </span>Portfolio
        </a>
        <nav>
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-gray-600 hover:text-blue-600 text-lg">About</Link></li>
          <li><Link to="/projects" className="text-gray-600 hover:text-blue-600 text-lg">Projects</Link></li>
          <li><Link to="/blog" className="text-gray-600 hover:text-blue-600 text-lg">Blog</Link></li>
          <li><Link to="/contact" className="text-gray-600 hover:text-blue-600 text-lg">Contact</Link></li>
        </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
