const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");


function error (input) {
    input.classList = "form-control is-invalid";
}

function succes (input) {

}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(username.value == "") {
        error(username)
    } else {
        username.classList = "form-control is-valid"
    }
    if(email.value == "") {
        error(email)
    } else {
        email.classList = "form-control is-valid"
    }
    if(password.value == "") {
        error(password)
    } else {
        password.classList = "form-control is-valid"
    }
    if(repassword.value == "") {
        error(repassword)
    } else {
        repassword.classList = "form-control is-valid"
    }
})  