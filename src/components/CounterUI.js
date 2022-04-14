import Buttons from "./Buttons";
import "../styling/counterUIStyle.css";

const CounterUI = (props) => {
  return (
    <div>
      <h1>{props.model.currentNumber}</h1>
      <Buttons updateCount={props.model.setCurrentNumber} />
    </div>
  );
};
export default CounterUI;
