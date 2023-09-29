import "./footer.css";
import PropTypes from "prop-types";

function Footer({ filters }) {

  return (
    <footer className="footer">
      Filtros:
        {JSON.stringify(filters, null, 2)}
    </footer>
  );
}

export default Footer;

Footer.propTypes = {
  filters: PropTypes.shape({
    category: PropTypes.string,
    minPrice: PropTypes.string,
  }),
};
