// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC ZKihf9-zaBmfMsyP3gub8y3okRYiSCHw",
  authDomain: "linkedin-clone-e6ee6.firebaseapp.com",
  projectId: "linkedin-clone-e6ee6",
  storageBucket: "linkedin-clone-e6ee6.appspot.com",
  messagingSenderId: "742360677633",
  appId: "1:742360677633:web:f1e1c0ea676cc264f1af00",
  measurementId: "G-7HZMB2WVNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Analytics
export const auth = getAuth(app);  // Export 'auth' to use in your project
const analytics = getAnalytics(app);
