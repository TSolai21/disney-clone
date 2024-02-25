// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw2mDqx03Srj_Cndmz_Vtehigs2rG9ipc",
  authDomain: "disneyplus-clone-9ac52.firebaseapp.com",
  projectId: "disneyplus-clone-9ac52",
  storageBucket: "disneyplus-clone-9ac52.appspot.com",
  messagingSenderId: "706883198112",
  appId: "1:706883198112:web:6377f142798dc9d3e73dc5",
  measurementId: "G-NVS7P9QTNL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
// const db = app.firestore();

const provider = new GoogleAuthProvider();

// const storage = firebase.storage();
// export default db;
export { auth, provider };
