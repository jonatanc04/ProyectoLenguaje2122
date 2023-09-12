import {saveReg, auth, user, getTask} from './firebase.js'
import { getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut 
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

window.addEventListener('DOMContentLoaded', () => {
  console.log("index works");
})

const form_reg = document.getElementById('form_reg')
const form_log = document.getElementById('form_log')

// REGISTRARSE

form_reg.addEventListener('submit', async(e) => {
  e.preventDefault()

  const sleep = ms => new Promise(r=>SetTimeout(r,ms));
  const userform = form_reg['username'].value;
  const mail = form_reg['email'].value;
  const pass = form_reg['password'].value;
  const type = "user";
  createUserWithEmailAndPassword(auth, mail, pass, type)
  .then((userCredential) => {
    // Signed in
    user = userCredential.user;
    console.log('newlogin')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  saveReg(userform, mail, pass, type);
  console.log(userform, mail, pass, type);

  let lo = document.getElementById('logOutSame')
  lo.innerHTML = 'LOGOUT';

  form_reg.reset();
  await new Promise(r=> setTimeout(r, 2000));
  location.reload();

})

//LOGOUT

document.getElementById("logOutSame").addEventListener("click", (e) => {
  e.preventDefault()

  console.log(auth.currentUser);
  
  signOut(auth).then(() => {
    console.log('logout')
    console.log(auth.currentUser);
    location.reload();


  }).catch((error) => {
    // An error happened.
  })

})

// LOGIN
window.addEventListener('DOMContentLoaded', async () =>{

  const querySnapshot = await getTask();

  form_log.addEventListener('submit', async(e) => {
    e.preventDefault()

    const usern = form_log['username'].value;
    const pass = form_log['password'].value;

    console.log(usern, pass);

    console.log(querySnapshot);
    
      querySnapshot.forEach(doc => {

        console.log(doc.data());
        console.log(doc.data().user);
        
        if(doc.data().user == usern) {

          if(doc.data().pass == pass) {

            if(doc.data().type == "user") {

              signInWithEmailAndPassword(auth, doc.data().mail, doc.data().pass)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('loged as user');
                // ...
              })
                .catch((error) => {
                  alert("El usuario o la contraseña son incorrectos.");
              });

            } else if (doc.data().type == "root") {

              signInWithEmailAndPassword(auth, doc.data().mail, doc.data().pass)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('loged as root');
                let lo = document.getElementById('contact');
                lo.setAttribute("href","workers.html");
                var li = lo.firstChild;
                li.innerHTML = 'WORKERS';
                // ...
              })
                .catch((error) => {
                  alert("El usuario o la contraseña son incorrectos.");
              });

            } else if (doc.data().type == "work") {

              signInWithEmailAndPassword(auth, doc.data().mail, doc.data().pass)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('loged as work');
                // ...
              })
                .catch((error) => {
                  alert("El usuario o la contraseña son incorrectos.");
              });

            }

          }

        }

      })
  
    form_log.reset();

  })

})