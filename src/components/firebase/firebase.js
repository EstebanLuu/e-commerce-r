// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB67N8j7B25jhndtJuAXXIKd7WMFOnXLqs",
  authDomain: "react-e-commerce-31545.firebaseapp.com",
  projectId: "react-e-commerce-31545",
  storageBucket: "react-e-commerce-31545.appspot.com",
  messagingSenderId: "752290938570",
  appId: "1:752290938570:web:456f77273b1525699d3e33",
};

// Initialize Firebase
export const App = initializeApp(firebaseConfig);
getAuth()