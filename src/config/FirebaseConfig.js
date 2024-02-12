// Import the functions you need from the SDKs you need

import { getFirestore} from "firebase/firestore"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm4EV5vMBeJAYh0fFBbEm21QiRj_o5pAQ",
  authDomain: "assignment2-dff9b.firebaseapp.com",
  projectId: "assignment2-dff9b",
  storageBucket: "assignment2-dff9b.appspot.com",
  messagingSenderId: "502988121451",
  appId: "1:502988121451:web:478d74a4114129d290982e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const dataDB=getFirestore(app)
export default dataDB