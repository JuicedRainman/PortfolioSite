const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Skill = require("./models/skill");
const Project = require("./models/project");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/db1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => console.log("MongoDB verbonden!"));

// API SKILLS
app.get("/skills", async (req, res) => {
  try {
    const skills = await Skill.find(); // Haal alle records op
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: "Fout bij ophalen van skills", error });
  }
});



// API projects

app.get('/projects', async (req, res) => {
  try {
    console.log("projects");
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Fout bij ophalen van projecten", error});
  }
});

app.listen(5000, () => console.log("Server draait op poort 5000"));