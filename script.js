const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");


function error (input, message) {
    input.classList = "form-control is-invalid";
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = "invalid-feedback"
}

function succes (input) {
    input.classList = "form-control is-valid";
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  
form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(username.value == "") {
        error(username, "username necessary")
    } else {
        succes(username)
    }
    if(email.value == "") {
        error(email, "email necessary")
    }
    else if(!validateEmail(email.value)) {
        error(email, "Please enter a correct e-mail address")
    }
    else {
        succes(email)
    }
    if(password.value == "") {
        error(password, "password necessary")
    } else {
        succes(password)
    }
    if(repassword.value == "") {
        error(repassword, "repassword necessary")
    } else {
        succes(repassword)
    }
})  