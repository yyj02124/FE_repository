/* import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

//dispatch와 함께 countModifier로 메세지를 보낸다.
console.log(countStore.getState());
 */
//이론
//const reducer=(state = 0,action)=>{
//  return state;
//};빈 함수,return 받는값이 아주 중요하다.
//이 reducer는 첫번째로 데이터를 바꿔준다. 즉, modifier와 reducer가 return하는건 이 app의 데이터가 된다.
//action은 redux에서 function을 부를 때 쓰는 두번쨰parameter,혹은 argument이다.

//const store = createStore(reducer);//이 공간안에 함수를 넣어준다.
//store는 데이터를 넣는곳. store를 만들면 reducer를 만들어달라고 요구함
//reducer는 데이터를 modify하는 함수이다.(reducer is a function, and it modify your data)
//count를 increase하거나 decrease한다.

/* let count = 0;//state : 유일하게 바뀌는 data, count 를 increase를 시키거나,decrease한다.아래 함수들은 count를 바꾸기 위함!
//여기서는 리덕스가 count-1,count+1을 돕는다.
number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count = count + 1;
  updateText();
};
const handleMinus = () => {
  count = count - 1;
  updateText();
}; 

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
 */

import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newToDoObj = { text: action.text, id: Date.now() };
      return [newToDoObj, ...state];
    case DELETE_TODO:
      const cleaned = state.filter((toDo) => toDo.id !== action.id);
      return cleaned;
    default:
      return state;
  }
};

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));
const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
