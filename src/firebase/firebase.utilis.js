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

export const createUserProfileDocument = async (userAuth, moreData) => {
  // do i get a user auth object back ?
  if (!userAuth) return;
  // create the user ref by querry the firestore for the user uid
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // check if the snap shot exits in the data base
  const snapShot = await userRef.get();
  // create a new user
  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const { id } = snapShot;
    const createdAt = new Date();

    try {
      await userRef.set({
        id,
        displayName,
        email,
        createdAt,
        photoURL,
        ...moreData,
      });
    } catch (error) {
      console.log("error creating  user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
// firebase.analytics();

export const auth = firebase.auth();
// console.log("this is auth", auth);
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  firebase.auth().signInWithPopup(provider);
};

export default firebase;
