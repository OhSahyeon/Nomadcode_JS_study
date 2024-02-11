const toDoForm = document.querySelector("#todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList= document.querySelector("#todo-list")

const toDo = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDo))
}

function deleteToDo(e) {
  const thisLi = e.target.parentElement
  thisLi.remove()
}


function paintToDo(newToDo) {
  const li = document.createElement("li")
  const span = document.createElement("span")
  const button = document.createElement("button")
  span.innerText = newToDo
  button.innerText = "X"
  button.addEventListener("click", deleteToDo)
  li.appendChild(span)
  li.appendChild(button)
  toDoList.appendChild(li)
}

function toDoSubmit(e){
  e.preventDefault();
  const newToDo = toDoInput.value
  toDoInput.value = "";
  toDo.push(newToDo)
  saveToDos()
  paintToDo(newToDo)
};

toDoForm.addEventListener("submit", toDoSubmit);