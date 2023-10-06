import propTypes from "prop-types";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../Hooks/useCart";


// SE EXTRAN LOS PRODUCTOS DE LA MATRIZ DE PRODUCTS QUE ENTRA COMO PROPS
function Products({ Products }) {
  const { addCart, checkProductInCart, removeFromCart } = useCart();

  return (
    <main>
      <ul>
        {Products.slice(0, 10).map((product) => {
        {/* entran los productos de la lista filtrada, se mapean */}

          const isProductInCart = checkProductInCart(product);
          //2) CHECKEO = si encuenta el producto en el carrito --> true.
          //          sino lo encuentra --> false.
          
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>
                  {product.title} - $ {product.price}{" "}
                </strong>
              </div>
              <div>
                {/* se define el boton: pasando el producto seleccionado como argumento  */}

                {/* HACEMOS 2 VERIFICAIONES:
                1) DENTRO DEL BOTON: cada vez que renderice verificara si esta el producto o no dentro,si esta, re renderiza el remover, sino esta en el carrito, se renderiza agregar (funcionalidad)

                 2)FUERA DEL BOTON:(lo visible) Una vez que 
                  PARA VER QUE LOGO MOSTAR    AGREGAR               O QUITAR           */}

                <button
                  className={`${isProductInCart ? "inCart" : "outCart"}`}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addCart(product);
                  }}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}

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
