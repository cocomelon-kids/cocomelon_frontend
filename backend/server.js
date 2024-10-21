const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const path = require('path');
require('dotenv').config();

const app = express(); // Initialize express app
const port = process.env.PORT || 5000;

// CORS options
const corsOptions = {
  origin: 'http://localhost:5173', // Allow your frontend origin
  methods: ['GET', 'POST'],
  credentials: true,
};

app.use(cors(corsOptions)); // Enable CORS
app.use(express.json()); // Middleware to parse JSON

// PostgreSQL Pool Configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Serve the frontend
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Registration Endpoint
app.post('/api/register', async (req, res) => {
  const { childName, phone, password, program } = req.body;

  // Validate input
  if (!childName || !phone || !password || !program) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Check if user already exists
    const userExist = await pool.query('SELECT * FROM students WHERE phone = $1', [phone]);
    if (userExist.rows.length > 0) {
      return res.status(400).json({ error: 'User already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new student into the database
    const result = await pool.query(
      'INSERT INTO students (child_name, phone, password, program) VALUES ($1, $2, $3, $4) RETURNING *',
      [childName, phone, hashedPassword, program]
    );

    // Respond with success message and student data
    res.status(201).json({ message: 'Student registered successfully', student: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
});

// Login Endpoint
app.post('/api/login', async (req, res) => {
  const { phone, password } = req.body;

  // Validate input
  if (!phone || !password) {
    return res.status(400).json({ error: 'Phone and password are required' });
  }

  try {
    // Check if user exists
    const user = await pool.query('SELECT * FROM students WHERE phone = $1', [phone]);

    if (user.rows.length === 0) {
      return res.status(400).json({ error: 'User not found' });
    }

    // Verify password
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Respond with success message and student data
    res.status(200).json({ message: 'Login successful', student: user.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
});

// Serve the frontend for any route that isn't an API call
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
