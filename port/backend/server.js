const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 5000;

app.use(cors()); // Allow frontend to connect
app.use(express.json()); // Parse JSON from form

app.get('/', (req, res) => {
  res.send('Backend is live!');
});

app.post('/contact', (req, res) => {
  const { name, message } = req.body;
  const data = `${new Date().toISOString()} - ${name}: ${message}\n`;
  fs.appendFile('messages.txt', data, (err) => {
    if (err) {
      res.status(500).json({ success: false, message: 'Error saving message' });
    } else {
      res.json({ success: true, message: 'Message saved!' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});