import propTypes from "prop-types";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../Hooks/useCart";
// SE EXTRAN LOS PRODUCTOS DE LA MATRIZ DE PRODUCTS QUE ENTRA COMO PROPS
function Products({ Products }) {
  const { addCart, checkProductInCart, removeFromCart } = useCart();


  return (
    <main>
      <ul>
        {/* entran los productos de la lista filtrada, se mapean */}
        {Products.slice(0, 10).map((product) => {

          //2) CHECKEO = si encuenta el producto en el carrito --> true.
          //          sino lo encuentra --> false.
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

                {/* se agrega al boton la funcion de addCart definida y 1_ 1) pasada el producto clickeado como argumento  */}
                <button onClick={() => addCart(product)}>

                  {isProductInCart ?
                   <RemoveFromCartIcon/> : <AddToCartIcon />}
                   {/*3) TRUE                     FALSE
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

/// VALIDACION

Products.propTypes = {
  Products: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      id: propTypes.number.isRequired,
      thumbnail: propTypes.string.isRequired,
      price: propTypes.number.isRequired,
    })
  ).isRequired,
};
