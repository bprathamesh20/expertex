// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_U-zwnDpEFxTc1r1vl1ft_1ZuRKQb3WU",
  authDomain: "expertex-5468e.firebaseapp.com",
  projectId: "expertex-5468e",
  storageBucket: "expertex-5468e.appspot.com",
  messagingSenderId: "794476938697",
  appId: "1:794476938697:web:9bd4104cddc794fd121418",
  measurementId: "G-1YY6X0YJXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)


export{auth, app, firestore};