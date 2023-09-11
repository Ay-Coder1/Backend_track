const express = require('express');
const app = express();

// Define a route that handles GET requests
app.get('/api', (req, res) => {
  // Parse query parameters
  const { slack_name, track } = req.query;

  // Get the current day of the week
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[new Date().getDay()];

  // Get the current UTC time with a +/-2 minute window
  const now = new Date();
  const utcTime = new Date(now.getTime() + (now.getTimezoneOffset() - 120) * 60000).toISOString();

  // Construct the JSON response
  const response = {
    slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track,
    github_file_url: "https://github.com/Ay-coder1/repo/blob/main/file_name.ext",
    github_repo_url: "https://github.com/Ay-coder1/repo",
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
