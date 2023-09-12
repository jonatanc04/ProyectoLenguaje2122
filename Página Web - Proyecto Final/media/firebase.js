// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { 
	getFirestore, 
	collection, 
	addDoc 
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1JWPO24s0vhAzj1wG2Jt4JE_OpCKhi-A",
  authDomain: "proyectolenguajemarcas.firebaseapp.com",
  projectId: "proyectolenguajemarcas",
  storageBucket: "proyectolenguajemarcas.appspot.com",
  messagingSenderId: "690268533903",
  appId: "1:690268533903:web:81b102647397f54a416cfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

// Cosas de la base de datos
export const saveReg = (user, mail, pass) => 
	addDoc(collection(db, 'users'), {user, mail, pass});