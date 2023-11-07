import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAaUJH3Dnj1XkGpuVwbu6m39ir8AWiLD8",
  authDomain: "course-listing-9f4b4.firebaseapp.com",
  projectId: "course-listing-9f4b4",
  storageBucket: "course-listing-9f4b4.appspot.com",
  messagingSenderId: "552121706738",
  appId: "1:552121706738:web:897d19a4c99608c54f086b",
  measurementId: "G-SX2JMH2G43",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); //allows access the db from any other file and to create a firestore database
const auth = firebase.auth(); //for authentication purposes
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
