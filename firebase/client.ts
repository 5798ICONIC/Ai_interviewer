// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
 import { getAuth } from 'firebase/auth';
 import { getFirestore } from 'firebase/firestore';
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnzKfsaf_WlxlKiliMMr9RAwpfW0YvBXU",
  authDomain: "techview-1ed69.firebaseapp.com",
  projectId: "techview-1ed69",
  storageBucket: "techview-1ed69.firebasestorage.app",
  messagingSenderId: "490061534869",
  appId: "1:490061534869:web:97706245724cbd7b656d9c",
  measurementId: "G-RWV8Y9KCN2"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
 
 export const auth = getAuth(app);
 export const db = getFirestore(app)