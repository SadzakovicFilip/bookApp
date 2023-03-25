import React from 'react'
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { currentMonth } from "../../App";

function December({bookList,setBookList}) {
  const thisMonthBooks = bookList.filter(item=>item.month == 12)
  const handleDelete = async (id) => {
    const bookDoc = doc(db, "allBooks", id);
    {await deleteDoc(bookDoc); }
    setBookList((prev) => prev.filter((item) => item.id !== id));
  };

  const singleBook = thisMonthBooks?.map((item, key) => {
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
  const book=()=>{
    if(currentMonth<=12){
      if(thisMonthBooks.length>0){
        return singleBook
      } else {
       return <h1>This Month Has Yet To Come</h1>
      } 
    }else{
     return <h1>`This Month has passed and you haven't read anything`</h1>
    }
  }
  
return (
<div>
{book()}
</div>
  )
}

export default December