// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {


  apiKey:"AIzaSyALfrVoD3NvFFE8JGix2nJnGjBP2lCGCRE",
  authDomain:"full-stack-e1762.firebaseapp.com",
  projectId: "process.env.APP_projectId",
  storageBucket: "process.env.API_storageBucket",
  messagingSenderId:"660573172140",
  appId: "1:660573172140:web:1e41324c22b657ba8b4a09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;