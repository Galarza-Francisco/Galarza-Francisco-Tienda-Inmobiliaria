// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm8w80lHhrkk6GD_uYsBF5MYMHtYSa__o",
  authDomain: "dltpropiedades-5ba44.firebaseapp.com",
  projectId: "dltpropiedades-5ba44",
  storageBucket: "dltpropiedades-5ba44.appspot.com",
  messagingSenderId: "425837578188",
  appId: "1:425837578188:web:27c2930133faffa2057f69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);