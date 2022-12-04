const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");


function error (input) {
    input.classList = "form-control is-invalid";
}

function succes (input) {
    input.classList = "form-control is-valid";
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(username.value == "") {
        error(username)
    } else {
        succes(username)
    }
    if(email.value == "") {
        error(email)
    } else {
        succes(username)
    }
    if(password.value == "") {
        error(password)
    } else {
        succes(username)
    }
    if(repassword.value == "") {
        error(repassword)
    } else {
        succes(username)
    }
})  