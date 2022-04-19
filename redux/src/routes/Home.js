import React, { useState } from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";
import { actionCreators, add } from "../store";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    console.log(text);
    setText("");
    // dispatch(addToDo({text}))
  }
  return (
    <>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((ToDo) => (
          <Todo {...ToDo} key={ToDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state }; //첫번째(state)는 store reducer state에서 온 것
} //Redux state로 부터 home(component)에 prop으로 전달한다는 것

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(add(text)),
  };
}

// function getCurrentState(state, ownProps) {
//   console.log(state,ownprops); =>첫번째 argument는 Ree=dux store에서 온 state이고,2번째는 component이 props이다.
// return {sexy: true} => Home component의 prop으로 추가가 된다.
// }
// export default connect(getCurrentState )(Home);

//function mapDispatchToProps(dispatch,ownProps){
//  console.log(dispatch);
// }

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// connect는 component를 store에 연결 시켜준다.
//connect는 2개의 argument를 가지는데, 하나는 state이고 다른하나는dispatch이다.(둘중 하나를 고를수 있다.)
//함수를 만들어서 connect를 사용하여 , 금방만든 function과 component를 연결한다.
