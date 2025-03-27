// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA7J8bZuzUziha6MxbSJh6XijTO-5Pewew",
  authDomain: "leadyourbuild-6abed.firebaseapp.com",
  projectId: "leadyourbuild-6abed",
  storageBucket: "leadyourbuild-6abed.firebasestorage.app",
  messagingSenderId: "239751583621",
  appId: "1:239751583621:web:6142fd6059cbc64d57d6ec",
  measurementId: "G-755V9X3VPB"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// ✅ Export for use in other scripts
export { auth };
