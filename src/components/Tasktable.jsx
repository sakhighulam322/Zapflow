import React from 'react';

// Helper to render colored status dots
const getStatusDotColor = (status) => {
  switch (status.toLowerCase()) {
    case 'to do':
      return 'bg-yellow-500';
    case 'doing':
      return 'bg-blue-500';
    case 'incomplete':
      return 'bg-red-600';
    case 'done':
      return 'bg-green-500';
    default:
      return 'bg-gray-400';
  }
};

export default function TaskTable({ tasks }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">My Tasks</h2>
      <table className="min-w-full text-sm text-left">
        <thead>
          <tr className="border-b text-gray-600">
            <th className="py-2 px-3">Task#</th>
            <th className="py-2 px-3">Task</th>
            <th className="py-2 px-3">Status</th>
            <th className="py-2 px-3">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="4" className="py-4 text-center text-gray-500">
                No tasks found.
              </td>
            </tr>
          ) : (
            tasks.map((task) => (
              <tr key={task.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-3 text-blue-700 font-medium">{task.id}</td>
                <td className="py-2 px-3">{task.title}</td>
                <td className="py-2 px-3">
                  <span className="flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full ${getStatusDotColor(task.status)}`}
                    />
                    {task.status}
                  </span>
                </td>
                <td className="py-2 px-3 text-red-600 font-semibold">{task.dueDate}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}