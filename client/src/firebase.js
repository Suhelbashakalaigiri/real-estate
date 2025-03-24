// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-7a481.firebaseapp.com",
  projectId: "real-estate-7a481",
  storageBucket: "real-estate-7a481.firebasestorage.app",
  messagingSenderId: "182763628048",
  appId: "1:182763628048:web:2bb69403455e7f855e4c95"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);