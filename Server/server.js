// server.js
const express = require('express');
const app = express();

let visitorCount = 0;

// Middleware to track visitors
app.use((req, res, next) => {
  visitorCount++;
  next();
});

app.get('/visitor-count', (req, res) => {
  res.json({ count: visitorCount });
});

app.listen(3001, () => {
  console.log('Server running on port 3000');
});
