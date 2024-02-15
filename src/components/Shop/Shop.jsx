import "./Shop.css";
import ShopItem from "./ShopItem.jsx";
import { shopItems } from "../Items.js";

export default function Shop(props) {
  function buyClick(item) {
    {
      props.purchase(item);
    }
    // console.log(item);
  }

  return (
    <div className="shop-container">
      {shopItems.map((items) => (
        <ShopItem
          key={items.id}
          imgLink={items.imgLink}
          itemName={items.itemName}
          cost={items.cost}
          bonus={items.bonus}
          buttonClick={buyClick}
        />
      ))}
    </div>
  );
}
