const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const CLASSNAME_HIDDEN = "hidden"

function clickLoginBtn(e){
  e.preventDefault();

  const nameValue = loginInput.value;
  console.log(nameValue);

  loginForm.classList.add(CLASSNAME_HIDDEN);

  localStorage.setItem("nameValue", nameValue)
  greeting.innerText = `Hello ${nameValue}`;
  greeting.classList.remove(CLASSNAME_HIDDEN)
  localStorage.getItem("nameValue")
};

console.log(loginInput);

loginForm.addEventListener("submit", clickLoginBtn);
