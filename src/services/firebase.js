import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAN3FkzwZ1c7skmACKmHMYVXt_jy4ORwMQ",
  authDomain: "webassignment-e0d9c.firebaseapp.com",
  projectId: "webassignment-e0d9c",
  storageBucket: "webassignment-e0d9c.firebasestorage.app",
  messagingSenderId: "826801154097",
  appId: "1:826801154097:web:012090c14dc2d036524d10",
  measurementId: "G-GFSMRXV43W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };