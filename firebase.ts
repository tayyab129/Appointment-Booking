// Import the functions you need from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  

// Your Firebase configuration
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

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);  // Initialize Firestore
