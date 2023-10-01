import { createContext, useState } from "react";

//porque creamos un contexto: porque necesitamos un estado global que controle la cantidad de productos, ya que cambiara tanto el la lista de los productos como en el  aside del carrito.

//1. creacion del contexto
export const CartContext = createContext();

//2. creacion de Provider

// a.  creamos el estado que vamos a necesitar cart y setCart cmo un array vacio, que se va a llenar con la cantidad de productos y el clearCart, que volvera al array vacion.

// b. creamos las funciones que permitiran: anadir, setear y limpiar el carrito

export function CartProvider({ children }) {
  const [Cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productCartIndex = Cart.findIndex((item) => item.id === product.id);

    if (productCartIndex >= 0) {
      const newCart = structuredClone(Cart);
      newCart[productCartIndex].quantity += 1;
    }
  };

  const clearToCart = () => {
    setCart([]);
  };

  <CartContext.Provider
    value={{
      Cart,
      addToCart,
      clearToCart,
    }}
  >
    {children}
  </CartContext.Provider>;
}
