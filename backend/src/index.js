import app from './app.js';

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`
  ┌─────────────────────────────────────┐
  │   Server running                    │
  │   http://localhost:${PORT}            │
  │   Environment: ${process.env.NODE_ENV}      │
  └─────────────────────────────────────┘
  `);
});

// Graceful shutdown — handles Ctrl+C and deployment restarts cleanly
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Closing server...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});