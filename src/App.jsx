//import Products from "./Components/Products";
import { products as InicialProducts } from "./Mooks/products.json";
import Products from "./Components/Products";
import { useState } from "react";
import Header from "./Components/Header";

//CUSTOM HOOKS: QUE CONTIENE LA LOGICA DE LOS FILTERS.
function useFilters() {
  //defino ambos filtros.
  const [filters, setfilters] = useState({
    category: "all",
    minPrice: "0",
  });

  //          funcion logica de los filtros                                         //
  //esta tiene que filtrar segun los 2 parametros de arriba
  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
        //1. si el fiters category es todos, mostramos todo independiente de la categoria.
        //2. los productos que la categoria sean los mismos que el filter category.
      );
    });
  };

    return { filterProducts, setfilters };
}

function App() {
  //extraccion de los productos ([corchetes] porque es una matriz de datos)
  const [products] = useState(InicialProducts);
  //extraccion de los filtros ({llaves} xq son funciones)
  const { filterProducts, setfilters } = useFilters();
  //creamos la constante que guarda la funcion y entra como parametro la lista de productos, filteredProduct contiene los productos filtrados
  const filteredProduct = filterProducts(products);

  return (
    <>
      <Header changeFilters={setfilters} />
      <Products Products={filteredProduct} />
    </>
  );
}

export default App;
