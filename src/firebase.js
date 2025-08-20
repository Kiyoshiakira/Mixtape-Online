const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { getAuth, GoogleAuthProvider } = require('firebase/auth');

// Your Firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyBr3GHLtueuC_cs9_Vrzv5E1SeLk3Y0eUU",
  authDomain: "my--vhs-mixtape.firebaseapp.com",
  projectId: "my--vhs-mixtape",
  storageBucket: "my--vhs-mixtape.firebasestorage.app",
  messagingSenderId: "484405101513",
  appId: "1:484405101513:web:bc031145ace30815079e18",
  measurementId: "G-JZ3HK0HHR3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

module.exports = { db, auth, app, GoogleAuthProvider };