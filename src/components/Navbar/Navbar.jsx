import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/ShopingCartContext";
import "./navbar.css";

export const Navbar = () => {
  const [cart /* setCart */] = useContext(CartContext);

  const qty = cart.reduce((acc, curr) => {
    return acc + curr.qty;
  }, 0);

  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link className="seeHome" to={"/"}>
          <h1 className="navbar-logo">Café - Lite</h1>
        </Link>
        <Link className="seeCarrito" to={"/carro"}>
          <span className="cart-count">{qty} 🛒</span>
        </Link>
      </nav>
    </div>
  );
};
