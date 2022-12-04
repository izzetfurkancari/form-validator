const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");




form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(username.value == "") {
        username.classList = "form-control is-invalid"
    } else {
        username.classList = "form-control is-valid"
    }
    if(email.value == "") {
        email.classList = "form-control is-invalid"
    } else {
        email.classList = "form-control is-valid"
    }
    if(password.value == "") {
        password.classList = "form-control is-invalid"
    } else {
        password.classList = "form-control is-valid"
    }
    if(repassword.value == "") {
        repassword.classList = "form-control is-invalid"
    } else {
        repassword.classList = "form-control is-valid"
    }
})  