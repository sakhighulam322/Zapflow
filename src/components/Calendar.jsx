import React, { useState } from 'react';

const viewOptions = ['Week', 'Day', 'Month', 'List'];

export default function Calendar() {
  const [currentView, setCurrentView] = useState('Week');

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">My Calendar</h2>

        {/* View Toggle Buttons */}
        <div className="flex gap-2">
          {viewOptions.map((view) => (
            <button
              key={view}
              onClick={() => setCurrentView(view)}
              className={`px-3 py-1 text-sm rounded-md border ${
                currentView === view
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {view}
            </button>
          ))}
        </div>
      </div>

      {/* Placeholder Calendar Display */}
      <div className="h-60 flex items-center justify-center border border-dashed border-gray-300 rounded-md bg-gray-50">
        <span className="text-gray-500 text-sm">
          {currentView} view calendar coming soon...
        </span>
      </div>
    </div>
  );
}