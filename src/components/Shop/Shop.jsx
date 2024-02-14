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
    <div>
      {shopItems.map((items) => (
        <ShopItem
          key={items.id}
          itemName={items.itemName}
          cost={items.cost}
          bonus={items.bonus}
          buttonClick={buyClick}
        />
      ))}
    </div>
  );
}
