// import { createStore } from "redux";

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// const countModifier = (state = 0, action) => {
//   console.log(state, action);
//   // if (action.type === "ADD") {
//   //   return state + 1;
//   // } else if (action.type === "MINUS") {
//   //   return state - 1;
//   // } else {
//   //   return state;
//   // }

//   switch (action.type) {
//     case "ADD":
//       return state + 1;
//     case "MINUS":
//       return state - 1;
//     default:
//       return state;
//   }
// }; //data를 modify하는 함수

// const countStore = createStore(countModifier); //data를 저장하는곳

// const onChange = () => {
//   number.innerText = countStore.getState();
// };
// countStore.subscribe(onChange);

// const handleAdd = () => {
//   countStore.dispatch({ type: "ADD" });
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));
// // console.log(countStore.getState());

// // countStore.dispatch({ type: "ADD" });
// // countStore.dispatch({ type: "MINUS" });
// // countStore.dispatch({ type: "ADD" });
// // countStore.dispatch({ type: "ADD" });

// console.log(countStore.getState());

//dispatch와 함께 countModifier로 메세지를 보낸다.

// console.log(countStore);
// console.log(countStore.getState);
// console.log(countStore.getState());

//이론

//const reducer=(state,action)=>{
//  ....modify state
//  return state;
//};빈 함수,return 받는값이 아주 중요하다.
//이 reducer는 첫번째로 데이터를 바꿔준다. 즉, modifier와 reducer가 return하는건 이 app의 데이터가 된다.
//reducer만 state를 modify할 수 있다. 그걸 어케 하는가?=>action을 통해 가능하다.
//action은 redux에서 function을 부를 때 쓰는 두번쨰parameter,혹은 argument이다.

//const store = createStore(reducer);//이 공간안에 함수를 넣어준다.
//store는 데이터를 넣는곳. store를 만들면 reducer를 만들어달라고 요구함
//reducer는 데이터를 modify하는 함수이다.(reducer is a function, and it modify your data)
//reducer는 순수 함수여야만 한다.
//count를 increase하거나 decrease한다.
/*
let count = 0;//state : 유일하게 바뀌는 data, count 를 increase를 시키거나,decrease한다.아래 함수들은 count를 바꾸기 위함!
//여기서는 리덕스가 count-1,count+1을 돕는다.
number.innerText = count;

//redux app내의 store는 반드시 한개만 존재 해아한다.

//절대 state mutate를 하면 안된다, state는 읽기 전용이어야 한다.
//mutate란? const friends = ["dal"] 에다가 friends.push("lynn")을 해서 friends에 ["dal","lynn"]이 되는것.
//내가 바꿀수 없다? mutate를 하는게 아니라 새로운 object를 리턴하는것이다. 새로운 state를 return하는 것 이다.
//상태를 수정(mutate) 하는것이 아니라 새로운 것을 return하는 것이다.

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
      // return [{ text: action.text, id: Date.now() }, ...state];
      const newToDoObj = { text: action.text, id: Date.now() };
      return [...state, newToDoObj];
    case DELETE_TODO:
      //   return state.filter((toDo) => toDo.id !== action.id);
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
}; //action creator를 사용해서 action을 dispatch한다. 그리고 이 action creator(여기서는 'deleteToDo')는 오로지 object만 return한다.

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = ""; //새로운 todo가 생기면 list를 전체를 비우고 state에 있는 각각의 todo를 이용해 새로운 list를 만든다.
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
