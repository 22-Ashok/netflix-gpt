// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2GnLtoqjGmHboVCBs1AsPGfmbHGGUlGQ",
  authDomain: "netflix-gpt-cc02c.firebaseapp.com",
  projectId: "netflix-gpt-cc02c",
  storageBucket: "netflix-gpt-cc02c.appspot.com",
  messagingSenderId: "560676903576",
  appId: "1:560676903576:web:0ad7d971db27363732ceed",
  measurementId: "G-8XZP6C2YDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();