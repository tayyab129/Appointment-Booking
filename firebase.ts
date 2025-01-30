// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyBtedVvtYz1rpAz3ZyJvpm2KQT8e5XkJ3w",
  authDomain: "react-vite-914a1.firebaseapp.com",
  projectId: "react-vite-914a1",
  storageBucket: "react-vite-914a1.firebasestorage.app",
  messagingSenderId: "361195326549",
  appId: "1:361195326549:web:4361f549ec0a41bd4bd8dc",
  measurementId: "G-NL5TWNBCRW"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
