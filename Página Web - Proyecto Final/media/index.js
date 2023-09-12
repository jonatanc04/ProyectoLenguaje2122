import {saveReg} from './firebase.js'

window.addEventListener('DOMContentLoaded', () => {
  console.log("works");
})

const form_reg = document.getElementById('form_reg')

form_reg.addEventListener('submit', (e) => {
  e.preventDefault()

  const user = form_reg['username']
  const mail = form_reg['email']
  const pass = form_reg['password']

  saveReg(user.value, mail.value, pass.value);

  form_reg.reset();
})