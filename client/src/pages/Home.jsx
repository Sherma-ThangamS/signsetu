import axios from "axios";
import React, { useEffect, useState } from "react";
import AddWordForm from "../components/AddWordForm";
import WordCard from "../components/WordCard";

const Home = () => {
  const [words, setWords] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const url = "http://localhost:5000/api/words";

  const fetchWords = async () => {
    try {
      const res = await axios.get(`${url}`);
      setWords(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchSearchedWords = async (query) => {
    if (query.trim() === "") {
      fetchWords();
    } else {
      const res = await axios.get(`${url}/${query}`);
      setWords(res.data);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    fetchSearchedWords(value);
  };

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <div>
      <div className="flex justify-center gap-2 mb-4">
        <input
          type="text"
          className="border px-4 py-2 rounded w-1/2"
          placeholder="Search a word..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <AddWordForm onSuccess={fetchWords} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {words.map((word) => (
          <WordCard key={word._id} word={word} onUpdate={fetchWords} />
        ))}
      </div>
    </div>
  );
};

export default Home;
