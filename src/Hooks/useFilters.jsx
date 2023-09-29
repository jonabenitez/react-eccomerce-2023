import {useContext} from 'react'
import {FiltersContext,} from '../context/FiltersContext'

export function useFilters() {

    //defino ambos filtros como OBJETO.
    //->categoria, -> precio ===>  filters.
    //-> setProducts ===> manejador de; estado los filtros.
    
    // const [filters, setfilters] = useState({
    //   category: "all",
    //   minPrice: "0",
    // });
  
    //REEMPLAZAMOS LA DEFINICION DEL OBJETO DE LOS FILTROS POR LA CREADA EN EL CONTEXTO
    const {filters,setfilters} = useContext(FiltersContext)
  
    //funcion logica de los filtros.
    // productos filtrados ===> products.
    const filterProducts = (products) => {
      return products.filter((product) => {
        return (
          product.price >= filters.minPrice &&
          (filters.category === "all" || product.category === filters.category)
        );
      });
    };
  
    return { filterProducts, setfilters, filters };
  }
  