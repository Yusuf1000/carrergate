// Password

let myPassword = document.getElementById('security-key');
let eye = document.getElementById('toggle');

function showHide(){
    if(myPassword.type === 'password'){
        myPassword.setAttribute('type', 'text');
        eye.setAttribute('src', './eye-slash-solid.svg');
    }
    else{
        myPassword.setAttribute('type', 'password');
        eye.setAttribute('src', './eye-solid.svg')
    }
}

eye.addEventListener("click", showHide)