import React, { useState } from 'react';
import {
  FaUsers,
  FaUser,
  FaFolderOpen,
  FaFileInvoice,
  FaStopwatch,
  FaTasks,
  FaCalendarAlt,
  FaTicketAlt,
  FaUmbrellaBeach,
  FaBell,
} from 'react-icons/fa';

import Header from '../components/Header';
import HeaderBar from './Header';
import Card from '../components/Card';
import Project from './Project'; // Import the Project tab component

// Dashboard card data
const statsData = [
  {
    title: 'Total Clients', primaryValue: 11, icon: FaUsers,
    iconBg: 'bg-blue-100', iconColor: 'text-blue-600'
  },
  {
    title: 'Total Employees', primaryValue: 12, icon: FaUser,
    iconBg: 'bg-green-100', iconColor: 'text-green-600'
  },
  {
    title: 'Total Projects', primaryValue: 10, icon: FaFolderOpen,
    iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600'
  },
  {
    title: 'Due Invoices', primaryValue: 11, icon: FaFileInvoice,
    iconBg: 'bg-red-100', iconColor: 'text-red-600'
  },
  {
    title: 'Hours Logged', primaryValue: 69, primaryLabel: 'hrs', icon: FaStopwatch,
    iconBg: 'bg-purple-100', iconColor: 'text-purple-600'
  },
  {
    title: 'Pending Tasks', primaryValue: 37, icon: FaTasks,
    iconBg: 'bg-pink-100', iconColor: 'text-pink-600'
  },
  {
    title: 'Today Attendance', primaryValue: '0/12', icon: FaCalendarAlt,
    iconBg: 'bg-teal-100', iconColor: 'text-teal-600'
  },
  {
    title: 'Unresolved Tickets', primaryValue: 3, icon: FaTicketAlt,
    iconBg: 'bg-orange-100', iconColor: 'text-orange-600'
  },
  {
    title: 'Pending Leaves', primaryValue: 5, icon: FaUmbrellaBeach,
    iconBg: 'bg-green-200', iconColor: 'text-green-700'
  },
  {
    title: 'Open Tickets', primaryValue: 8, icon: FaTicketAlt,
    iconBg: 'bg-red-200', iconColor: 'text-red-700'
  },
  {
    title: 'Pending FollowUp', primaryValue: 4, icon: FaBell,
    iconBg: 'bg-indigo-100', iconColor: 'text-indigo-600'
  },
];

// Timeline reusable component
const Timeline = ({ title, items }) => (
  <div className="bg-white rounded-2xl shadow-md p-5">
    <h3 className="text-lg font-semibold mb-3 border-b pb-2">{title}</h3>
    <ul className="space-y-2 text-gray-700 text-sm">
      {items.map((item, index) => (
        <li key={index} className="pl-2 border-l-2 border-blue-500">{item}</li>
      ))}
    </ul>
  </div>
);

const AdminAdvancedDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const userTimeline = [
    'User A logged in',
    'User B updated profile',
    'User C logged out',
  ];

  const projectTimeline = [
    'Project X created',
    'Project Y marked complete',
    'Project Z deadline changed',
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Top Header Title */}
        <Header title="Advanced Dashboard" />

        {/* Tab Header Bar */}
        <HeaderBar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content */}
        <main className="p-6 space-y-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsData.map((stat, idx) => (
                  <Card
                    key={idx}
                    title={stat.title}
                    primaryValue={stat.primaryValue}
                    primaryLabel={stat.primaryLabel}
                    icon={stat.icon}
                    iconBg={stat.iconBg}
                    iconColor={stat.iconColor}
                  />
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Timeline title="User Activity Timeline" items={userTimeline} />
                <Timeline title="Project Activity Timeline" items={projectTimeline} />
              </div>
            </>
          )}

          {/* Project Tab */}
          {activeTab === 'project' && (
            <Project />
          )}

          {/* Future tabs like client, hr, finance, etc., can go here */}
        </main>
      </div>
    </div>
  );
};

export default AdminAdvancedDashboard;
