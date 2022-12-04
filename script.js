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

  function checkLength(input, min, max){
    if(input.value.length < min) {
        error(input, `${input.id} minimum ${min} character necessary`)
    }else if (input.value.length > max) {
        error(input, `${input.id} maximum ${max} character necessary`)
    }else{
        succes(input)
    }
  }

  function checkPasswords (input1,input2){
    if(input1.value !== input2.value){
        error(input2, "passwords do not match")
    }
  }

  function checkPhone(input) {
    var exp = /^\d{10}$/;
    if (!exp.test(input.value)) {
        error(input, "Phone Number required 10 characters.")
    }
  }

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        checkRequired([username,email,password,repassword,phone]);
        checkEmail(email);
        checkLength(username,7,15);
        checkLength(password,7,12);
        checkLength(repassword,7,12);
        checkPasswords(password,repassword)
        checkPhone(phone)
    })  