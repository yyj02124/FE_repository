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

const useInput = (initailValue) => {
  const [value, setValue] = useState(initailValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { value, onChange };
};
 
export default function App() {
  const name = useInput("Mr. ");
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} {/*...name은 저value={name.value} onChange={name.onChange}를 언팩 해 준것이다.*/} />
    </div>
  );
}