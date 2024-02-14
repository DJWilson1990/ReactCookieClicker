import { useState, useEffect } from "react";
import "./Clicker.css";
import Shop from "../Shop/Shop";

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

  useEffect(() => {
    console.log("running useEffect...");
    let interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="clicker-container">
      <p className="count-display">Clicks: {count}</p>
      <button onClick={handleClick} className="clicket-button">
        Click Me
      </button>
      <Shop purchase={buyItem} />
    </div>
  );
}
