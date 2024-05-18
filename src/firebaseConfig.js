
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTZc64pemGS8zjrUNCNkcmQGKCLTU4EBk",
  authDomain: "portfolioprueba-e5674.firebaseapp.com",
  projectId: "portfolioprueba-e5674",
  storageBucket: "portfolioprueba-e5674.appspot.com",
  messagingSenderId: "614551216590",
  appId: "1:614551216590:web:59732e113688c4645c0b9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore( app )