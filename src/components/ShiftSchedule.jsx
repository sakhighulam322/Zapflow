import React from 'react';

export default function ShiftSchedule({ schedule }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Shift Schedule</h2>

      <table className="min-w-full text-sm text-left">
        <thead>
          <tr className="border-b text-gray-600">
            <th className="py-2 px-3">Date</th>
            <th className="py-2 px-3">Day</th>
            <th className="py-2 px-3">Shift</th>
            <th className="py-2 px-3">Message</th>
          </tr>
        </thead>
        <tbody>
          {schedule.length === 0 ? (
            <tr>
              <td colSpan="4" className="py-4 text-center text-gray-500">
                No scheduled shifts.
              </td>
            </tr>
          ) : (
            schedule.map((entry, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-2 px-3 text-gray-800 font-medium">{entry.date}</td>
                <td className="py-2 px-3">{entry.day}</td>
                <td className="py-2 px-3 text-blue-700 font-semibold">{entry.shift}</td>
                <td className="py-2 px-3 text-gray-600">{entry.message}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}