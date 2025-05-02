import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDGDyZKLBdSVHhyBQfCWDviDWECgLxsgx0",
    authDomain: "myportfolio-3f408.firebaseapp.com",
    projectId: "myportfolio-3f408",
    storageBucket: "myportfolio-3f408.firebasestorage.app",
    messagingSenderId: "1007124271093",
    appId: "1:1007124271093:web:189ff61ed89263dd061abc"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };