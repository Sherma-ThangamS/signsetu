const Words = require("../models/words.model");

const getAllWords = async (req, res) => {
  try {
    const words = await Words.find();
    res.status(200).json(words);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addWord = async (req, res) => {
  try {
    const word = await Words.create(req.body);
    res.status(201).json(word);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const queryWords = async (req, res) => {
  const search = req.params.query;
  const words = await Words.find({
    $or: [
      { word: { $regex: search, $options: "i" } },
      { definition: { $regex: search, $options: "i" } },
    ],
  });
  res.json(words);
};

const modifyWord = async (req, res) => {
  try {
    const { id } = req.query;
    const word = await Words.findByIdAndUpdate(id, req.body);
    const updatedWord = await Words.findById(id);
    res.status(200).json(updatedWord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteWord = async (req, res) => {
  try {
    const { id } = req.query;
    const word = await Words.findByIdAndDelete(id);
    if (!word) return res.status(404).send("Product not found");
    res.status(200).json(word);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllWords, addWord, modifyWord, deleteWord, queryWords };
