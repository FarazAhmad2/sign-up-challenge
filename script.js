const email = document.getElementById("email");
const password = document.getElementById("password");
const mail_error = document.querySelector(".mail-err");
const pass_error = document.querySelector(".password-err");
const success = document.querySelector(".success");
const form = document.querySelector("#form");

let isEmailValid = false;
let isPasswordValid = false;

function validateEmail() {
  let regex = /[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  isEmailValid = regex.test(email.value.trim());

  if (isEmailValid) {
    mail_error.style.display = "none";
  } else {
    mail_error.style.display = "block";
  }

  checkSuccess();
}

function validatePassword() {
  isPasswordValid = password.value.trim().length >= 8;

  if (isPasswordValid) {
    pass_error.style.display = "none";
  } else {
    pass_error.style.display = "block";
  }

  checkSuccess();
}

function checkSuccess() {
  if (isEmailValid && isPasswordValid) {
    success.style.display = "block";
  } else {
    success.style.display = "none";
  }
}

email.addEventListener("change", validateEmail);

password.addEventListener("change", validatePassword);

form.addEventListener("submit", (e) => {
  if (success.style.display == "block") {
    if (confirm("Are you sure you want to sign up?")) {
      alert("Successful signup!");
    } else {
      e.preventDefault();
      clearForm();
    }
  } else {
    e.preventDefault();
    clearForm();
  }
});

function clearForm() {
  email.value = "";
  password.value = "";
  mail_error.style.display = "none";
  pass_error.style.display = "none";
  success.style.display = "none";
}