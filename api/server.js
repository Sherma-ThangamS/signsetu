const express = require("express");
const words = require("./route/words");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/words", words);

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("database connected");
    app.listen(5000, () => {
      console.log("server started 5000");
    });
  })
  .catch(() => console.log("Connection failed"));
