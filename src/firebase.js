import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBa-si8LAvJcNdnRhWkJlSRLpTroyYjkZ0",
  authDomain: "react-crud-ama-zon.firebaseapp.com",
  databaseURL: "https://react-crud-ama-zon.firebaseio.com",
  projectId: "react-crud-ama-zon",
  storageBucket: "react-crud-ama-zon.appspot.com",
  messagingSenderId: "583141807380",
  appId: "1:583141807380:web:55d237ad9e53261c40de01",
  measurementId: "G-3GGVXZSKFB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };