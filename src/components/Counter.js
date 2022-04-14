import { useState } from "react";
import CounterUI from "./CounterUI";
import "../styling/counterUIStyle.css";

const Counter = () => {
  const [currentNumber, setCurrentNumber] = useState(0);

  return (
    <div className="counter--container">
      <CounterUI model={{ currentNumber, setCurrentNumber }} />
    </div>
  );
};

export default Counter;
