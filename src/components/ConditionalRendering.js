import { useState } from "react";
import "./ConditionalRendering.css";

export default function ConditionalRendering() {
  const [showContent, setShowContent] = useState(false);

  const changeContent = () => setShowContent(!showContent);

  return (
    <div className="container">
      <div className="textField">
        {showContent === true
          ? "Congrats! You've found the hidden content."
          : "Click the button..."}
      </div>
      <button className="button" onClick={changeContent}>
        Click Me!
      </button>
    </div>
  );
}
