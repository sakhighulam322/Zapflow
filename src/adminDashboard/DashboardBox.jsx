import React from 'react';
import {
  FaPlaneDeparture,
  FaHome,
  FaBirthdayCake,
  FaClipboardList,
  FaUserClock,
  FaUserGraduate,
  FaFileContract,
} from 'react-icons/fa';

// Icon mappings for each type
const iconMap = {
  leave: <FaPlaneDeparture className="text-blue-500 text-2xl mb-2" />,
  wfh: <FaHome className="text-green-500 text-2xl mb-2" />,
  joinings: <FaBirthdayCake className="text-pink-500 text-2xl mb-2" />,
  notice: <FaClipboardList className="text-orange-500 text-2xl mb-2" />,
  probation: <FaUserClock className="text-indigo-500 text-2xl mb-2" />,
  internship: <FaUserGraduate className="text-teal-500 text-2xl mb-2" />,
  contract: <FaFileContract className="text-purple-500 text-2xl mb-2" />,
};

// DashboardBox component
const DashboardBox = ({
  title,
  type = 'leave',
  message = '- No record found -',
}) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow flex flex-col items-center justify-center text-center min-h-[150px] transition hover:shadow-md">
      {/* Dynamic Icon */}
      {iconMap[type] || iconMap['leave']}

      {/* Title */}
      <h3 className="font-semibold text-gray-800 text-sm md:text-base mb-1">{title}</h3>

      {/* Message */}
      <p className="text-gray-500 text-xs md:text-sm">{message}</p>
    </div>
  );
};

export default DashboardBox;