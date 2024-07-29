// bot.js
const axios = require('axios');

// Array of URLs you want to keep alive
const urls = [
  'https://my-flask-app-1pgq.onrender.com', // Replace with the first URL
  'https://bot-2-d2eh.onrender.com' // Replace with the second URL
];

// Function to ping all URLs
async function keepAlive() {
  for (const url of urls) {
    try {
      await axios.get(url);
      console.log(`Successfully pinged ${url} at ${new Date().toISOString()}`);
    } catch (error) {
      console.error(`Error pinging ${url}:`, error);
    }
  }
}
const axios = require('axios');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Array of URLs you want to keep alive
const urls = [
  'https://my-flask-app-1pgq.onrender.com', // Replace with the first URL
  'https://bot-2-d2eh.onrender.com' // Replace with the second URL
];

// Function to ping all URLs
async function keepAlive() {
  for (const url of urls) {
    try {
      await axios.get(url);
      console.log(`Successfully pinged ${url} at ${new Date().toISOString()}`);
    } catch (error) {
      console.error(`Error pinging ${url}:`, error);
    }
  }
}

// Endpoint to manually trigger the keep-alive function
app.get('/ping', async (req, res) => {
  await keepAlive();
  res.send('Pinged URLs!');
});

// Set up a basic endpoint for health checks
app.get('/', (req, res) => {
  res.send('Keep-alive bot is running!');
});

// Run the keepAlive function periodically (e.g., every 5 minutes)
setInterval(keepAlive, 5 * 60 * 1000); // 5 minutes in milliseconds

// Initial call to start the bot immediately
keepAlive();

// Start the Express server
app.listen(port, () => {
  console.log(`Keep-alive bot listening at http://localhost:${port}`);
});

// Run the keepAlive function periodically (e.g., every 5 minutes)
setInterval(keepAlive, 5 * 60 * 1000); // 5 minutes in milliseconds

// Initial call to start the bot immediately
keepAlive();
