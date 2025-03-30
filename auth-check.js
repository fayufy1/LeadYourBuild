import { auth } from "./firebase-init.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  const loginBtn = document.getElementById("login-btn");
  const loggedInElem = document.getElementById("logged-in");
  const userNameSpan = document.getElementById("user-name");

  if (user) {
    const userEmail = user.email || "User";
    if (userNameSpan) {
      userNameSpan.textContent = userEmail;
    }
    // Show the logout section and hide the login button
    if (loggedInElem) {
      loggedInElem.style.display = "inline";
    }
    if (loginBtn) {
      loginBtn.style.display = "none";
    }
  } else {
    // Show the login button and hide the logout section
    if (loggedInElem) {
      loggedInElem.style.display = "none";
    }
    if (loginBtn) {
      loginBtn.style.display = "inline";
    }
    // if (!window.location.href.includes("login.html")) {
    //   window.location.href = "login.html";
    // }
  }
});

window.logout = function () {
  signOut(auth)
    .then(() => {
      alert("Signed out successfully.");
      // Optionally update UI immediately
      document.getElementById("logged-in").style.display = "none";
      document.getElementById("login-btn").style.display = "inline";
      window.location.href = "login.html";
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
};
