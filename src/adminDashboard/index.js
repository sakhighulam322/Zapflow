import React, { useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import TaskTable from '../components/Tasktable';
import ShiftSchedule from '../components/ShiftSchedule';
import EmployeeAppreciation from '../components/EmployeeAppreciation';
import Calendar from '../components/Calendar';
import DashboardBox from './DashboardBox';
import Notices from './Notices';

import {
  FaTasks,
  FaProjectDiagram,
  FaClipboardList,
  FaUserClock,
  FaRegCalendarAlt,
  FaRegSmile,
} from 'react-icons/fa';

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const tasks = [
    { id: '#IEU-30', title: 'Review design documents', status: 'To Do', dueDate: '2025-07-03' },
    { id: '#ASS-19', title: 'Code user authentication', status: 'Doing', dueDate: '2025-07-05' },
    { id: '#ASS-18', title: 'Write unit tests', status: 'Incomplete', dueDate: '2025-07-08' },
    { id: '#DMA-6', title: 'Update dashboard UI', status: 'Doing', dueDate: '2025-07-10' },
  ];

  const schedule = [
    { date: '2025-07-03', day: 'Tuesday', shift: 'Morning', note: 'Daily Standup' },
    { date: '2025-07-04', day: 'Wednesday', shift: 'Evening', note: 'Code Review' },
    { date: '2025-07-05', day: 'Thursday', shift: 'Off', note: 'Public Holiday' },
  ];

  const appreciatedEmployees = [
    {
      name: 'Alice Johnson',
      role: 'UI/UX Designer',
      award: 'Best New Hire',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'James Smith',
      role: 'Software Engineer',
      award: 'Top Performer',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
  ];

  return (
    <div className="flex h-screen font-sans overflow-hidden">
    
      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-y-auto bg-gray-100">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className="p-6 space-y-6">
          {/* Welcome Card */}
          <section className="bg-white rounded-lg shadow p-5">
            <h1 className="text-2xl font-bold text-gray-800">Welcome, John Doe</h1>
            <p className="text-gray-600 text-sm">Role: Developer | ID: #EMP-00123</p>
          </section>

          {/* Metrics Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              title="Tasks"
              primaryValue={4}
              primaryLabel="Pending"
              secondaryValue={4}
              secondaryLabel="Overdue"
              icon={FaTasks}
              iconBg="bg-yellow-100"
              iconColor="text-yellow-600"
            />
            <Card
              title="Projects"
              primaryValue={6}
              primaryLabel="In Progress"
              secondaryValue={2}
              secondaryLabel="Overdue"
              icon={FaProjectDiagram}
              iconBg="bg-purple-100"
              iconColor="text-purple-600"
            />
            <Card
              title="Open Tasks"
              primaryValue={4}
              primaryLabel=""
              icon={FaClipboardList}
              iconBg="bg-green-100"
              iconColor="text-green-600"
            />
          </section>

          {/* Informational Boxes */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <DashboardBox title="On Leave Today" icon={FaUserClock} iconColor="text-red-500" />
            <DashboardBox title="Joinings & Anniversary" icon={FaRegSmile} iconColor="text-blue-500" />
            <DashboardBox title="Notice Period Duration" icon={FaRegCalendarAlt} iconColor="text-orange-500" />
            <DashboardBox title="Probation Date" icon={FaRegCalendarAlt} iconColor="text-yellow-500" />
            <DashboardBox title="Internship Date" icon={FaRegCalendarAlt} iconColor="text-indigo-500" />
            <DashboardBox title="Contract Date" icon={FaRegCalendarAlt} iconColor="text-pink-500" />
          </section>

          {/* Notices Section (Full Component) */}
          <section>
            <Notices />
          </section>

          {/* Placeholder Weekly Time Log */}
          <section className="bg-white rounded-lg shadow p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Weekly Time Log</h2>
            <p className="text-sm italic text-gray-500">[Time log chart coming soon]</p>
          </section>

          {/* Task Table */}
          <TaskTable tasks={tasks} />

          {/* Shift Schedule */}
          <ShiftSchedule schedule={schedule} />

          {/* Employee Appreciation */}
          <EmployeeAppreciation employees={appreciatedEmployees} />

          {/* Calendar */}
          <Calendar />
        </main>
      </div>
    </div>
  );
}
