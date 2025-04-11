// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC9nGlb5oZEJLhAPodFYQQi6RzMv-JOMk",
  authDomain: "mercedeselectrician-9d865.firebaseapp.com",
  databaseURL: "https://mercedeselectrician-9d865-default-rtdb.firebaseio.com",
  projectId: "mercedeselectrician-9d865",
  storageBucket: "mercedeselectrician-9d865.firebasestorage.app",
  messagingSenderId: "21906316990",
  appId: "1:21906316990:web:452d2e67e6f4adfa1dc8ef",
  measurementId: "G-8JHWE8BL94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);