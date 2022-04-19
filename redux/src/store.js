import { createStore } from "redux";
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";
/*
// const ADD = "ADD";
// const DELETE = "DELETE";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// console.log(addToDo.type, addToDo(), deleteToDo.type, deleteToDo());

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
}); //return 할때는 new state여야만 한다. 그런데 위의 state.push는 state를 mutate시킬뿐이다.이떄는 아무것도 return시키지 않는다.
//createReducer 는 switch,case를 사용할 필요가 없게 하고, state를 mutate할수 있게 해준다.
//위의 경우에는 state가 비어있는 array이고, 그 array에 새로운 toDo를 push해준다.
//즉 저기에서는 state를 mutate시키거나 새로운 state object를 리턴 시켜야 한다.push는 아무것도 리턴하지 않는다.
//또한 filter는 state를 mutate시키지 않는다, filter는 새로운 array를 리턴한다.

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       console.log(action); //payload가 나오는데 redux toolkit이 우리에게 제공하는 것으로 너의 액션에게 보내고 싶어하는 정보가 무엇이던지 payload와 함께 보내진다.
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };
*/

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

const store = configureStore({ reducer: toDos.reducer }); //createSlice활용
// const store = configureStore({ reducer }); //redux developer tools를 열수있게(?)해줌
// const store = createStore(reducer);

console.log(toDos.reducer); //action과 reducer가 다 있음

export const { add, remove } = toDos.actions;

// export const actionCreators = {
//   addToDo,
//   deleteToDo,
// };

export default store;
