import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA2jobRTodCibY7kuVx2eOLUO9nN8CswOI",
  authDomain: "cwrn-db-d9dfd.firebaseapp.com",
  projectId: "cwrn-db-d9dfd",
  storageBucket: "cwrn-db-d9dfd.appspot.com",
  messagingSenderId: "60814708442",
  appId: "1:60814708442:web:ffb5bff1acd152e3135fe3",
  measurementId: "G-2KT9VGL2QC",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
