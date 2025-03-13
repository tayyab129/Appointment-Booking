import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtedVvtYz1rpAz3ZyJvpm2KQT8e5XkJ3w",
  authDomain: "react-vite-914a1.firebaseapp.com",
  projectId: "react-vite-914a1",
  storageBucket: "react-vite-914a1.firebasestorage.app",
  messagingSenderId: "361195326549",
  appId: "1:361195326549:web:fa19f7f004ef82a44bd8dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
