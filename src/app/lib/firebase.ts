import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAKO6PYslZgMxJFdYHb8XBxths7fKaose4",
    authDomain: "sign-3aea1.firebaseapp.com",
    projectId: "sign-3aea1",
    storageBucket: "sign-3aea1.appspot.com",
    messagingSenderId: "50619580066",
    appId: "1:50619580066:web:4c21666b9d1308a8d761fb",
    measurementId: "G-PVCT26SYXV"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;