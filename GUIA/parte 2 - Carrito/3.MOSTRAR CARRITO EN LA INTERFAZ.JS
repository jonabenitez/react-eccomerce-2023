import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../Hooks/useCart";
// SE EXTRAN LOS PRODUCTOS DE LA MATRIZ DE PRODUCTS QUE ENTRA COMO PROPS
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
                    si ya esta en el carrito el icono cambia para borrarlo, sino esta en el carrito el icono qued en   */}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Products;
