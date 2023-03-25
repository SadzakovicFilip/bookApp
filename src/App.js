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
import February from "./components/Months/February"
import March from "./components/Months/March"
import April from "./components/Months/April"
import May from "./components/Months/May"
import Jun from "./components/Months/Jun"
import July from "./components/Months/July"
import August from "./components/Months/August"
import September from "./components/Months/September"
import October from "./components/Months/October"
import November from "./components/Months/November"
import December from "./components/Months/December"

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
  });
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  console.log(currentMonth+1)



  return (
    <div className="App">
      <BrowserRouter>
        <Inputs
          book={book}
          setBook={setBook}
          bookList={bookList}
          setBookList={setBookList}
        />
        <Navigation/>
      <Routes>
        <Route path="/" element={ <BookList setBookList={setBookList} bookList={bookList} />}></Route>
        <Route path="/jan" element={<JanuaryList/>}></Route>
        <Route path="/feb" element={<February/>}></Route>
        <Route path="/mar" element={<March/>}></Route>
        <Route path="/apr" element={<April/>}></Route>
        <Route path="/may" element={<May/>}></Route>
        <Route path="/jun" element={<Jun/>}></Route>
        <Route path="/jul" element={<July/>}></Route>
        <Route path="/aug" element={<August/>}></Route>
        <Route path="/sep" element={<September/>}></Route>
        <Route path="/oct" element={<October/>}></Route>
        <Route path="/nov" element={<November/>}></Route>
        <Route path="/dec" element={<December/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
