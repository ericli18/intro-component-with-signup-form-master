const submit_btn = document.querySelector(".free-trial");
const first_name_input = document.querySelector("#first-name")
const first_name_img = first_name_input.nextElementSibling;
const first_name_error = document.querySelector('#first-name-error')

const last_name_input = document.querySelector("#last-name")
const last_name_img = last_name_input.nextElementSibling;
const last_name_error = document.querySelector('#last-name-error')

const email_input = document.querySelector("#email")
const email_img = email_input.nextElementSibling;
const email_error = document.querySelector('#email-error')

const password_input = document.querySelector("#password")
const password_img = password_input.nextElementSibling;
const password_error = document.querySelector('#password-error')

function check_fields() {
  if (first_name_input.value == '') {
    console.log(first_name_input.value);
    first_name_error.innerText = "First Name cannot be empty";
    first_name_img.classList.add("active-error-image");
  }

  if (last_name_input.value == '') {
    last_name_error.innerText = "Last Name cannot be empty";
    last_name_img.classList.add("active-error-image");
  }

  const matches = email_input.value.match(/(.+)\@(.+)\.(.+)/);
  if (matches == null) {
    email_error.innerText = "Looks like this is not an email";
    email_img.classList.add("active-error-image");
  }

  if (password_input.value == '') {
    password_error.innerText = "Password cannot be empty";
    password_img.classList.add("active-error-image");
  }

}

submit_btn.addEventListener('click', check_fields);
first_name_input.addEventListener('input', function() {
  first_name_error.innerText = '';
  first_name_img.classList.remove("active-error-image");
});
last_name_input.addEventListener('input', function() {
  last_name_error.innerText = '';
  last_name_img.classList.remove("active-error-image");
});
email_input.addEventListener('input', function() {
  if (email_input.value.match(/(.+)\@(.+)\.(.+)/) != null) {
    email_error.innerText = '';
    email_img.setAttribute("class", "error-image");
  }
});
password_input.addEventListener('input', function() {
  password_error.innerText = '';
  password_img.classList.remove("active-error-image");
});
