import "./ResetButton.css";

// export default function ResetButton({ resetCount, resetIncrementValue }) {
//   return (
//     <div className="reset-button-container">
//       <button
//         className="reset-button"
//         onClick={() => [resetCount(0), resetIncrementValue(1)]}
//       >
//         Reset Game
//       </button>
//     </div>
//   );
// }

export default function ResetButton(props) {
  return (
    <div className="reset-button-container">
      <button className="reset-button" onClick={props.reset}>
        Reset Game
      </button>
    </div>
  );
}
