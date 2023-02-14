// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS1EsXngdBgSWnS6NtiBx6jJ6epzAfCB8",
  authDomain: "forested-chess.firebaseapp.com",
  projectId: "forested-chess",
  storageBucket: "forested-chess.appspot.com",
  messagingSenderId: "400227513312",
  appId: "1:400227513312:web:92d8753b3ab2ade548f185",
  measurementId: "G-6DM51P55S0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



function newGame(){
    reset();
}

newGame();