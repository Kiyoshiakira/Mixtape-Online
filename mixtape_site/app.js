// app.js

// Your web app's Firebase configuration (Paste your *actual* config here)
const firebaseConfig = {
  apiKey: "AIzaSyBr3GHLtueuC_cs9_Vrzv5E1SeLk3Y0eUU",
  authDomain: "my--vhs-mixtape.firebaseapp.com",
  projectId: "my--vhs-mixtape",
  storageBucket: "my--vhs-mixtape.firebasestorage.app",
  messagingSenderId: "484405101513",
  appId: "1:484405101513:web:e0eed3c32c3a04cf079e18",
  measurementId: "G-2WX3D1K8YV"
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
