//Importaciones de todos los componentes utilizados
import { useContext } from "react";
import { CartContext } from "../../context/ShopingCartContext";
import { Navbar } from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Swal from "sweetalert";
import "./carrito.css";

export const Carrito = () => {
  const [cart, _setCart] = useContext(CartContext);

  //Realizo la lógica para obtener la cantidad de items agregados al carrito
  const qty = cart.reduce((acc, curr) => {
    return acc + curr.qty;
  }, 0);

  //Realizo la lógica para obtener el precio total de la compra en el carrito
  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.qty * curr.price;
  }, 0);

  //Muestro la alerta que aparecerá cuando se de click en 'comprar'
  const mostrarAlerta = () => {
    Swal({
      title: "¡Muchas Gracias!",
      text: "Tu compra fue registrada",
      icon: "success",
    });
  };

  //Retorno lo que se va a visualizar por pantalla
  return (
    <>
      <Navbar />
      <div className="container-carro">
        <div className="cart-art">Cantidad de artículos: {qty}</div>
        <div className="cart-price">Total: ${totalPrice}</div>
        <div className="btn-carro">
          <button className="compra-carro" onClick={() => mostrarAlerta()}>
            Comprar
          </button>
          <Link to={"/"}>
            <button className="volver-carro">Volver</button>
          </Link>
        </div>
      </div>
    </>
  );
};
