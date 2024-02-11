const toDoForm = document.querySelector("#todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList= document.querySelector("#todo-list")

function paintToDo(newToDo) {
  const createLi = document.createElement("li")
  const createSpan = document.createElement("span")
  createSpan.innerText = newToDo
  createLi.appendChild(createSpan)
  toDoList.appendChild(createLi)
}

function toDoSubmit(e){
  e.preventDefault();
  const newToDo = toDoInput.value
  toDoInput.value = "";
  paintToDo(newToDo)
};

toDoForm.addEventListener("submit", toDoSubmit);