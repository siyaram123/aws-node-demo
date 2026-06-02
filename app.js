const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Home Page
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to AWS AutoDeploy Demo</h1>
    <a href="/about">About Me Siyaram</a><br>
    <a href="/contact">This is my new Contact</a><br>
    <a href="/api/users"> My Users API</a>
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