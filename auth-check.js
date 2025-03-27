// auth-check.js

import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth();

// Check if user is authenticated
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    const userEmail = user.email || "User";
    const userNameSpan = document.getElementById("user-name");
    if (userNameSpan) {
      userNameSpan.textContent = userEmail;
    }
  } else {
    // User not signed in, redirect to login page
    if (!window.location.href.includes("login.html")) {
      window.location.href = "login.html";
    }
  }
});

// Optional: Add logout function to global scope
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