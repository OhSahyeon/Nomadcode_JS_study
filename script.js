const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function clickLoginBtn(){
  const nameValue = loginInput.value
  if (nameValue === ""){
    alert("Please write your name")
  } else if(nameValue.length > 5){
    alert("Your name is to long...")
  } else {
    alert("thanks you!")
    loginInput.value = ""
  }
};

loginButton.addEventListener("click", clickLoginBtn);