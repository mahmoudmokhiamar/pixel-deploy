const express = require("express");
const path = require("path");
const app = express();

//hello
// Set the smdklasn

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Routes to serve HTML files from the views directory
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home-2.html"));
});

app.get("/charge-code", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "charge-code.html"));
});

app.get("/charged-code2", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "charged-code2.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

app.get("/course-details", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "course-details.html"));
});

app.get("/course", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "course.html"));
});

app.get("/exam-answers", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "exam-answers.html"));
});

app.get("/exam-page", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "exam-page.html"));
});

app.get("/exams-done", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "exams-done.html"));
});

app.get("/lessonpage", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "lessonpage.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.get("/profile", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "profile.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "register.html"));
});

app.get("/team-details", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "team-details.html"));
});

app.get("/test-details", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "test-detaiuls.html"));
});

app.get("/test-pdf", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "test-pdf.html"));
});

app.get("/videos-youtube", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "videos-youtube.html"));
});

app.get("/videos", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "videos.html"));
});

// Start the server on the provided port or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
