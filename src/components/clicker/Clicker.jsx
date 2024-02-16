import { useState, useEffect } from "react";
import "./Clicker.css";
import Shop from "../Shop/Shop";
import ResetButton from "../ResetButton/ResetButton";

export default function Clicker() {
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);

  function handleClick() {
    setCount(count + incrementValue);
  }

  const buyItem = (item) => {
    if (count >= item.props.cost) {
      setCount(count - item.props.cost);
      setIncrementValue(incrementValue + item.props.bonus);
    }
  };

  const resetGame = () => {
    setCount(0);
    setIncrementValue(1);
  };

  useEffect(() => {
    console.log("running useEffect...");
    let interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="clicker-container">
      <p className="count-display">Cookies baked: {count}</p>
      <div className="button-container">
        <button onClick={handleClick} className="clicker-button">
          <img
            src="cartoonCookie.png"
            alt="cartoon image of a cookie"
            className="cookie-image"
          />
        </button>
      </div>
      <Shop purchase={buyItem} />
      <ResetButton reset={resetGame} />
      {/* <ResetButton
        resetCount={setCount}
        resetIncrementValue={setIncrementValue}
      /> */}
    </div>
  );
}
