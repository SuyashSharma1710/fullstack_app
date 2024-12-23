const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes.js");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).send("Note not found");
  }
});

const PORT = process.env.PORT || 5173;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
