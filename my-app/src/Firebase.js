import { initializeApp } from "firebase/app";
import {getAuth} from'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDAmpLmaHrzApgpKOTLa5oDmOs_QA_MfsU",
  authDomain: "authentication-a3103.firebaseapp.com",
  projectId: "authentication-a3103",
  storageBucket: "authentication-a3103.appspot.com",
  messagingSenderId: "374086811327",
  appId: "1:374086811327:web:7c5a1777edba74c51f100a",
  measurementId: "G-L2WTKNVQ88"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export {auth}