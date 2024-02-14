// import { useState } from "react";
import "./App.css";
import Shop from "./components/Shop/Shop";
import Clicker from "./components/clicker/Clicker";
import { shopItems } from "./components/shopItems";

export default function App() {
  return (
    <div>
      <h1>React Clicker Game</h1>
      <Clicker />
      <div className="shop-items-list">
        {shopItems.map((items) => (
          <Shop
            key={items.id}
            itemName={items.itemName}
            cost={items.cost}
            bonus={items.bonus}
          />
        ))}
      </div>
    </div>
  );
}
