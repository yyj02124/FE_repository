/* import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"Continue"} />
    </div>
  );
} */

/* import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
    console.log(event.target.value);
  };

  // console.log("i run all the time");
  // const iRunOnlyOnce = () => {
  //   console.log("i run only once");
  // };
  // useEffect(iRunOnlyOnce, []);

  useEffect(() => {
    console.log("i run only once");
  }, []); //dependencies가 없기 때문에 한번만 실행되는데 워닝이 생김.

  useEffect(() => {
    // if (keyword !== "" && keyword.length > 1) {
    // console.log("Search for", keyword);
    console.log("I run when 'keyword' changes.");
    // }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);

  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  ); //state가 변경이 되면 모든 code들이 항상 다시 실행된다.
} */

import { useEffect, useState } from "react";

function Hello() {
  function destroyedFn() {
    console.log("destroyed :(");
  }
  function effectFn() {
    console.log("created :)");
    return destroyedFn;
  }

  useEffect(effectFn, []);
  return <h1>Hello!</h1>;
}

/*   useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :( "); // destroyed function : component가 파괴될 때 뭔가 할 수 있도록 한다.
  }, []);
  return <h1>Hello</h1>;
} */

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
}
