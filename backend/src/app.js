import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from 'dotenv';
import authRoutes from './routes/auth.js';

config(); // load .env variables into process.env

const app = express();

// ── Security middleware ──────────────────────────────────
app.use(helmet());

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

// ── Logging ──────────────────────────────────────────────
app.use(morgan('dev'));

// ── Body parsing ─────────────────────────────────────────
// Without these, req.body is undefined
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Health route ─────────────────────────────────────────
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  });
});

app.use('/api/auth', authRoutes);

// ── 404 handler (catches any unmatched route) ────────────
// Must come after all routes
app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.method} ${req.path} not found` });
});

// ── Global error handler ─────────────────────────────────
// Must have exactly 4 params — Express identifies error handlers this way
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    message: err.message || 'Internal server error',
  });
});

export default app;