import {Filters} from './Filters'
import PropTypes from 'prop-types';

function Header( {changeFilters}) {
  return (
    <header>
    <div>React Shop</div>
    <Filters onChangeFilters = {changeFilters} />

    </header>

  )
}

export default Header


Header.propTypes = {
  changeFilters: PropTypes.func.isRequired
}