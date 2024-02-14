import "./Shop.css";

export default function Shop(props) {
  return (
    <div className="shop-item-container">
      <p className="shop-id">{props.id}</p>
      <p className="shop-itemName">Item Name: {props.itemName}</p>
      <p className="shop-cost">Item Cost: {props.cost}</p>
      <p className="shop-bonus">Item Bonus: {props.bonus}</p>
      <button className="buy-button">Buy Item</button>
    </div>
  );
}
