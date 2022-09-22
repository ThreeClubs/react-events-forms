import { useState } from "react";
import "./Form.css"

export default function Form() {
  // we can write export default this way instead of at bottom

  const [inputList, setInputList] = useState([]);
  const [val, setVal] = useState('');

  const handleSubmit = function (event) {
    event.preventDefault();
    const temp = [...inputList, val];
    console.log(temp);
    setInputList(temp);
  };

  const handleChange = function (event) {
    setVal(event.target.value);
    // this changes val to the user input (string
  };

  return (
    <div className="formApp">
      <form className="formContainer" onSubmit={handleSubmit}>
        <input placeholder="input something..." className="inputField" onChange={handleChange}></input>
        <input className="button" type="submit"></input>
      </form>
      <div className="displayContainer">
        <p>List of Submitted Strings: </p>
        <ul>
          {inputList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
  
}
