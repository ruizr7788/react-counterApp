import "../styling/buttonsStyle.css";

const Buttons = (props) => {
  const handleChange = (e) => {
    e.target.className === "increaseBTN"
      ? props.updateCount((prevCount) => prevCount + 1)
      : props.updateCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="buttons--container">
      <button className="decreaseBTN" onClick={handleChange}>
        Decrease
      </button>
      <button className="increaseBTN" onClick={handleChange}>
        Increase
      </button>
    </div>
  );
};

export default Buttons;
