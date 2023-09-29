//import Products from "./Components/Products";
import { products as InicialProducts } from "./Mooks/products.json";
import Products from "./Components/Products";
import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

//CUSTOM HOOKS: QUE CONTIENE LA LOGICA DE LOS FILTERS.
function useFilters() {
  //defino ambos filtros como OBJETO.
  //->categoria, -> precio ===>  filters.
  //-> setProducts ===> manejador de los filtros.
  const [filters, setfilters] = useState({
    category: "all",
    minPrice: "0",
  });

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

function App() {
  //extraccion de los filtros. ({llaves} xq son funciones)
  const { filterProducts, setfilters, filters } = useFilters();

  //extraccion de los productos. ([corchetes] porque es una matriz de datos)
  const [products] = useState(InicialProducts);

  //aplicamos la funcion que filtra a la lista de productos y lo guardamos en una variable ===> filteredProduct.
  const filteredProduct = filterProducts(products);

  return (
    <>
      <Header changeFilters={setfilters} />
      <Products Products={filteredProduct} />
      <Footer filters={filters} />
    </>
  );
}

export default App;
