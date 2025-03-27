// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7J8bZuzUziha6MxbSJh6XijTO-5Pewew",
  authDomain: "leadyourbuild-6abed.firebaseapp.com",
  projectId: "leadyourbuild-6abed",
  storageBucket: "leadyourbuild-6abed.firebasestorage.app",
  messagingSenderId: "239751583621",
  appId: "1:239751583621:web:f40e97796834d36b57d6ec",
  measurementId: "G-WP1R7XW2XX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// ✅ Export auth so other files can use it
export { auth };
