import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBNoT7MkvoIQQaOWSpmAB6ZJq8w6Rr44kI",
  authDomain: "gaypawrn.firebaseapp.com",
  projectId: "gaypawrn",
  storageBucket: "gaypawrn.firebasestorage.app",
  messagingSenderId: "978853988492",
  appId: "1:978853988492:web:065a73dbe97a78aa9f13a9",
  measurementId: "G-QB8PTVKM53"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

export default app; 