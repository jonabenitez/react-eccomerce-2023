/* eslint-disable react/prop-types */
import { useFilters } from "../Hooks/useFilters";
import "./footer.css";
import {useCart} from '../Hooks/useCart'
function Footer() {
  const {cart} = useCart()

 const {filters} = useFilters()
  return (
    <footer className="footer">
      Filtros:
      {JSON.stringify(filters, null, 2)}
      CARRITO:
      {JSON.stringify(cart, null, 2)}

    </footer>
  );
}

export default Footer;

// Footer.propTypes = {
//   filters: PropTypes.shape({
//     category: PropTypes.string,
//     minPrice: PropTypes.number,
//   }),
// };
