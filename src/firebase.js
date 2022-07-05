
import { initializeApp} from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC0mzTzQEp9wfwIIAA321h-RdEnBn5OhPY",
  authDomain: "ecommerce-848d8.firebaseapp.com",
  databaseURL: "https://ecommerce-848d8-default-rtdb.firebaseio.com",
  projectId: "ecommerce-848d8",
  storageBucket: "ecommerce-848d8.appspot.com",
  messagingSenderId: "344065546983",
  appId: "1:344065546983:web:65f40b349e058a56a16042",
  measurementId: "G-YCCYJ7M5M2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

