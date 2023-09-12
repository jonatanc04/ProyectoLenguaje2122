import {formWork} from './firebase.js'

window.addEventListener('DOMContentLoaded', () => {
  console.log("work - ers");
})

const form_work = document.getElementById('form_work')

// REGISTRAR TRABAJADORES

form_work.addEventListener('submit', (e) => {
    e.preventDefault()
  
    const userWork = form_work['userWork'].value;
    const mailWork = form_work['mailWork'].value;
    const passWork = form_work['passWork'].value;
    const typeWork = "work";
    formWork(userWork, mailWork, passWork, typeWork);
    console.log(userWork, mailWork, passWork, typeWork);
  
    form_work.reset();
  
  })