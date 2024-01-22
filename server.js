const express = require("express");
const { Pool } = require("pg");
const authRoutes = require("./routes/authRoutes");
require('dotenv').config();

// const ticketRoutes = require("./routes/ticketRoutes");
// ... other imports

const app = express();

// Create a pool for PostgreSQL connections
const pool = new Pool({
  user: "your_username",
  host: "localhost",
  database: "your_database",
  password: "your_password",
  port: 5432, // PostgreSQL default port
  // other options...
});

// Use middleware to parse JSON requests
app.use(express.json());

// Define routes
// app.use("/auth", authRoutes); // Routes can access the pool directly
// app.use("/tickets", ticketRoutes); Routes can access the pool directly
// ... use other route files

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
