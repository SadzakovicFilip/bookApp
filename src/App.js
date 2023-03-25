import logo from "./logo.svg";
import { useState,useEffect, useCallback } from "react";
import "./App.css";
import Inputs from "./components/Inputs";
import BookList from "./components/BookList";
import{db} from "./components/firebase/firebase-config"
import{collection, getDocs } from "firebase/firestore"

function App() {
  const booksCollectionRef=collection(db, "allBooks")

  useEffect(()=>{
    const getAllBooks=async()=>{
      const data = await getDocs(booksCollectionRef)
      setBookList(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
      console.log(bookList)
    }
    getAllBooks()
  },[])
  const[bookList,setBookList]=useState([])
  const [book, setBook] = useState({
    author: "",
    title: "",
    cover: "",
    pages: ``,
  });
  
  


  return <div className="App">
    <Inputs 
    book={book}
    setBook={setBook}
    bookList={bookList}
    setBookList={setBookList}/>
    <BookList
    setBookList={setBookList}
    bookList={bookList}/>

  </div>;
}

export default App;
