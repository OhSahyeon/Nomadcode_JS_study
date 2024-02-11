const toDoForm = document.querySelector("#todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList= document.querySelector("#todo-list")

function toDoSubmit(e){
  e.preventDefault();
  const newToDo = toDoInput.value
  toDoInput.value = "";
};

toDoForm.addEventListener("submit", toDoSubmit);