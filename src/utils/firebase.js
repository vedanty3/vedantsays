import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "vedantsays.firebaseapp.com",
  projectId: "vedantsays",
  storageBucket: "vedantsays.appspot.com",
  messagingSenderId: "332209597840",
  appId: "1:332209597840:web:49434f2aca2cd11d751715",
  measurementId: "G-D940SKSW5M",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
