const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Placeholder route for contact form
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  // In a real application, you would save this to MongoDB here
  console.log('Received contact request:', { name, email, message });
  res.status(200).json({ success: true, message: 'Message received' });
});

app.get('/', (req, res) => {
  res.send('MERN Landing Page API is running');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
