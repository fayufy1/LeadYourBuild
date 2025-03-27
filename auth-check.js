// auth-check.js

// ✅ Import auth instance from firebase-init.js
import { auth } from './firebase-init.js';
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// ✅ Monitor authentication status
onAuthStateChanged(auth, (user) => {
  if (user) {
    const userEmail = user.email || "User";
    const userNameSpan = document.getElementById("user-name");

    if (userNameSpan) {
      userNameSpan.textContent = userEmail;
    }
  } else {
    // 🚫 If not on login page, redirect to login
    if (!window.location.href.includes("login.html")) {
      window.location.href = "login.html";
    }
  }
});

// ✅ Optional: Logout button function
window.logout = function () {
  signOut(auth)
    .then(() => {
      alert("Signed out successfully.");
      window.location.href = "login.html";
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
};
