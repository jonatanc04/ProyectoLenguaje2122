import {auth} from './firebase.js'

window.addEventListener('DOMContentLoaded', async(event) => {

    const sleep = ms => new Promise(r=>SetTimeout(r,ms));

    console.log('logout works');
    await new Promise(r=> setTimeout(r, 400));
    var inned = auth.currentUser;

if (inned != null) {
    let lo = document.getElementById('logOutSame');
    lo.innerHTML = 'LOGOUT';
}

});