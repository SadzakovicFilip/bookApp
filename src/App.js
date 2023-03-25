import logo from "./logo.svg";
import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Inputs from "./components/Inputs";
import BookList from "./components/BookList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { db } from "./components/firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";

import Navigation from "./components/Navigation/Navigation";

import JanuaryList from "./components/Months/JanuaryList";
import February from "./components/Months/February";
import March from "./components/Months/March";
import April from "./components/Months/April";
import May from "./components/Months/May";
import Jun from "./components/Months/Jun";
import July from "./components/Months/July";
import August from "./components/Months/August";
import September from "./components/Months/September";
import October from "./components/Months/October";
import November from "./components/Months/November";
import December from "./components/Months/December";

const currentDate = new Date();
export const currentMonth = currentDate.getMonth() + 1;
function App() {
  const booksCollectionRef = collection(db, "allBooks");

  useEffect(() => {
    const getAllBooks = async () => {
      const data = await getDocs(booksCollectionRef);
      setBookList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAllBooks();
  }, []);
  

  const [bookList, setBookList] = useState([]);
  const [book, setBook] = useState({
    author: "",
    title: "",
    cover: "",
    pages: ``,
    month: currentMonth,
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Inputs
          book={book}
          setBook={setBook}
          bookList={bookList}
          setBookList={setBookList}
        />
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={<BookList setBookList={setBookList} bookList={bookList} />}
          ></Route>
          <Route
            path="/jan"
            element={<JanuaryList bookList={bookList} />}
          ></Route>
          <Route path="/feb" element={<February bookList={bookList} />}></Route>
          <Route
            path="/mar"
            element={<March bookList={bookList} setBookList={setBookList} />}
          ></Route>
          <Route path="/apr" element={<April bookList={bookList} />}></Route>
          <Route path="/may" element={<May bookList={bookList} />}></Route>
          <Route path="/jun" element={<Jun bookList={bookList} />}></Route>
          <Route path="/jul" element={<July bookList={bookList} />}></Route>
          <Route path="/aug" element={<August bookList={bookList} />}></Route>
          <Route
            path="/sep"
            element={<September bookList={bookList} />}
          ></Route>
          <Route path="/oct" element={<October bookList={bookList} />}></Route>
          <Route path="/nov" element={<November bookList={bookList} />}></Route>
          <Route path="/dec" element={<December bookList={bookList} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
