// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAcp4DAPsWDOAmu1sibVg93KZvyqTeqrKA",
  authDomain: "netflixgpt-8b20d.firebaseapp.com",
  projectId: "netflixgpt-8b20d",
  storageBucket: "netflixgpt-8b20d.appspot.com",
  messagingSenderId: "614709178419",
  appId: "1:614709178419:web:024efc0ec9f64b73823346",
  measurementId: "G-292GSSGBYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
  