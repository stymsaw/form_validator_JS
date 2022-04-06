const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('confirm_password')

// email validator
const validateEmail = (input) => {
  const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  if (re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, 'Email is invalid')
  }
}

// check for password matching
function checkPasswordMatch(pass, pass2) {
  if (pass.value !== pass2.value) showError(pass2, `Password doesn't match`)
}

//  Show input error message
function showError(input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}
// show success outline
function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

// Check required fields
// function checkRequired(inputArr) {
//   inputArr.forEach((input) => {
//     if (input.value.trim() === '') {
//       showError(input, `${input.id} is required`)
//     } else {
//       showSuccess(input)
//     }
//   })
// }

// check length of fields
function checkLength(input, min, max) {
  if (input.value.length < 1) {
    showError(input, `${input.id} is required`)
  } else if (input.value.length < min) {
    showError(input, `${input.id} length must be atleast ${min} characters`)
  } else if (input.value.length > max) {
    showError(input, `${input.id} length should exceed ${max} characters`)
  } else {
    showSuccess(input)
  }
}

// Event listener
form.addEventListener('submit', (e) => {
  e.preventDefault()
  // checkRequired([username, password2, password])
  checkLength(username, 3, 16)
  // validateEmail(email)
  checkLength(email, 3,30)
  checkLength(password, 3, 16)
  checkLength(password2, 3, 16)
  checkPasswordMatch(password, password2)
})
