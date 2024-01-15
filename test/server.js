const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Handle POST requests
app.post("/your-post-endpoint", (req, res) => {
  const postData = req.body;
  console.log("Received POST data:", postData);
  res.send("POST request received successfully");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
