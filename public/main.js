import { auth, db } from "./firebase.js";
import { signInAnonymously } from "firebase/auth";

signInAnonymously(auth)
  .then(() => console.log("Signed in"))
  .catch(console.error);
