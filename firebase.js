import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { initializeFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const app = initializeApp({
  apiKey: "AIzaSyCPz4uQi5i9rQAW1gBN-CXX8yCGS_uhUpU",
  authDomain: "appneed-b4350.firebaseapp.com",
  projectId: "appneed-b4350",
  storageBucket: "appneed-b4350.firebasestorage.app",
  messagingSenderId: "799172298311",
  appId: "1:799172298311:web:1598c292d14878fc08d362"
});

export const db = initializeFirestore(app, { experimentalAutoDetectLongPolling: true });
export const auth = getAuth(app);
