import React from 'react';
import {
  FaSearch,
  FaRegCommentDots,
  FaClock,
  FaPlus,
  FaBell,
  FaPowerOff,
} from 'react-icons/fa';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Left Section: Title and Breadcrumb */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <nav className="flex items-center text-sm text-gray-500 space-x-1 mt-1">
          <span>Home</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-700 font-medium">Dashboard</span>
        </nav>
      </div>

      {/* Right Section: Icons */}
      <div className="flex items-center space-x-5">
        <FaSearch className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer" />
        <FaRegCommentDots className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer" />
        <FaClock className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer" />
        <FaPlus className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer" />

        {/* Bell Icon with Notification Badge */}
        <div className="relative">
          <FaBell className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            1
          </span>
        </div>

        <FaPowerOff className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
