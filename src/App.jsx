import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Carrito } from "./components/Carrito/Carrito";
import { ShopingCartProvider } from "./context/ShopingCartContext";

export const App = () => {
  return (
    <ShopingCartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carro" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </ShopingCartProvider>
  );
};
