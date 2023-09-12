// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { 
	getFirestore, 
	collection, 
	addDoc,
  getDocs,
  query 
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"

import { getAuth } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
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
export const auth = getAuth();
export const user = auth.currentUser;

// GUARDA DATOS DE REGISTRO
export const saveReg = (user, mail, pass, type) => 
	addDoc(collection(db, 'users'), {user, mail, pass, type});

// LEE LOS USER DE LA BASE DE DATOS

export const getTask = () => getDocs(collection(db, 'users'));


// LEE LAS PELÍCULAS DE LA BASE DE DATOS

export const getMovies = async() => {
  var movie = new Array ();
  const moviesRef = collection(db, 'movies');
  const references = query(moviesRef);
  const querySnapshot = await getDocs(references);

  querySnapshot.forEach((element) => {
    if (element.data().id == localStorage.movie) {
      movie.unshift(element.data());
    }
  });

  return movie;

}

// GUARDA TRABAJADORES

export const formWork = (user, mail, pass, type) => 
	addDoc(collection(db, 'workers'), {user, mail, pass, type});