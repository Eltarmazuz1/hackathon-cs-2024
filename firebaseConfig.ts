import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBRalkyX36T6Ny2ABERnhR15YiJNhQ4RvU",
  authDomain: "hack2024-78b07.firebaseapp.com",
  projectId: "hack2024-78b07",
  storageBucket: "hack2024-78b07.appspot.com",
  messagingSenderId: "790025547737",
  appId: "1:790025547737:web:324ed689f924519c05f3c8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
