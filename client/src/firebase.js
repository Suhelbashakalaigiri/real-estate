// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-9b038.firebaseapp.com",
  projectId: "real-estate-9b038",
  storageBucket: "real-estate-9b038.firebasestorage.app",
  messagingSenderId: "401733088171",
  appId: "1:401733088171:web:471da8e26991f462d018ee"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);