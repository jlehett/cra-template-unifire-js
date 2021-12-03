import { initializeApp } from 'firebase/app';
import { createUnifireFirebaseApp } from '@unifire-js/firebase';
import { FIREBASE_CONFIG } from './app-settings';

const firebaseApp = initializeApp(FIREBASE_CONFIG);
createUnifireFirebaseApp(FIREBASE_CONFIG);