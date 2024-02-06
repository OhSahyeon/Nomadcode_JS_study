const loginInput = document.querySelector("#login-form input")
const loginButton = document.querySelector("#login-form button")

function clickLoginBtn(){
  console.log(loginInput.value)
}

loginButton.addEventListener("click", clickLoginBtn);