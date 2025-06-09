import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import AdminDashboard from './adminDashboard';
import AdminAdvancedDashboard from './adminAdvancedDashboard';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'advancedDashboard':
        return <AdminAdvancedDashboard />;
      default:
        return (
          <div className="p-8 text-gray-700">
            <h1 className="text-2xl font-semibold">
              {activePage.charAt(0).toUpperCase() + activePage.slice(1)} Page
            </h1>
            <p className="mt-2">This page is under construction.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar setActivePage={setActivePage} />
      <main className="flex-1 bg-gray-100 overflow-y-auto">
        {renderPage()}
      </main>
    </div>
  );
}
