import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const CLIENT_apiKey = process.env.NEXT_PUBLIC_FIREBASE_apiKey;
const CLIENT_authDomain = process.env.NEXT_PUBLIC_FIREBASE_authDomain;
const CLIENT_databaseURL = process.env.NEXT_PUBLIC_FIREBASE_databaseURL;
const CLIENT_projectId = process.env.NEXT_PUBLIC_FIREBASE_projectId;
const CLIENT_storageBucket = process.env.NEXT_PUBLIC_FIREBASE_storageBucket;
const CLIENT_messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_messagingSenderId;
const CLIENT_appId = process.env.NEXT_PUBLIC_FIREBASE_appId;
const CLIENT_measurementId = process.env.NEXT_PUBLIC_FIREBASE_measurementId;

const firebaseConfig = {
  apiKey: CLIENT_apiKey,
  authDomain: CLIENT_authDomain,
  databaseURL: CLIENT_databaseURL,
  projectId: CLIENT_projectId,
  storageBucket: CLIENT_storageBucket,
  messagingSenderId: CLIENT_messagingSenderId,
  appId: CLIENT_appId,
  measurementId: CLIENT_measurementId
  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const messagesCollection = collection(db, "messages");

export { auth, db, messagesCollection ,signInWithEmailAndPassword, signOut };

