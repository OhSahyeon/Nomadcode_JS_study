const toDoForm = document.querySelector("#todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList= document.querySelector("#todo-list")

const TODOS_KEY = "todos"

const toDo = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDo))
}

function deleteToDo(e) {
  const thisLi = e.target.parentElement
  thisLi.remove()
}

function sayhello(i) {
  console.log("Hello" + i)
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

const saveToDo = localStorage.getItem(TODOS_KEY)

if ( saveToDo !== null) {
  const parsedToDos = JSON.parse(saveToDo);
  parsedToDos.forEach(sayhello);
}