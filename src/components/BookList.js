import React from "react";
import "../App.css";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase/firebase-config";

const BookList = ({ bookList, setBookList }) => {

  const handleDelete = async (id) => {
    const bookDoc = doc(db, "allBooks", id);
    {await deleteDoc(bookDoc); }
    setBookList((prev) => prev.filter((item) => item.id !== id));
  };

  const singleBook = bookList?.map((item, key) => {
    return (
      <div className="singleBook" key={key}>
        <h1>{key + 1}.</h1>
        <div className="title">
          Naslov:<b>{item.title}</b>
        </div>
        <div className="author">
          Autor:<b>{item.author}</b>
        </div>
        <div className="pages">
          Broj strana:<b>{item.pages}</b>
        </div>
        <img src={item.cover} alt="cover" className="img" />
        <button
          onClick={() => {
            handleDelete(item.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div>
      <h1>Broj procitanih knjiga : {bookList.length}</h1>
      {singleBook}
    </div>
  );
};

export default BookList;
