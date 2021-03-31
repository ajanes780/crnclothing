import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// require("firebase/auth");

const config = {
  apiKey: "AIzaSyAceECExfk6MD1R07M3RXMDUxl22ywD6BI",
  authDomain: "crn-dd.firebaseapp.com",
  projectId: "crn-dd",
  storageBucket: "crn-dd.appspot.com",
  messagingSenderId: "346915108414",
  appId: "1:346915108414:web:87d5de70ff9834b2da436f",
  measurementId: "G-YGGR9ZJRHB",
};

firebase.initializeApp(config);
// firebase.analytics();

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  firebase.auth().signInWithPopup(provider);
};

export default firebase;
