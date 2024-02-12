const toDoForm = document.querySelector("#todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList= document.querySelector("#todo-list")

const TODOS_KEY = "todos"
const saveToDo = localStorage.getItem(TODOS_KEY)

let toDo = [];

if ( saveToDo !== null) {
  const parsedToDos = JSON.parse(saveToDo);
  toDo = parsedToDos
  parsedToDos.forEach(paintToDo);
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDo))
}

function deleteToDo(e) {
  const thisLi = e.target.parentElement
  console.log(thisLi.id)
  thisLi.remove();
  toDo = toDo.filter( (a) => a.id !==  parseInt(thisLi.id))
  console.log(toDo)
  saveToDos()
}

function paintToDo(newToDo) {
  const li = document.createElement("li")
  li.id  = newToDo.id;
  const span = document.createElement("span")
  const button = document.createElement("button")
  span.innerText = newToDo.text
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
  const newToDoObj = {
    id : Date.now(),
    text : newToDo
  };
  toDo.push(newToDoObj)
  saveToDos()
  paintToDo(newToDoObj)
};

toDoForm.addEventListener("submit", toDoSubmit);