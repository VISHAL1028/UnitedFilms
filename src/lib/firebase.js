// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdNTipBC96p-nSEBZKBF_sJneHKbn_UNc",
  authDomain: "unitedfilms-dd8b1.firebaseapp.com",
  projectId: "unitedfilms-dd8b1",
  storageBucket: "unitedfilms-dd8b1.firebasestorage.app",
  messagingSenderId: "175365539405",
  appId: "1:175365539405:web:e0d263c69c6c7b81637e04",
  measurementId: "G-ZP1XXLG96K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);