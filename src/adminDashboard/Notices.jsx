import React from 'react';

const sampleNotices = [
  { date: '2025-06-03', message: 'WOULD not remember ever having seen in her life, and had just.' },
  { date: '2025-06-03', message: 'Queen was in the morning, just time to wash the things get used to.' },
  { date: '2025-06-03', message: 'So you see, Alice had not gone (We know it to make out which were.' },
  { date: '2025-06-02', message: 'You see the Mock Turtle, and to wonder what CAN have happened to me!.' }
];

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: 'short' };
  const month = date.toLocaleString('en-US', options);
  const day = date.getDate().toString().padStart(2, '0');
  return { month, day };
};

const Notices = () => {
  return (
    <div className="bg-white rounded shadow p-4 h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-md font-semibold text-black">Notices</h2>
      </div>

      {/* Notices List */}
      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
        {sampleNotices.map((notice, idx) => {
          const { month, day } = formatDate(notice.date);
          return (
            <div key={idx} className="flex items-start border p-2 rounded hover:bg-gray-50 transition">
              <div className="flex flex-col items-center justify-center w-12 mr-3 text-center border rounded p-1 bg-gray-100 text-gray-700 text-sm">
                <span className="font-semibold">{month}</span>
                <span>{day}</span>
              </div>
              <p className="text-sm text-gray-700">{notice.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notices;
