const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs(){
    const emailValue = email.value.trim();

    emailValue === ""
    ? setErrorFor(email, "You must enter a complete email")
    : validEmail === false 
    ? setErrorFor(email, "Please provide a valid email")
    : setSuccessFor(email)
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

validEmail = (email) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return true
    } else {
        return false
    }
}