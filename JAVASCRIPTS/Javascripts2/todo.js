const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// === const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
  //console.log("i will paint", newTodo);
  const li /*or potato or everythig you want*/ = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
  console.log(li);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //<---input의 현재 value를 새로운 변수에 복사
  //console.log(toDoInput.value);
  toDoInput.value = "";
  //console.log(newTodo, toDoInput.value);
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
