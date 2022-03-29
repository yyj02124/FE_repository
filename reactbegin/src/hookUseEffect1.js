import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
/*
const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/

//2.useRef()를 만들었고아래엣 같은 reference를 return 했다.
const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return; //10.이경우에 function은 아무일도 발생하지 않는다. 함수가 텅 비었기때문
  }
  const element = useRef();
  useEffect(
    () => {
      //8.useEffect는 componentDidMount상태에 동작하는데,
      if (element.current) {
        element.current.addEventListener("click", onClick);
      } //5.이 useEffect에서 하는 일은 referent안에 element.current가 있는지 확인 하는것,그리고 조건이 만족되면 click이벤트를 부여한다,즉 component가 mount되면 event를 추가!
      return () => {
        //8.componentWillunmount일 경우에 실행이 된다. 이렇게 하는 이유는 component가 mount되지 않았을때 eventlistener가 배치되게 하고싶지 않기 때문
        if (element.current) {
          element.current.removeEcentListener("click", onClick);
        }
      };
    },
    [] /*9.dependency가 없다. dependency가 아예없어진다면 매번 update될때마다 이벤트 리스너가 추가 된다. */
  );
  return element;
}; //3.그리고 주어진 reference를

const App = () => {
  /* 0.const potato = useRef(); // useRef()예시
  setTimeout(() => console.log(potato.current.focus()), 5000); */
  const sayHello = () => console.log("say hello"); //6. 클릭 이벤트가 실행이되면 sayHello함수가 실행,console.log("say hello")가 찍힌다.
  //7. 이 모든건 reference가 존재해서 발생
  const title = useClick(sayHello); //1.useClick을 사용해서
  return (
    <div className="App">
      {/* 4.title에 줌 => 이로인해 상호작용이 가능해짐*/}
      <h1 ref={title}>Hi</h1>
      {/* 0.<input // ref={potato}  placeholder="la" /> */}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
