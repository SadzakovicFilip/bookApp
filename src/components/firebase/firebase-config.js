import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCmXS3KRAioWsBr5W_V_girSBgFol91ZPE",
    authDomain: "booksihaveread.firebaseapp.com",
    projectId: "booksihaveread",
    storageBucket: "booksihaveread.appspot.com",
    messagingSenderId: "816221324732",
    appId: "1:816221324732:web:adfe332d079876132897b9"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)