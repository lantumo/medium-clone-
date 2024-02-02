// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuyeKRlgskzCA3n_YYV-GKTLagp6qOHpo",
  authDomain: "medium-clone-fd763.firebaseapp.com",
  projectId: "medium-clone-fd763",
  storageBucket: "medium-clone-fd763.appspot.com",
  messagingSenderId: "494171493750",
  appId: "1:494171493750:web:a75ac2547fbf3ba1c91657",
  measurementId: "G-R2D2SFP61K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(app)
export const storage = getStorage()
export const db = getFirestore(app)