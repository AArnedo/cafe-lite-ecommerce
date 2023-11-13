import { useContext } from "react";
import { CartContext } from "../../context/ShopingCartContext";
import "./products.css";

export const Item = ({ id, desc, name, price, imgUrl }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCard = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, qty: 1, price }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.qty === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.qty || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return (
    <div className="item-box">
      {quantityPerItem > 0 && (
        <div className="item-quantity">{quantityPerItem}</div>
      )}
      <div className="item-name">{name}</div>
      <img src={imgUrl} height="200" />
      <div className="item-desc">{desc}</div>
      <div className="item-price">${price}</div>

      {quantityPerItem === 0 ? (
        <button className="item-add-button" onClick={() => addToCard()}>
          + Agregar al carro
        </button>
      ) : (
        <button className="item-plus-button" onClick={() => addToCard()}>
          + Agregar Más
        </button>
      )}
      {quantityPerItem > 0 && (
        <button className="item-minus-button" onClick={() => removeItem(id)}>
          - Quitar item
        </button>
      )}
    </div>
  );
};
