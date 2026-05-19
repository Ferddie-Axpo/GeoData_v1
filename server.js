const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

const data = {
  "america": [
    "New York", "Los Angeles", "Chicago", "Houston", "Miami",
    "Toronto", "Mexico City", "São Paulo", "Buenos Aires", "Lima"
  ],
  "Asia": [
    "Tokyo", "Beijing", "Shanghai", "Mumbai", "Delhi",
    "Seoul", "Bangkok", "Singapore", "Jakarta", "Kuala Lumpur"
  ],
  "Europe": [
    "London", "Paris", "Berlin", "Madrid", "Rome",
    "Amsterdam", "Vienna", "Stockholm", "Warsaw", "Prague"
  ]
};

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '.')));

app.get('/api/continents', (req, res) => {
  res.json(data);
});

// Serve index.html for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
