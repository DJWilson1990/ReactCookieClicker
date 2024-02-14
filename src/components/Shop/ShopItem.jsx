export default function ShopItem(props) {
  return (
    <div className="shop-item-container">
      <p className="shop-id">{props.id}</p>
      <p className="shop-itemName">Item Name: {props.itemName}</p>
      <p className="shop-cost">Item Cost: {props.cost}</p>
      <p className="shop-bonus">Item Bonus: {props.bonus}</p>
      <button
        className="buy-button"
        onClick={() => props.buttonClick({ props })}
      >
        Buy Item:
      </button>
    </div>
  );
}
