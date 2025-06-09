import React from 'react';
import { FaLayerGroup, FaClock, FaInfoCircle } from 'react-icons/fa';

const Project = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Total Projects */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="text-sm text-gray-500 mb-2">Total Projects</div>
          <div className="flex items-center justify-between">
            <span className="text-blue-600 font-semibold text-lg">0</span>
            <FaLayerGroup className="text-gray-400" size={20} />
          </div>
        </div>

        {/* Overdue Projects */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="text-sm text-gray-500 mb-2">Overdue Projects</div>
          <div className="flex items-center justify-between">
            <span className="text-blue-600 font-semibold text-lg">0</span>
            <FaLayerGroup className="text-gray-400" size={20} />
          </div>
        </div>

        {/* Hours Logged */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="text-sm text-gray-500 mb-2">Hours Logged</div>
          <div className="flex items-center justify-between">
            <span className="text-blue-600 font-semibold text-lg">10h</span>
            <FaClock className="text-gray-400" size={20} />
          </div>
        </div>
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Status Wise Projects */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-gray-700 font-semibold mb-4">Status Wise Projects</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center justify-center h-64">
            <FaInfoCircle className="text-gray-400 mb-2" size={24} />
            <p className="text-gray-400">- Not enough data -</p>
            </div>
        </div>

        {/* Pending Milestone */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-gray-700 font-semibold mb-4">Pending Milestone</h2>
          <div className="w-full border rounded-md overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-100 text-xs font-semibold text-gray-600 px-4 py-2">
              <div>#</div>
              <div>Milestone Title</div>
              <div>Milestone Cost</div>
              <div>Project</div>
            </div>
            <div className="text-center text-gray-400 text-sm py-6">
              - No record found. -
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;