const form = document.getElementById('form');
const email = document.getElementById('email');
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs(){
    const emailValue = email.value.trim();

    if (emailValue == "") {
        setErrorFor(email, 'Please, enter your email');
    } else if (!emailValue.match(pattern)){
        setErrorFor(email, 'Your email is not valid');
    } else {
        setSuccessFor(email, '')
    }
}

setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = "form-control error";
}

setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}