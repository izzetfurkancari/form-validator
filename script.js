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

const checkEmail = (input) => {
    const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(input.value)) {
        succes(input)
    } else {
        error(input, "wrong email address")
    }
  };
  
  function checkRequired(inputs) {
    inputs.forEach(input => {
        if (input.value === "") {
            error(input, `${input.id} is required`)
        } else {
            succes(input)
        }
    });
  }

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        checkRequired([username,email,password,repassword]);
        checkEmail(email)
    })  