// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZTnxPcqDAItEazGQi-yS_OMVwy3LO_Po",
  authDomain: "clone-a7601.firebaseapp.com",
  projectId: "clone-a7601",
  storageBucket: "clone-a7601.appspot.com",
  messagingSenderId: "43345979383",
  appId: "1:43345979383:web:25cdfa7bb4ebfd21c2b0f2",
  measurementId: "G-EBK7SMK0L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);