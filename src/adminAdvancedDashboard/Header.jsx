// src/adminAdvancedDashboard/Header.jsx
import React from 'react';
import { FaCog } from 'react-icons/fa';
import classNames from 'classnames';

// Tab names to display in the header
const navItems = ['Overview', 'Project', 'Client', 'HR', 'Ticket', 'Finance'];

const Header = ({ activeTab, setActiveTab }) => {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-3 overflow-x-auto">
        
        {/* Navigation Tabs */}
        <nav className="flex space-x-6 text-sm font-medium whitespace-nowrap">
          {navItems.map((item) => {
            const key = item.toLowerCase(); // e.g., "Overview" → "overview"
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={classNames(
                  'pb-1 px-2 transition-colors focus:outline-none',
                  activeTab === key
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                )}
              >
                {item}
              </button>
            );
          })}
        </nav>

        {/* Settings Icon */}
        <div className="text-gray-700 hover:text-blue-600 cursor-pointer">
          <FaCog size={18} />
        </div>
      </div>
    </header>
  );
};

export default Header;