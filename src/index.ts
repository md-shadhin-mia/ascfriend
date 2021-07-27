import "./app";
import firebase from "firebase/app";
let firebaseConfig = {
    apiKey: "AIzaSyAOouCnFO_smNVi8riyPsR2nxbAkB8Jqsw",
    authDomain: "acsfriend.firebaseapp.com",
    databaseURL: "https://acsfriend.firebaseio.com",
    projectId: "acsfriend",
    storageBucket: "acsfriend.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
    measurementId: "G-MEASUREMENT_ID",
  };
firebase.initializeApp(firebaseConfig);