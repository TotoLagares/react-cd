
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArXT-H4MZV79J3kBtyHztjW5mLd_U7_Qk",
  authDomain: "proyecto-coder-cbe14.firebaseapp.com",
  projectId: "proyecto-coder-cbe14",
  storageBucket: "proyecto-coder-cbe14.appspot.com",
  messagingSenderId:  "253583523422",
  appId: "1:253583523422:web:2d25fec31b442c5bc2fecf",
  measurementId: "G-W3PVZDBRG8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

console.log("Firebase inicializado",firebaseConfig );

export default db;