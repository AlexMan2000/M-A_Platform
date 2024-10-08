// Import Express
const express = require('express');
const app = express();

// Define the port the server will listen on
const PORT = 3000;

// Parse incoming JSON requests
app.use(express.json());

// Test endpoint (GET request)
app.get('/', (req, res) => {
  res.send('Hello, this is your server!');
});

// Example POST request
app.post('/test-post', (req, res) => {
  const data = req.body;
  res.send(`Received data: ${JSON.stringify(data)}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
