// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2jG6AVD8_F65_5sJqIeSUbi8m_k3epGs",
  authDomain: "japanis-ba60d.firebaseapp.com",
  projectId: "japanis-ba60d",
  storageBucket: "japanis-ba60d.firebasestorage.app",
  messagingSenderId: "682498591202",
  appId: "1:682498591202:web:95dc334e4155c59ba0d1bb",
  measurementId: "G-VXV2Z8TDZW"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;