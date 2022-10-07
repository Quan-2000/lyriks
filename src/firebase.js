// Import the functions you need from the SDKs you need
import "firebase/compat/auth";
import firebase from "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxOm9D9k1axO7kGhQIoYy5K8c8ecLdrQk",
  authDomain: "lyriks-53e32.firebaseapp.com",
  projectId: "lyriks-53e32",
  storageBucket: "lyriks-53e32.appspot.com",
  messagingSenderId: "728698066073",
  appId: "1:728698066073:web:60f8c9920db68dd5df5408"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.auth();