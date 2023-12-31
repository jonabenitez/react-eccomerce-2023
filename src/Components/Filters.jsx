/* eslint-disable react/prop-types */
import { useFilters } from "../Hooks/useFilters";
import "./filters.css";
import { useId } from "react";

export function Filters() {
  const {filters ,setfilters } = useFilters();
  // ID UNICOS:
  const minPriceFilterID = useId(); // generador de id para el precio minimo ya fultrado en el filters de precio minimo
  const categoryFilterID = useId(); // generador de id para el  ya fultrado en el filters de categoria

  //este estado me permite mostrar por pantalla el precio

  ///////////////////////////////////////////////
  const handleChangePrice = (e) => {

    ///ACTUALIZACION DEL PRECIO MINIMO
    /**si cambia el precio, se hace una copia del estado previo y se actualiza el precio minimo */
    setfilters((estadoprevio) => ({
      ...estadoprevio,
      minPrice: e.target.value,
    }));
    //esta info se copia y se pasa al app por este onChangeFilters
    // este notifica al componente app que hubo cambios en el precio, guarda todo igual salvo el precio si se actualiza.

    // porque entra como parametro y se genera una copia??

    //Inmutabilidad del estado: En muchas bibliotecas de JavaScript, como React, se promueve la inmutabilidad del estado. Esto significa que en lugar de modificar directamente el estado actual, se crea un nuevo objeto o copia del estado con las modificaciones. Al pasar el estado previo como parámetro, la función de actualización puede crear un nuevo estado basado en el estado previo sin modificarlo directamente.

    //UNA VEZ CREADO EL CONTEXTO:
  };

  // ACTUALIZACION DE LA CATEGORIA
  const handleChangeCategory = (e) => {
    setfilters((estadoprevio) => ({
      ...estadoprevio,
      category: e.target.value,
    }));
  };

  return (
    <section className="filters">
      {/* filters rango precio */}
      <div>
        <label htmlFor="price">Precio a partir de:</label>
        <input
          type="range"
          name="price"
          id={minPriceFilterID}
          min="0"
          max="2000"
          onChange={handleChangePrice}
        />
        <span>{filters.minPrice} $</span>
      </div>

      {/* filters categoria */}
      <div>
        <label htmlFor="category">Categoria</label>
        <select
          name="category"
          id={categoryFilterID}
          onChange={handleChangeCategory}
        >
          <option value="all">Todas</option>
          <option value="laptops">Portatiles</option>
          <option value="smartphones">Moviles</option>
        </select>
      </div>
    </section>
  );
}
