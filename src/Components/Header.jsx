import {Filters} from './Filters'
import PropTypes from 'prop-types';

function Header() {
  return (
    <header>
    <div>React Shop</div>
    <Filters />

    </header>

  )
}

export default Header


Header.propTypes = {
  changeFilters: PropTypes.func
}