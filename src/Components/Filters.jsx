import "./filters.css";
import { useState } from "react";
import PropTypes from 'prop-types';


export function Filters({ onChangeFilters }) {
  
  const [minPrice, setMinprice] = useState(0);

  const handleChangePrice = (e) => {
    //se actualiza el estado del minPrice
    setMinprice(e.target.value);

    /**si cambia el precio, se hace una copia del estado previo y se actualiza el precio minimo */
    onChangeFilters((estadoprevio) => ({
      ...estadoprevio,
      minPrice: e.target.value,
    }));
    //esta info se copia y se pasa al app por este onChangeFilters
    // este notifica al componente app que hubo cambios en el precio 
  };

  const handleChangeCategory = (event) => {
    onChangeFilters(estadoprevio => ({
      ...estadoprevio,
      category: event.target.value
    }))
  }


  return (
    <section className="filters">
      {/* filters rango precio */}
      <div>
        <label htmlFor="price">Precio a partir de:</label>
        <input
          type="range"
          name="price"
          id="price"
          min="0"
          max="2000"
          onChange={handleChangePrice}
        />
        <span>{minPrice} $</span>
      </div>

      {/* filters categoria */}
      <div>
        <label htmlFor="category" >Categoria</label>
        <select name="category" id="category"  onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portatiles</option>
          <option value="smartphones">Moviles</option>
        </select>
      </div>
    </section>
  );
}

Filters.propTypes = {
  onChangeFilters: PropTypes.func
}