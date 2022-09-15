import firebase from "firebase";
// import configure from "../config";

var firebaseApp = firebase.initializeApp({
    // apiKey: configure.apiKey,
    // authDomain: configure.authDomain,
    // projectId: configure.projectId,
    // storageBucket: configure.storageBucket,
    // messagingSenderId: configure.messagingSenderId,
    // appId: configure.appId
    apiKey: "AIzaSyDKNxBx6veiww_bhCyuR31z0qakZz3AIBc",
    authDomain: "react-contact-form-85f45.firebaseapp.com",
    projectId: "react-contact-form-85f45",
    storageBucket: "react-contact-form-85f45.appspot.com",
    messagingSenderId: "1085493123304",
    appId: "1:1085493123304:web:3cb28e46dc78abf46cd15d"
});

var db = firebaseApp.firestore();

export { db };