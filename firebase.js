// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

// Твої налаштування Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC1uu_4r8lnOiWlpd72pGR8vR58GaLARQg",
  authDomain: "stosite-f40cc.firebaseapp.com",
  projectId: "stosite-f40cc",
  storageBucket: "stosite-f40cc.firebasestorage.app",
  messagingSenderId: "432310549320",
  appId: "1:432310549320:web:b3ea353e03ac555ec9517d",
  measurementId: "G-6KYDYB6W26"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Ініціалізація Firebase Authentication

export { auth };
