// Import the functions you need from the SDKs you need
import { firebase } from "@firebase/app";
import "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqUNVmoP0-89ktgopPJd3QfgSplpfeGY0",
  authDomain: "letswatch-8c1be.firebaseapp.com",
  projectId: "letswatch-8c1be",
  storageBucket: "letswatch-8c1be.appspot.com",
  messagingSenderId: "373172715252",
  appId: "1:373172715252:web:d1a7e8ec79fecdabb9a8a1",
  measurementId: "G-YXQRQCM9JT",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

//auth
const auth = firebase.auth();

export { auth };
