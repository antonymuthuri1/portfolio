import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import { defineSecret } from 'firebase-functions/params';


// const CLIENT_apiKey = process.env.NEXT_PUBLIC_FIREBASE_apiKey;
// const CLIENT_authDomain = process.env.NEXT_PUBLIC_FIREBASE_authDomain;
// // const CLIENT_databaseURL = process.env.NEXT_PUBLIC_FIREBASE_databaseURL;
// const CLIENT_projectId = process.env.NEXT_PUBLIC_FIREBASE_projectId;
// const CLIENT_storageBucket = process.env.NEXT_PUBLIC_FIREBASE_storageBucket;
// const CLIENT_messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_messagingSenderId;
// const CLIENT_appId = process.env.NEXT_PUBLIC_FIREBASE_appId;
// const CLIENT_measurementId = process.env.NEXT_PUBLIC_FIREBASE_measurementId;

// const firebaseConfig = {
//   apiKey: CLIENT_apiKey,
//   authDomain: CLIENT_authDomain,
//   projectId: CLIENT_projectId,
//   storageBucket: CLIENT_storageBucket,
//   messagingSenderId: CLIENT_messagingSenderId,
//   appId: CLIENT_appId,
//   measurementId: CLIENT_measurementId
  
// };



const CLIENT_apiKey = defineSecret("MY_API_KEY");
const CLIENT_authDomain = defineSecret("MY_AUTH_DOMAIN");
const CLIENT_projectId = defineSecret("MY_PROJECT_ID");
const CLIENT_storageBucket = defineSecret("MY_STORAGE_BUCKET");
const CLIENT_messagingSenderId = defineSecret("MY_MESSAGING_SENDER_ID");
const CLIENT_appId = defineSecret("MY_APP_ID");
const CLIENT_measurementId = defineSecret("MY_MEASUREMENT_ID");

console.log("CLIENT_apiKey: ", CLIENT_apiKey);
console.log("CLIENT_authDomain: ", CLIENT_authDomain);
console.log("CLIENT_projectId: ", CLIENT_projectId);
console.log("CLIENT_storageBucket: ", CLIENT_storageBucket);
console.log("CLIENT_messagingSenderId: ", CLIENT_messagingSenderId);
console.log("CLIENT_appId: ", CLIENT_appId);
console.log("CLIENT_measurementId: ", CLIENT_measurementId);

const firebaseConfig = {
  apiKey: CLIENT_apiKey.value(),
  authDomain: CLIENT_authDomain.value(),
  projectId: CLIENT_projectId.value(),
  storageBucket: CLIENT_storageBucket.value(),
  messagingSenderId: CLIENT_messagingSenderId.value(),
  appId: CLIENT_appId.value(),
  measurementId: CLIENT_measurementId.value()
  
};

// const firebaseConfig = {
//   apiKey: functions.config().my_firebase.api_key,
//   authDomain: functions.config().my_firebase.auth_domain,
//   projectId: functions.config().my_firebase.project_id,
//   storageBucket: functions.config().my_firebase.storage_bucket,
//   messagingSenderId: functions.config().my_firebase.messaging_sender_id,
//   appId: functions.config().my_firebase.app_id,
//   measurementId: functions.config().my_firebase.measurement_id,
// };

// Ensure Firebase is initialized only once
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const messagesCollection = collection(db, "messages");

export { auth, db, messagesCollection, signInWithEmailAndPassword, signOut };
