// bot.js
const axios = require('axios');

// Array of URLs you want to keep alive
const urls = [
  'https://example.com', // Replace with the first URL
  'https://another-example.com' // Replace with the second URL
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

// Run the keepAlive function periodically (e.g., every 5 minutes)
setInterval(keepAlive, 5 * 60 * 1000); // 5 minutes in milliseconds

// Initial call to start the bot immediately
keepAlive();
