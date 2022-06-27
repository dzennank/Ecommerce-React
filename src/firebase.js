// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0mzTzQEp9wfwIIAA321h-RdEnBn5OhPY",
  authDomain: "ecommerce-848d8.firebaseapp.com",
  projectId: "ecommerce-848d8",
  storageBucket: "ecommerce-848d8.appspot.com",
  messagingSenderId: "344065546983",
  appId: "1:344065546983:web:65f40b349e058a56a16042",
  measurementId: "G-YCCYJ7M5M2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);