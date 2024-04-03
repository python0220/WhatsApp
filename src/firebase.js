import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC451VnWnL3IVxNnCiVmtnGE9nobAYVEtE",
  authDomain: "prac-c01b6.firebaseapp.com",
  databaseURL: "https://prac-c01b6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "prac-c01b6",
  storageBucket: "prac-c01b6.appspot.com",
  messagingSenderId: "560069677703",
  appId: "1:560069677703:web:d2cd1815902181791a5e22"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);