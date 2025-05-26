# 📘 Word Dictionary – MERN Stack App

A simple, mobile-responsive **Dictionary Application** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)** that allows users to add, search, view, edit, and delete words with their definitions, images, and videos.

---

## 🚀 Features

- 🔍 **Search Bar** – Find words and their definitions.
- 📝 **Add Word Form** – Add new words with:

  - Word
  - Definition
  - Image URL
  - Video URL

- 📚 **Word List Display** – Shows word, definition, image, and video.
- ✏️ **Edit/Delete** – Easily update or remove any word.
- 📱 **Mobile Responsive** – Fully responsive design for phones and tablets.

---

## 🛠 Tech Stack

- **Frontend**: React.js (with Axios for API calls)
- **Backend**: Node.js + Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Styling**: Tailwind CSS

---

## 📦 API Endpoints

### `GET /words`

- Returns a list of all words.

### `GET /words/:query`

- Searches for a word (case-insensitive, regex match on word or definition).

### `POST /words`

- Adds a new word.

```json
{
  "word": "Learn",
  "definition": "To gain knowledge",
  "imageUrl": "https://...",
  "videoUrl": "https://..."
}
```

### `PUT /words/:id`

- Updates an existing word by ID.

### `DELETE /words/:id`

- Deletes a word by ID.

---

## 🔧 Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/Sherma-ThangamS/signsetu.git
   cd singnsetu
   ```

2. **Install backend dependencies**

   ```bash
   cd api
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd client
   npm install
   ```

4. **Start MongoDB**
   Ensure MongoDB is running on your machine.

5. **Start both servers**

   - Backend (in `/api`)

     ```bash
     npm start
     ```

   - Frontend (in `/client`)

     ```bash
     npm start
     ```

---

## 📄 License

MIT License

---
