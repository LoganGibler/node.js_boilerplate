const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


// sample query: 
// exports.authMe = async (req, res) => {
//     try {
//       const result = await pool.query('SELECT * FROM users');
//       const users = result.rows;
  
//       res.status(200).json({ message: "Authed user", users });
//     } catch (error) {
//       console.error('Error fetching users:', error.message);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   };


exports.authMe = async (req, res) => {
  res.status(200).json({ message: "Authed user" });
};
