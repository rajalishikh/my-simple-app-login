// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeSE2znrbU93hmaTojQMsP0EpCdhEJL3o",
  authDomain: "simple-email-login-f098c.firebaseapp.com",
  projectId: "simple-email-login-f098c",
  storageBucket: "simple-email-login-f098c.firebasestorage.app",
  messagingSenderId: "1063469700414",
  appId: "1:1063469700414:web:60b5477e3f5b895f56486f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth };
