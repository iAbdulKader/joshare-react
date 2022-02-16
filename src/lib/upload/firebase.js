import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkc272XDJJVV_0Gg6pA9T1Ml8qaOMZazI",
  authDomain: "joshare-cloud.firebaseapp.com",
  projectId: "joshare-cloud",
  storageBucket: "joshare-cloud.appspot.com",
  messagingSenderId: "806402779667",
  appId: "1:806402779667:web:11447b63eadabe48a56de6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage };