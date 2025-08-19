// app.js

// Your web app's Firebase configuration (Paste your *actual* config here)
const firebaseConfig = {
  apiKey: "AIzaSyC...", // YOURS!
  authDomain: "my--vhs-mixtape.firebaseapp.com", // YOURS!
  projectId: "my--vhs-mixtape", // YOURS!
  storageBucket: "my--vhs-mixtape.appspot.com", // YOURS!
  messagingSenderId: "...", // YOURS!
  appId: "1:...", // YOURS!
  measurementId: "G-..." // YOURS!
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig); // Using the compat version from CDN

// Optional: You can get references to Firebase services now
// const auth = firebase.auth();
// const db = firebase.firestore();

// Confirm Firebase is initialized
console.log("Firebase initialized for My VHS Mixtape!");

// You can add more JavaScript logic here later, e.g.,
// document.addEventListener('DOMContentLoaded', () => {
//   const someElement = document.getElementById('someId');
//   if (someElement) {
//     someElement.textContent = "Firebase is active!";
//   }
// });
