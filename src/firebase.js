import { 
  initializeApp 
} from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGDyZKLBdSVHhyBQfCWDviDWECgLxsgx0",
  authDomain: "myportfolio-3f408.firebaseapp.com",
  projectId: "myportfolio-3f408",
  storageBucket: "myportfolio-3f408.firebasestorage.app",
  messagingSenderId: "1007124271093",
  appId: "1:1007124271093:web:189ff61ed89263dd061abc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
// Your web app's Firebase configuration
