// src/components/Sidebar.jsx

import React, { useState } from 'react';
import {
  FaBars, FaClipboardList, FaCalendarAlt, FaUserFriends, FaUsers, FaBriefcase, FaCogs,
  FaTasks, FaMoneyBillWave, FaEnvelope, FaStickyNote
} from 'react-icons/fa';

const sidebarItems = [
  {
    label: 'Dashboard',
    icon: <FaClipboardList />,
    children: [
      { label: 'Private Dashboard', pageKey: 'dashboard' },
      { label: 'Advanced Dashboard', pageKey: 'advancedDashboard' },
    ],
  },
  {
    label: 'Leads',
    icon: <FaUserFriends />,
    children: [
      { label: 'Lead Contact', pageKey: 'leadContact' },
      { label: 'Deals', pageKey: 'deals' },
    ],
  },
  {
    label: 'HR',
    icon: <FaBriefcase />,
    children: [
      { label: 'Employees', pageKey: 'employees' },
      { label: 'Leaves', pageKey: 'leaves' },
      { label: 'Shift Roster', pageKey: 'shiftRoster' },
      { label: 'Attendance', pageKey: 'attendance' },
      { label: 'Holiday', pageKey: 'holiday' },
      { label: 'Designation', pageKey: 'designation' },
      { label: 'Department', pageKey: 'department' },
      { label: 'Appreciation', pageKey: 'appreciation' },
    ],
  },
  {
    label: 'Work',
    icon: <FaTasks />,
    children: [
      { label: 'Contracts', pageKey: 'contracts' },
      { label: 'Projects', pageKey: 'projects' },
      { label: 'Tasks', pageKey: 'tasks' },
      { label: 'Timesheet', pageKey: 'timesheet' },
    ],
  },
  {
    label: 'Finance',
    icon: <FaMoneyBillWave />,
    children: [
      { label: 'Proposal', pageKey: 'proposal' },
      { label: 'Estimates', pageKey: 'estimates' },
      { label: 'Invoices', pageKey: 'invoices' },
      { label: 'Payments', pageKey: 'payments' },
      { label: 'Credit Note', pageKey: 'creditNote' },
      { label: 'Expenses', pageKey: 'expenses' },
      { label: 'Bank Account', pageKey: 'bankAccount' },
    ],
  },
  {
    label: 'Orders',
    icon: <FaClipboardList />,
    pageKey: 'orders',
  },
  {
    label: 'Tickets',
    icon: <FaEnvelope />,
    pageKey: 'tickets',
  },
  {
    label: 'Events',
    icon: <FaCalendarAlt />,
    pageKey: 'events',
  },
  {
    label: 'Messages',
    icon: <FaEnvelope />,
    badge: 1,
    pageKey: 'messages',
  },
  {
    label: 'Notice Board',
    icon: <FaStickyNote />,
    pageKey: 'noticeBoard',
  },
];

export default function Sidebar({ setActivePage }) {
  const [collapsed, setCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (label) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleItemClick = (pageKey) => {
    if (pageKey) {
      setActivePage(pageKey);
    }
  };

  return (
    <aside
      className={`bg-gray-900 text-white transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      } min-h-screen flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        {!collapsed && <h2 className="text-lg font-bold">Worksuite</h2>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-white text-lg focus:outline-none"
        >
          <FaBars />
        </button>
      </div>

      {/* Profile */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <img
            src="https://i.pravatar.cc/100"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          {!collapsed && (
            <div>
              <p className="text-sm font-semibold">Mr. Arne Pacocha</p>
              <p className="text-xs text-green-400">● Online</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-2 overflow-y-auto flex-1">
        <ul className="space-y-1">
          {sidebarItems.map((item, idx) => {
            const isOpen = openMenus[item.label];
            const hasChildren = item.children?.length > 0;

            return (
              <li key={idx}>
                <div
                  onClick={() =>
                    hasChildren
                      ? toggleMenu(item.label)
                      : handleItemClick(item.pageKey)
                  }
                  className={`flex items-center justify-between px-3 py-2 rounded hover:bg-gray-700 transition cursor-pointer ${
                    hasChildren ? '' : 'pl-2'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    {!collapsed && <span>{item.label}</span>}
                  </div>

                  {!collapsed && item.badge && (
                    <span className="bg-blue-500 text-xs text-white rounded-full px-2 py-0.5 ml-auto">
                      {item.badge}
                    </span>
                  )}

                  {!collapsed && hasChildren && (
                    <span className="ml-auto text-xs">{isOpen ? '▾' : '▸'}</span>
                  )}
                </div>

                {/* Sub-items */}
                {!collapsed && hasChildren && isOpen && (
                  <ul className="ml-8 mt-1 space-y-1">
                    {item.children.map((child, i) => (
                      <li key={i}>
                        <button
                          onClick={() => handleItemClick(child.pageKey)}
                          className="w-full text-left text-sm text-gray-300 px-2 py-1 rounded hover:bg-gray-800"
                        >
                          {child.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800">
        <button
          onClick={() => handleItemClick('settings')}
          className="flex items-center text-sm gap-3 p-2 rounded hover:bg-gray-700 transition w-full text-left"
        >
          <FaCogs />
          {!collapsed && <span>Settings</span>}
        </button>
        {!collapsed && (
          <div className="text-xs text-gray-500 mt-2">v5.5.1</div>
        )}
      </div>
    </aside>
  );
}
