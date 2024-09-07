
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD5lomLuhW3uXRlD5Xni45q8mijz4JBM9c",
  authDomain: "proj-escola-bd08e.firebaseapp.com",
  projectId: "proj-escola-bd08e",
  storageBucket: "proj-escola-bd08e.appspot.com",
  messagingSenderId: "285776504460",
  appId: "1:285776504460:web:87dc129f3d3a47c1bc7da9",
  measurementId: "G-ZHFFLKR394"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app);
export default database
