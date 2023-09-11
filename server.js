const express = require('express');
const app = express();

// Define a route that handles GET requests
app.get('/api', (req, res) => {
  // Parse query parameters
  const { Babarinde_Ayomide_Emmanuel, track } = req.query;

  // Get the current day of the week
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[new Date().getDay()];

  // Get the current UTC time with a +/-2 minute window
  const now = new Date();
  const utcTime = new Date(now.getTime() + (now.getTimezoneOffset() - 120) * 60000).toISOString();

  // Construct the JSON response
  const response = {
    Babarinde_Ayomide_Emmanuel,
    current_day: currentDay,
    utc_time: utcTime,
    track,
    github_file_url:
      "https://github.com/Ay-coder1/Backend_track/blob/main/server.js",
    github_repo_url: "https://github.com/Ay-coder1/Backend_track",
    status_code: 200,
  };

  // Send the JSON response
  res.json(response);
});

// Start the Express server
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
