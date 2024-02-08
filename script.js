const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const CLASSNAME_HIDDEN = "hidden";
const KEY_NAMEVALUE = "nameValue";
let getUserName = localStorage.getItem(KEY_NAMEVALUE)

loginForm.addEventListener("submit", clickLoginBtn);

if (getUserName === null){
  loginForm.classList.remove(CLASSNAME_HIDDEN)
} else {
  changeGreeting()
}

function clickLoginBtn(e){
  e.preventDefault();
  const nameValue = loginInput.value;
  loginForm.classList.add(CLASSNAME_HIDDEN);
  localStorage.setItem(KEY_NAMEVALUE, nameValue)
  changeGreeting()
};

function changeGreeting(){
  getUserName = localStorage.getItem(KEY_NAMEVALUE)
  greeting.innerText = `Hello ${getUserName}`;
  greeting.classList.remove(CLASSNAME_HIDDEN)
}