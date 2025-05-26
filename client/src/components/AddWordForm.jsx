import axios from "axios";
import React, { useState } from "react";

const AddWordForm = ({ onSuccess }) => {
  const [form, setForm] = useState({
    word: "",
    definition: "",
    imageUrl: "",
    videoUrl: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      await axios.post("http://localhost:5000/api/words", form);
      setForm({ word: "", definition: "", imageUrl: "", videoUrl: "" });
      onSuccess(); // refresh words
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow max-w-2xl mx-auto mb-4"
    >
      <h2 className="text-2xl font-semibold mb-4">Add a New Word</h2>
      {["word", "definition", "imageUrl", "videoUrl"].map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={form[field]}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required={field !== "imageUrl" && field !== "videoUrl"}
        />
      ))}
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Word
      </button>
    </form>
  );
};

export default AddWordForm;
