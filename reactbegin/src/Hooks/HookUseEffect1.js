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

//이와같은걸로 mousehover도 만들수 있다.

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/*
const useConfirm = (message, onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function"){
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Deleting the world");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/*버튼을 클링 하면 confirmDelete를 부르고,
ㅣ떄 confirmDelete는 confirmAction이고 이게 이제 browser의 confirm 애 가고
이게 true면 callback이 실행되면서 deleteWorld를 실행 시키게 된다*/

/*
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};
const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
//웹사이트를 끌떄 이 웹사이트를 나가시겠습니까? 나갈경우 항목이 저장되지 않을수도 있습니다가 뜸
*/
