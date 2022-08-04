// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALDBv-298bNAfN6idoIwN7RXcAd1RBVY0",
  authDomain: "klasbol-app.firebaseapp.com",
  projectId: "klasbol-app",
  storageBucket: "klasbol-app.appspot.com",
  messagingSenderId: "185198943534",
  appId: "1:185198943534:web:a566cbf61a9829f491eebf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
