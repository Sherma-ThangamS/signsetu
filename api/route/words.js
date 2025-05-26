const express = require("express");
const {
  getAllWords,
  addWord,
  modifyWord,
  deleteWord,
  queryWords,
} = require("../controller/words");

const router = express.Router();

router
  .get("/", getAllWords)
  .post("/", addWord)
  .put("/", modifyWord)
  .delete("/", deleteWord)
  .get("/:query", queryWords);

module.exports = router;
