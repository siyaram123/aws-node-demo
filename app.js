const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Home Page
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to AWS Jenkins Demo1</h1>
    <a href="/about">About Me</a><br>
    <a href="/contact">Contact Details</a><br>
    <a href="/api/users"> This is My Users API</a>
  `);
});

// About Page
app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1><p>Node.js Application deployed using AWS CodeDeploy.</p>");
});

// Contact Page
app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page</h1><p>contact@example.com</p>");
});

// API
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Siyaram" },
    { id: 2, name: "John" },
    { id: 3, name: "David" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});