import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDfmi5s0F_sWg40ukicO2z16ZzY0ubFHdA",
  authDomain: "fauth-fd454.firebaseapp.com",
  projectId: "fauth-fd454",
  storageBucket: "fauth-fd454.appspot.com",
  messagingSenderId: "15901121172",
  appId: "1:15901121172:web:0c16cfb03127d308fdf281",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)
export default auth
