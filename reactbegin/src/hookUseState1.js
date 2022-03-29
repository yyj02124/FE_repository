import { useState } from "react";
import "./styles.css";

/* const App =() =>{
    const [item, setItem] = useState(1);
    const increaseItem = () => setItem(item+1);
    const decreaseItem = () => setItem(item-1);

    return(
        <div>
            <h1>Hello</h1>
            <button onClick={increaseItem}>incleaseButton</button>
            <button onClick={decreaseItem}>decleaseButton</button>
        </div>
    )

} */

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event; //const value = event.target.value;

    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
      //여기의 validator(value)는 boolean이다.
    }

    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default function App() {
  const maxLen = (value) => value.length <= 10; //maxLen의 리턴값은 booleandl 나온다.(ex)helix를 쳤을때 value.length <= 10가 true(5글자니까))
  //이 maxLen은 함수 이다.
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input
        placeholder="Name"
        {...name} /*{...name}은 저 value={name.value} onChange={name.onChange}를 언팩 해 준것이다.*/
      />
    </div>
  );
}

/*맨처음에 maxLen과 name이 설정이 되고 name에 useInput("Mr.", maxLen)들어가서 useInput을 실행
"Mr"가 value로 들어가 초기화 해주고 그대로 return이 되는게 첫 렌더이다
그리고 maxLen의 value가 onchange되면 
onChange가 이벤트를 리슨해 value에 값을 집어넣고 value.length<=10 boolean값을
 리턴해 validator에 집어넣어
 (정확히는 maxLen이라는 함수를 validator에 넣어서 validator는 함수고, 
  그 validator의 value값은 maxLen이 return값인 boolean이다.)
  willupdate를 변화시킨다. ㄱ리하여 willupdate가 true면 if (willUpdate) 가 트루값이라 
  setValue가 value를 받아 동작한다.

 */
