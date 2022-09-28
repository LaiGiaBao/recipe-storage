import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqkUBjQQR0khD-kmFZT3ORVBUlb7oNMFQ",
  authDomain: "lgb-cooking-site.firebaseapp.com",
  projectId: "lgb-cooking-site",
  storageBucket: "lgb-cooking-site.appspot.com",
  messagingSenderId: "580689017533",
  appId: "1:580689017533:web:8d3180fa7d624a80f7d5d4",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
