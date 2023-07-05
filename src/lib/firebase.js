import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAUTJOsGXKcFldE9YpIA0GzEOMvYDR1Ow8",
  authDomain: "codexhimanshu-01.firebaseapp.com",
  projectId: "codexhimanshu-01",
  storageBucket: "codexhimanshu-01.appspot.com",
  messagingSenderId: "151419451937",
  appId: "1:151419451937:web:2d6c6ff69be9ec1756c160",
  measurementId: "G-DJ972JLVDE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firestore
const database = getFirestore(app);

export { database };
