const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const CLASSNAME_HIDDEN = "hidden";
const KEY_NAMEVALUE = "nameValue";
let getUserName = localStorage.getItem(KEY_NAMEVALUE)

if (getUserName === null){
  loginForm.addEventListener("submit", clickLoginBtn);
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

const 보따리 = {
  사과: `1,000원`,
  수박: `1,000원`,
  멜론: `1,000원`,
  포도: `1,000원`,
}

보따리.사과 = `2,000원`

console.log(보따리.사과)