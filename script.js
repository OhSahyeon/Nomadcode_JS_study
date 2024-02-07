const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function clickLoginBtn(e){
  const nameValue = loginInput.value
  e.preventDefault()
  console.log(e)
  console.log(nameValue)
};

loginForm.addEventListener("submit", clickLoginBtn)