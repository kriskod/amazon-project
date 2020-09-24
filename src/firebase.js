import firebase from "firebase";

const firebaseConfig = {
  apiKey: "apikey",
  authDomain: "clone-project-6bbe2.firebaseapp.com",
  databaseURL: "https://clone-project-6bbe2.firebaseio.com",
  projectId: "clone-project-6bbe2",
  storageBucket: "clone-project-6bbe2.appspot.com",
  messagingSenderId: "858252694324",
  appId: "1:858252694324:web:dd486df6c3743e48788b61",
  measurementId: "G-71P62SQ2QJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
