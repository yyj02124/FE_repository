const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// === const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //toDos어레이가 비어있으면 매번 브라우저를 실행시킬떄마다 비어 있는 어레이가 나와 계속 todo가 덮어 씌어진다.
//기존의 어레이는 브라우저가 실행되면서 사라지고 새로 추가 된 array들만 저장이 되어버리기 때문.
//toDos어레이에 포함되는 toDos는 매번 newToDo만 포함되어버리고 기존 어레이는 로컬 스토리지에 저장이 되어 있지만, 요 어레이는 빈상태로 계속 overlapping되어버린다.
//const대신 let을 쓰고 if에다가 toDos에 paseToDo를 가져와서 복원 시켜준다.
//toDos어레이 =/=local storage
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  // console.log(li.id); //삭제하면 콘솔로그에 li id를 얻음
  li.remove();
  // function pomatofilter(event) {
  //   return event.id !== parseInt(li.id);
  // }
  // toDos = toDos.filter(pomatofilter);
  //다음 함수가 아래 한문장과 일치한다.
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  //이렇게 했으나 한번에 앉워지는 이유는 li.id는 string타입인데,toDo.id는 number이기 때문 따라서 li.id에 parseInt를 넣어 number로 변경 시킴
  saveToDos(); //마지막으로 저장
}

function paintToDo(newTodo) {
  //console.log("i will paint", newTodo);
  const li /*or potato or everythig you want*/ = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = /*newTodo*/ newTodo.text; //handleToDoSubmit함수에서 paintToDo에 텍스트 대신 오브젝트를 받으면서 뒤에 .text를 붙힘(text: newTodo,로 함)
  // console.log(li);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //<---input의 현재 value를 새로운 변수에 복사
  //console.log(toDoInput.value);
  toDoInput.value = "";
  //console.log(newTodo, toDoInput.value);
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  console.log(newTodoObj);
  toDos.push(newTodoObj); //그냥 문자 어레이를 주기보다는, 오브젝트된 무언가를 넣어 지울떄 각의 id값을 받아 쓴다.
  paintToDo(/*newTodo*/ newTodoObj); //paintToDo가 newTodo를 받을땐 텍스트를 받았지만 newTodoObj를 받으면서 object를 받게 되었다.
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// 1.function sayHello(item) {
//   console.log("this is turn of", item);
// } 1에sayHello가 들어가면 sayHello 함수가 array에 포함되는 갯수(sayHello(a,b,c...))번이 실행되고
//  이는 (item) => console.log("this is turn of", item)이것과 같다.

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  // console.log(parsedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(/*1*/ paintToDo); //forEach함수는 이 paintToDo를 parsedToDos배열의 요소마다 실행한다.
  //foreach는 paintToDo를 기본적으로 실행하는데, 이떄에 forEach는 각각의 item을 준다(paintToDo에서는 오브젝트)
} else {
}
