// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa2WiLNgWP0YvbpR1U222OPvUVPje4O7k",
  authDomain: "netflixgpt-c5ccd.firebaseapp.com",
  projectId: "netflixgpt-c5ccd",
  storageBucket: "netflixgpt-c5ccd.appspot.com",
  messagingSenderId: "1007833895098",
  appId: "1:1007833895098:web:f0b8344b4f93c2e7d6b283",
  measurementId: "G-R81PN19HQY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
