import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBVaGLLMipfRdvxScDvObity5Bb8SJPQY",
  authDomain: "chat-app-19513.firebaseapp.com",
  projectId: "chat-app-19513",
  storageBucket: "chat-app-19513.appspot.com",
  messagingSenderId: "1036553876251",
  appId: "1:1036553876251:web:b10ac583997407646b99be",
  measurementId: "G-46Z1V2N7YZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth , app }