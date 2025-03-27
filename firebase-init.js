// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA73Bzb2uUziha6Mbx5Jh6Xj1tO-5Pewew",
  authDomain: "leadyourbuild-6abed.firebaseapp.com",
  projectId: "leadyourbuild-6abed",
  storageBucket: "leadyourbuild-6abed.appspot.com",
  messagingSenderId: "239751583621",
  appId: "1:239751583621:web:f40e97796834d36b57d6ec"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
