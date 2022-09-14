import firebase from "firebase";
import configure from "../config";

var firebaseApp = firebase.initializeApp({
    apiKey: configure.apiKey,
    authDomain: configure.authDomain,
    projectId: configure.projectId,
    storageBucket: configure.storageBucket,
    messagingSenderId: configure.messagingSenderId,
    appId: configure.appId
});

var db = firebaseApp.firestore();

export { db };