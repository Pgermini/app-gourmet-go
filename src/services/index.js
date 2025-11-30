import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "SUA_KEY",
  authDomain: "SEU_AUTH",
  projectId: "SEU_PROJECTID",
  storageBucket: "SUA_BUCKET",
  messagingSenderId: "ID",
  appId: "APPID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
