import propTypes from "prop-types";
import { AddToCartIcon } from "./Icons";
import {useCart } from '../Hooks/useCart'
// SE EXTRAN LOS PRODUCTOS DE LA MATRIZ DE PRODUCTS QUE ENTRA COMO PROPS
function Products({ Products }) {
  const { addCart }=useCart();
  
  return (
    <main>
      <ul>
        {Products.slice(0, 10).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>
                {product.title} - $ {product.price}{" "}
              </strong>
            </div>
            <div>
              <button onClick={()=>(addCart(product))}>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
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
