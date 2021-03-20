import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAklRtPE8I3jdLDZIC1bX_r3Ma-LK5GXpk",
  authDomain: "clone-bc279.firebaseapp.com",
  projectId: "clone-bc279",
  storageBucket: "clone-bc279.appspot.com",
  messagingSenderId: "169460327612",
  appId: "1:169460327612:web:47fa61f935e74a0f399cb9",
  measurementId: "G-DYEDV46CYJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
