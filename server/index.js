const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

let tasks = [
  { id: '#IEU-30', title: 'Review design documents', status: 'To Do', dueDate: '2025-07-03' },
  { id: '#ASS-19', title: 'Code user authentication', status: 'Doing', dueDate: '2025-07-05' },
  { id: '#ASS-18', title: 'Write unit tests', status: 'Incomplete', dueDate: '2025-07-08' },
  { id: '#DMA-6', title: 'Update dashboard UI', status: 'Doing', dueDate: '2025-07-10' }
];

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).json(task);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
