import axios from "axios";
import React, { useState } from "react";

const WordCard = ({ word, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ ...word });
  const url = "http://localhost:5000/api/words";

  const handleDelete = async () => {
    if (window.confirm(`Delete the word "${word.word}"?`)) {
      await axios.delete(`${url}?id=${word._id}`);
      onUpdate();
    }
  };

  const handleEdit = async () => {
    await axios.put(`${url}?id=${word._id}`, editForm);
    setIsEditing(false);
    onUpdate();
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      {isEditing ? (
        <div className="flex flex-col gap-2">
          <input
            name="word"
            value={editForm.word}
            onChange={(e) => setEditForm({ ...editForm, word: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            name="definition"
            value={editForm.definition}
            onChange={(e) =>
              setEditForm({ ...editForm, definition: e.target.value })
            }
            className="border p-2 rounded"
          />
          <input
            name="imageUrl"
            value={editForm.imageUrl}
            onChange={(e) =>
              setEditForm({ ...editForm, imageUrl: e.target.value })
            }
            className="border p-2 rounded"
          />
          <input
            name="videoUrl"
            value={editForm.videoUrl}
            onChange={(e) =>
              setEditForm({ ...editForm, videoUrl: e.target.value })
            }
            className="border p-2 rounded"
          />
          <div className="flex justify-end gap-2 mt-2">
            <button
              className="bg-gray-500 text-white px-3 py-1 rounded"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
            <button
              className="bg-blue-600 text-white px-3 py-1 rounded"
              onClick={handleEdit}
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-1">{word.word}</h2>
          <p className="mb-2">{word.definition}</p>
          {word.imageUrl && (
            <img
              src={word.imageUrl}
              alt={word.word}
              className="w-full h-40 object-cover rounded mb-2"
            />
          )}
          {word.videoUrl && (
            <video
              src={word.videoUrl}
              controls
              className="w-full rounded mb-2"
            />
          )}
          <div className="flex justify-end gap-2 mt-2">
            <button
              className="bg-yellow-500 text-white px-3 py-1 rounded"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="bg-red-600 text-white px-3 py-1 rounded"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default WordCard;
