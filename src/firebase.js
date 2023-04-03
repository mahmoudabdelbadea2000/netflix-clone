import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZM2Gp-mUQquU7t6idJQ8jegmt2oVrEfI",
  authDomain: "netflix-clone-cd8ab.firebaseapp.com",
  projectId: "netflix-clone-cd8ab",
  storageBucket: "netflix-clone-cd8ab.appspot.com",
  messagingSenderId: "973117352217",
  appId: "1:973117352217:web:077c5e28a43224ada9bd88",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };