const express = require("express");
const app = express();
const dotenv = require('dotenv');
const notes = require("./sampleData")



app.use(express.json()); // to accept json data

//test route
app.get("/", (req, res) => {
  res.send("API is running");
});
app.get("/api/notes", (req, res) => {
  res.json(notes);
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running at port ${port}`));