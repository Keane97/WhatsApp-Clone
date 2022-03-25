import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyADukQA7-OgLYoAIayPDdAQ3rUhc2an3ZI",
  authDomain: "whatsapp-clone-ad907.firebaseapp.com",
  projectId: "whatsapp-clone-ad907",
  storageBucket: "whatsapp-clone-ad907.appspot.com",
  messagingSenderId: "1047223782011",
  appId: "1:1047223782011:web:006662caad44a2e6c4f0de",
  measurementId: "G-GNHPES2ZXN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
