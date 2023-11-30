// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2yPcwDgnDlKJgawFdLTrQF5o8i-ov0yc",
  authDomain: "shopee-clone-8da99.firebaseapp.com",
  projectId: "shopee-clone-8da99",
  storageBucket: "shopee-clone-8da99.appspot.com",
  messagingSenderId: "124652139264",
  appId: "1:124652139264:web:07df2d9f8bd9f05cc339e5",
  measurementId: "G-STVB1GSN66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);