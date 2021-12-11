// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp1VNYX-2PiCKfqzOhrUcL-R-YoQswTnI",
  authDomain: "insta-2-yt-d66b0.firebaseapp.com",
  projectId: "insta-2-yt-d66b0",
  storageBucket: "insta-2-yt-d66b0.appspot.com",
  messagingSenderId: "1073756562566",
  appId: "1:1073756562566:web:caf949dea916f54316dd07"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };