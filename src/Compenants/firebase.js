import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDKNxBx6veiww_bhCyuR31z0qakZz3AIBc",
  authDomain: "react-contact-form-85f45.firebaseapp.com",
  projectId: "react-contact-form-85f45",
  storageBucket: "react-contact-form-85f45.appspot.com",
  messagingSenderId: "1085493123304",
  appId: "1:1085493123304:web:3cb28e46dc78abf46cd15d"
};

// Initialize Firebase
firebase.initializeApp({firebaseConfig})

const auth = firebase.auth()
const database = firebase.database()

export {database}
export {auth}