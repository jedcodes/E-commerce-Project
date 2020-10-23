import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7wK5SszYtYBRtafT1fWqR3sKjNTEHSU0",
  authDomain: "drippy-f799f.firebaseapp.com",
  databaseURL: "https://drippy-f799f.firebaseio.com",
  projectId: "drippy-f799f",
  storageBucket: "drippy-f799f.appspot.com",
  messagingSenderId: "493295868198",
  appId: "1:493295868198:web:db64233bba118ee04649e7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
