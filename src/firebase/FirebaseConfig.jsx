import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAHiIg0WLebi2cAr9RyyoJcHnFMv9b4ErA",
  authDomain: "blogops-96a94.firebaseapp.com",
  projectId: "blogops-96a94",
  storageBucket: "blogops-96a94.appspot.com",
  messagingSenderId: "85263100853",
  appId: "1:85263100853:web:9c33180097d083b0c587fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDb, auth, storage };
