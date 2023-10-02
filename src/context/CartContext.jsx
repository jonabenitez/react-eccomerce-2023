import { createContext, useState } from "react";


//1. CREACION DEL CONTEXTO. CartContext.
export const CartContext = createContext();


//2. PROVEER EL CONTEXTO: PROVIDER.
export function CartProvider({ children }) {
  // a.  creamos el estado que vamos a necesitar.
  // -> cart y setCart cmo un array vacio, se va a llenar con la cantidad de productos agregados a cart.
  const [cart, setCart] = useState([]);
  
  // b. creamos las funciones.
  
  //ANADIR:
  const addCart = (product) => {

    // 1. verificacion:  verificar si el product esta o no ya en el carrito.
    const productCartIndex = cart.findIndex((item)=> item.id === product.id)
    // a. se busca en el carrito el id que sea igual al id del producto seleccionado.
    // b. devolvera: (Index:la posicion en el array)---> si encuentra similutud.    
    //                o   (-1) ---> (x) sino encuentra similitud. 

    //condicion A SI EXISTE EL PRODUCTO EN EL CARRITO: (3 PASOS)
    if(productCartIndex >= 0) { 
      // como no podemos modificar el array originar, tenemos que CLONAR el array y AGREGAR las modificaciones. 
      
      //2. SI EXISTA YA UN PRODUCTO EN EL CARRITO: (3 pasos)               (1.CLONAR - 2.ANADIR - 3.SETEAR y RETORNAR)      

      //1. clonar:
      const newCart = structuredClone (cart);
      //2. anadir: 
      newCart[productCartIndex].quantity += 1
      //el producto que este en la posicion del productCartIndex, aumentara en 1.
      
      //3.setear y retornar:
      return setCart(newCart)
    }


    //2B.SI NO EXISTE EL PRODUCTO EN EL CARRITO: (3 pasos)                  (1.SETEAR - 2.COPIAR E.P 3.AGREGAR)
    else{
      //
      //1. setear el cart con:
      setCart(estadoprevio =>( [
      //2. se copia y crea un nuevo array por medio del estado previo.
        ...estadoprevio,
        {
          //3. se agrega una copia del objeto que representa el producto, esto se hace para asegurarse de que no se modifique el objeto product original y mantener la inmutabilidad.
          ...product,

      // y se agrega la propidad quantity:1 al producto
          quantity:1
        }]))

    }
  };

  // LIMPIAR EL CARRITO.
  const clearCart = () => {
    setCart([]);
  };

  return <CartContext.Provider value={{
    cart,
    addCart,
    clearCart
  }}>

{children}
  </CartContext.Provider>;
}

