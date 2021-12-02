const express = require("express");
const app = express();
const dotenv = require('dotenv');
const notes = require("./sampleData")




//test route
app.get("/", (req, res) => {
  res.send(notes);
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running at port ${port}`));