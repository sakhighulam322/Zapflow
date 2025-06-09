import React from 'react';

export default function EmployeeAppreciation({ employees }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Employee Appreciation</h2>

      {employees.length === 0 ? (
        <div className="text-gray-500 text-sm text-center py-8">
          No employee appreciations to show.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {employees.map((employee, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-gray-50 p-4 rounded-md border border-gray-200 hover:shadow"
            >
              <img
                src={employee.avatar}
                alt={employee.name}
                className="w-14 h-14 rounded-full object-cover border"
              />
              <div className="flex-1">
                <h3 className="text-md font-semibold text-gray-800">{employee.name}</h3>
                <p className="text-sm text-gray-500">{employee.role}</p>
                <span className="text-xs text-blue-600 font-medium mt-1 block">
                  {employee.award}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}