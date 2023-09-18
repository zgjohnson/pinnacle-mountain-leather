// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCB1a1bEX9Ub7Mj2vH5qbuzdRBKCRE4GQM',
  authDomain: 'pinnacle-mountain-db.firebaseapp.com',
  projectId: 'pinnacle-mountain-db',
  storageBucket: 'pinnacle-mountain-db.appspot.com',
  messagingSenderId: '109483439219',
  appId: '1:109483439219:web:842d835b63036271a96606',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
