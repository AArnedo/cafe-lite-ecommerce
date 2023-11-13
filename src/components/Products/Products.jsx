import dataList from "../../data/data.json";
import { Item } from "./Item";

export const Products = () => {
  return (
    <>
      <div className="container-products">
        <h1 className="product-txt">¡Añadí tus productos al Carrito!</h1>
        <hr />
        <div className="ItemList">
          {dataList.map((product /* idx */) => {
            return <Item key={product.id} {...product} />;
          })}
        </div>
      </div>
    </>
  );
};
