/* eslint-disable react/prop-types */
import "./cart.css";

import { useId } from "react";
import { CartIcon, ClearCartIcon } from "../Icons";
import { useCart } from "../../Hooks/useCart";

//Producto a mostrar en la interfaz
function ProductItem({ thumbnail, price, title, quantity, addCart }) {
  return (
    <>
      <li>
        <img src={thumbnail} alt={title} />
        <div>
          <strong>{title}</strong> - {price}
        </div>
        <footer>
          <small>Cantidad:{quantity}</small>
          <button onClick={addCart}>+</button>
        </footer>
      </li>
    </>
  );
}

export default function Cart() {
  const cartCheckBoxId = useId();
  const { cart, clearCart, addCart } = useCart();
  console.log(cart)


  return (
    <>
      {/* boton del carrito*/}
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type="checkbox" hidden />
      {/* este input actua como un botton, que esta oculto y en el css le ponemos la condiciones que cuando este chekeado aparezca lo que contiene el hermano de clase que es el aside cart */}

      {/* muestra del menu carrito */}
      <aside className="cart">
        <ul>
          {cart.map((elproducto) => (
            <ProductItem
              key={elproducto.id}
              addCart={() => addCart(elproducto)}
              {...elproducto}
            />
          ))}
        </ul>

        <button onClick={() => clearCart()}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
