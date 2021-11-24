import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { setFirebaseApp } from '@unifire-js/firebase';
import { FIREBASE_CONFIG } from './app-settings';

const firebaseApp = initializeApp(FIREBASE_CONFIG);
setFirebaseApp(firebaseApp);