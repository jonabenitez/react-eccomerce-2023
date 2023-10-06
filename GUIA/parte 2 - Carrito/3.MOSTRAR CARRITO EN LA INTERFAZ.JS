import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../Hooks/useCart";




//COMO MOSTRAR EN LA INTEFAZ: //

// SON 2 PASOS EN LA CREACION DE ESTA INTERFAZ


// PRIMERA VERSION:
//EN ESTA PRIMERA INTRODUCIMOS EL CHEQUEO DE LOS PRODUCTOS.

//1) VERIFICANDO SI ESTAN O NO EN EL CARRITO, EN EL MOMENTO QUE SE HACE CLICK EN EL BOTON O SE ACTUALIZA LA INTERFAZ, SE VAN A COMPARAR LOS PRODUCTOS DE LISTA CON LOS PRODUCTOS DEL CARRITO, POR SU ID.

/// PRODUCTOS DE LA LISTA (ID)    VS     PRODUCTO DEL CARRITO (ID)
//   IPHONE    ID: 25                         IPHONE    ID: 25  ---> TRUE.
//   IPHONE    ID: 25             VS           NULL             ---> FALSE.

// isProductInCart = true o false.

//2) AGREGAMOS ESTO AL BOTON: COMPARACION 
//                <button onClick={() => addCart(product)}>
// {isProductInCart ?  // <RemoveFromCartIcon/> : <AddToCartIcon />}
// hasta aca al hacer click en agregar, agrega el carrito y cambia el icono.




function Products({ Products }) {
  const { addCart, checkProductInCart } = useCart();

  return (
    <main>
      <ul>
        {/* entran los productos de la lista filtrada, se mapean */}
        {Products.slice(0, 10).map((product) => {

          // CHECKEO = SI EL PRODUCTO ESTA YA EN EL CARRITO O NO, DEVUELVE TRUE (SI YA ESTA) o FALSE (SI NO EXISTE ESTE PRODUCTO EN EL CARRITO)
          // ESTA FUNCION SE AGREGO DESPUES AL FINAL, PARA PODER MOSTRARLO EN LA INTERFAZ, ACA EN LA DEFINICION DE ESTA FUNCION EN EL CONTEXTO, SE TOMA COMO ARGUMENTO  TODOS LOS PRODUCTOS Y SE LOS VA COMPARANDO EN BUCLE CON LOS PRODUCTOS QUE ESTAN ENE L CARRITO,ESTA PUEDE RETORNAR 2 VALORES:
          // --> TRUE
          //--> FALSE
            //  DONDE SE VA A ALMACENAR EL RESULTADO EN LA VARIABLE isProductInCart.
            // Y CON ESTE RESULTADO, DETERMINAMOS QUE ICONO MOSTAR EN LA ECOMMERCE, SI EL CARRITO DE AGREGAR O EL CARRITO DE ELIMINAR.
            
            // ESTE EVALUACION SE REALIZA CADA VEZ QUE SE PRECIONA EL BOTON PARA AGREGAR UN PRODUCTO Y SE RENDERIZA EL COMPONENTE.
          const isProductInCart = checkProductInCart(product);

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>
                  {product.title} - $ {product.price}{" "}
                </strong>
              </div>
              <div>
                {/* se agrega al boton la funcion de addCart definida y pasada por el contexto  */}
                <button onClick={() => addCart(product)}>

                  {isProductInCart ?
                   <RemoveFromCartIcon/> : <AddToCartIcon />}
                   {/*TRUE                     FALSE
                    si ya esta en el carrito el icono cambia para borrarlo, sino esta en el carrito el icono que esta   */}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}


// 2DA VERCION: AGREGAMOS LAS FUNCIONES DE QUITAR O REMOVER.

//1 en esta segunda version, creamos en el Contexto la funcion de quitar el elemento, es decir, no se quita, se reenderiza todos menos el con el filter.

// SE  HACEN 2 VERIFICACIONES:

//1. VERIFICA SI EL PRODUCTO ESTA EN EL CARRITO Y SI ES ES:
// TRUE --> RENDERIZA LA FUNCION DE REMOVER DEL CARRITO
// SI ES FALSE --> RENDERIZA LA FUNCION DE AGREGAR AL CARRITO.

//2. VERIFICA PARA REENDERIZAR LA PARTE VISUAL.
// TRUE --> RENDERIZA EL ICONO DE REMOVER.
/// SI ES FALSE --> RENDERIZA EL ICONO DE AGREGAR.
<button  className={`${isProductInCart ? "inCart" :"outCart"}`}
onClick={() =>{
  isProductInCart
  ? removeFromCart(product): addCart(product) 
}}
>
{isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
