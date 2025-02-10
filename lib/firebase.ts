import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_apiKey,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_authDomain,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_projectId,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_storageBucket,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_messagingSenderId,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_appId,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_measurementId
// };

const firebaseConfig = {
  apiKey: "AIzaSyBfVwdowFsK85JYw07_bTZHCg-Gz0t_WK4",
  authDomain: "portfolio-d78c0.firebaseapp.com",
  projectId: "portfolio-d78c0",
  storageBucket: "portfolio-d78c0.firebasestorage.app",
  messagingSenderId: "829297745114",
  appId: "1:829297745114:web:f02a13cada8b7f76fc59e3",
  measurementId: "G-7HR546C83L"
};

// Ensure Firebase is initialized only once
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const messagesCollection = collection(db, "messages");

export { auth, db, messagesCollection, signInWithEmailAndPassword, signOut };
