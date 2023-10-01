//import Products from "./Components/Products";
import { products as InicialProducts } from "./Mooks/products.json";
import Products from "./Components/Products";
import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {useFilters} from './Hooks/useFilters'
import Cart from "./Components/Carrito/Cart";

//CUSTOM HOOKS: QUE CONTIENE LA LOGICA DE LOS FILTERS => lo llevamos a una carpeta especifica.

function App() {
  //extraccion de los filtros. ({llaves} xq son varios y lo extraigo como objetos)
  const { filterProducts } = useFilters();

  //extraccion de los productos. ([corchetes] porque es una matriz de datos)
  const [products] = useState(InicialProducts);

  //aplicamos la funcion que filtra a la lista de productos y lo guardamos en una variable ===> filteredProduct.
  const filteredProduct = filterProducts(products);

  return (
    <>
      <Header/>
      <Cart/>
      <Products Products={filteredProduct} />
      <Footer />
    </>
  );
}

export default App;
