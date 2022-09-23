import { useState } from "react";
import "./Form.css";

export default function Form() {
  // we can write export default this way instead of at bottom

  const [inputList, setInputList] = useState([]);
  const [val, setVal] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    const temp = [...inputList, val];
    console.log(temp);
    setInputList(temp);
  };

  const handleChange = function (e) {
    setVal(e.target.value);
    // this changes val to the user input (string)
  };

  return (
    <div className="formApp">
      <form className="formContainer" onSubmit={handleSubmit}>
        <input
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
          placeholder="input something..."
          className="inputField"
          onChange={handleChange}
        ></input>
        <input className="button" type="submit"></input>
      </form>
      <div className="displayContainer">
        <p>List of Submitted Strings: </p>
        <ul>
          <span>
            {inputList.map((i) => (
              <li>{i}</li>
            ))}
          </span>
        </ul>
      </div>
    </div>
  );
}
