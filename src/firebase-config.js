import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDtjcX2hGuNr_2yCR8a1o9zvoBruLwQ-X4',
  authDomain: 'online-ps-db.firebaseapp.com',
  projectId: 'online-ps-db',
  storageBucket: 'online-ps-db.firebasestorage.app',
  messagingSenderId: '650354646155',
  appId: '1:650354646155:web:cfab9f0a604c309337c88e',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// Export Firebase utilities for use throughout the project
export {
  auth,
  provider,
  db,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
};
