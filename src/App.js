import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const inputRef = useRef();

  const hanleInputChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log("woof");
    if (inputValue !== inputValue.toLowerCase()) {
      inputRef.current.focus();
      setValidationMessage("");
    } else {
      setValidationMessage("First name can not be all lowercase");
    }
  };

  window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.returnValue = "";
  });

  return (
    <div className="App">
      <div style={{ margin: "10px 0 0 0" }}>
        First name:
        <input
          type="text"
          id="fname"
          name="fname"
          value={inputValue}
          ref={inputRef}
          onChange={hanleInputChange}
        />
        <p style={{ color: "red" }}>{validationMessage}</p>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
