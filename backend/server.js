import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './db.js'; // Import the database connection

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API endpoint to handle order submission
app.post('/api/order', (req, res) => {
    const { name, email, address, phone } = req.body;
  
    const sql = 'INSERT INTO orders (name, email, address, phone) VALUES (?, ?, ?, ?)';
  
    db.query(sql, [name, email, address, phone], (error, results) => {
      if (error) {
        console.error("Error inserting data:", error); // Log the entire error object
        return res.status(500).json({ status: 'error', message: error.message });
      }
      res.json({ status: 'success', message: 'Order placed successfully' });
    });
  });
  

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
