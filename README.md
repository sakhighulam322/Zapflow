# Zapflow

This project contains a React frontend and a simple Express.js backend.

## Backend

The Express server lives in the `server` directory.

### Install Dependencies

```bash
cd server
npm install
```

### Start the server

```bash
npm start
```

By default the server runs on port `4000` and exposes a few demo API endpoints:

- `GET /api/tasks`
- `GET /api/schedule`
- `GET /api/appreciation`
- `GET /api/advanced/stats`
- `GET /api/advanced/userTimeline`
- `GET /api/advanced/projectTimeline`

These endpoints return static data used by the frontend dashboard.
