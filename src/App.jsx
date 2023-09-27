//import Products from "./Components/Products";
import { products as InicialProducts } from "./Mooks/products.json";
import Products from "./Components/Products";
import { useState } from "react";
import Header from "./Components/Header";

function App() {
  const [products] = useState(InicialProducts);

  //defino ambos filtros categoria (todos) y precio (minimo)
  const [filters, setfilters] = useState({
    category: "all",
    minPrice: "0",
  });

  //creo la funcion del filtro.

  const filterProduct = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  //creamos la constante que guarda la funcion y entra como parametro la lista de productos
  const filteredProduct = filterProduct(products);

  return (
    <>
      <Header changeFilters={setfilters} />
      <Products Products={filteredProduct} />
    </>
  );
}

export default App;
