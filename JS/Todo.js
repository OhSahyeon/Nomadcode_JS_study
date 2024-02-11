const toDoForm = document.querySelector("#todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList= document.querySelector("#todo-list")

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
  paintToDo(newToDo)
};

toDoForm.addEventListener("submit", toDoSubmit);