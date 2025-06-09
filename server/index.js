const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

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

const statsData = [
  { title: 'Total Clients', primaryValue: 11 },
  { title: 'Total Employees', primaryValue: 12 },
  { title: 'Total Projects', primaryValue: 10 },
  { title: 'Due Invoices', primaryValue: 11 },
  { title: 'Hours Logged', primaryValue: 69, primaryLabel: 'hrs' },
  { title: 'Pending Tasks', primaryValue: 37 },
  { title: 'Today Attendance', primaryValue: '0/12' },
  { title: 'Unresolved Tickets', primaryValue: 3 },
  { title: 'Pending Leaves', primaryValue: 5 },
  { title: 'Open Tickets', primaryValue: 8 },
  { title: 'Pending FollowUp', primaryValue: 4 },
];

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

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.get('/api/schedule', (req, res) => {
  res.json(schedule);
});

app.get('/api/appreciation', (req, res) => {
  res.json(appreciatedEmployees);
});

app.get('/api/advanced/stats', (req, res) => {
  res.json(statsData);
});

app.get('/api/advanced/userTimeline', (req, res) => {
  res.json(userTimeline);
});

app.get('/api/advanced/projectTimeline', (req, res) => {
  res.json(projectTimeline);
});

app.listen(port, () => {
  console.log(`Zapflow backend listening on port ${port}`);
});
