import { useState, useEffect } from "react";
import "./Clicker.css";

export default function ClickToScore() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

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
    </div>
  );
}
