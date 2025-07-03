import { initializeApp } from "firebase/app";
import{getStorage} from"firebase/storage"
const firebaseConfig = {
  apiKey:  process.env.FIREBASE_API_KEY,
  authDomain:  process.env.FIREBASE_AUTH_DOMAIN,
  projectId:  process.env.FIREBASE_PROJECT_ID,
  storageBucket:  process.env.FIREBASE_STORAGE_BUCKEET,
  messagingSenderId:  process.env.FIREBASE_MESSAGING_SENDERID,
  appId:  process.env.FIREBASE_APP_ID 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)