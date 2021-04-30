import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyAsPnG9VaOR1hc_agSfh3JCEYWrQO6uWCk",
  authDomain: "react-app-journal-95866.firebaseapp.com",
  projectId: "react-app-journal-95866",
  storageBucket: "react-app-journal-95866.appspot.com",
  messagingSenderId: "362842156791",
  appId: "1:362842156791:web:ae59566fe24ff3a564adf2"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(); 
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}