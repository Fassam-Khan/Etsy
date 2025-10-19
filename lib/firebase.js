// lib/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRivP1lTQX_ocpL8JI1i07brS7DLfXiG4",
  authDomain: "weimagine-7efe8.firebaseapp.com",
  projectId: "weimagine-7efe8",
  storageBucket: "weimagine-7efe8.firebasestorage.app",
  messagingSenderId: "224136904461",
  appId: "1:224136904461:web:d0e158a697415396a7fa44",
};

// ✅ Initialize app only once (important in Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// ✅ Create and export the Auth object
export const auth = getAuth(app);

// ✅ Export the app itself (optional)
export default app;
