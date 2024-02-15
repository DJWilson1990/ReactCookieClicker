import "./App.css";
import Clicker from "./components/clicker/Clicker";

export default function App() {
  return (
    <div>
      <h1>React Clicker Game</h1>
      <h3>Cookie factory</h3>
      <p className="rules">
        Click the cookie to bake more cookies. You can buy upgrades to speed up
        production.
      </p>
      <Clicker />
    </div>
  );
}
