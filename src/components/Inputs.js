import React from "react";
import "../App.css";

import { db } from "./firebase/firebase-config";
import { addDoc, collection } from "firebase/firestore";

const booksCollectionRef = collection(db, "allBooks");

function Inputs({ book, setBook, setBookList }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setBookList((prev) => [...prev, book]);
    setBook((prev) => ({ ...prev, title: `` }));
    setBook((prev) => ({ ...prev, author: `` }));
    setBook((prev) => ({ ...prev, cover: `` }));
    setBook((prev) => ({ ...prev, pages: `` }));

    const save = async () => {
      return await addDoc(booksCollectionRef, {
        title: book.title,
        author: book.author,
        cover: book.cover,
        pages: book.pages,
      });
    };
    save();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={book.title}
          name="title"
          onChange={(e) =>
            setBook((prev) => ({ ...prev, title: e.target.value }))
          }
          placeholder="book title"
        />
        <input
          type="text"
          value={book.author}
          name="author"
          onChange={(e) =>
            setBook((prev) => ({ ...prev, author: e.target.value }))
          }
          placeholder="author"
        />
        <input
          type="text"
          value={book.cover}
          name="cover"
          onChange={(e) =>
            setBook((prev) => ({ ...prev, cover: e.target.value }))
          }
          placeholder="book cover url"
        />
        <input
          type="number"
          value={book.pages}
          name="pages"
          onChange={(e) =>
            setBook((prev) => ({ ...prev, pages: e.target.value }))
          }
          placeholder="number of pages"
        />
        <button>add a book</button>
      </form>
    </div>
  );
}

export default Inputs;
