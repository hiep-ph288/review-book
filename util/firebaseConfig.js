// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyAK_eTcwsvDPWcUGkcoYzLwZ7IC_WyImG4",
  authDomain: "review-book-87176.firebaseapp.com",
  projectId: "review-book-87176",
  storageBucket: "review-book-87176.appspot.com",
  messagingSenderId: "336518412499",
  appId: "1:336518412499:web:dc4b025d5d0613b7eabc26",
  measurementId: "G-KZZDZFYK76",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
