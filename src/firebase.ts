// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDERID,
  appId: import.meta.env.VITE_APPID,
  // measurementId: import.meta.env.VITE_MEASUREMENTID,

  // apiKey: "AIzaSyBRuIiMLvTBAhI1OJ1y5Te07E1rrNiO5_A",
  // authDomain: "mern-ecommerce-2024-4488c.firebaseapp.com",
  // projectId: "mern-ecommerce-2024-4488c",
  // storageBucket: "mern-ecommerce-2024-4488c.appspot.com",
  // messagingSenderId: "993612414236",
  // appId: "1:993612414236:web:a7b974dda63ff163c50ed9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
