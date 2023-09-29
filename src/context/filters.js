import { createContext } from "react";

// 1. crear el contexto: FilterContext
export const FiltersContext = createContext();

// 2. crear el provider,(se crea a partir de esta funcion: filtersProvider.) y aca defino la info que voy a proveer, la guardo dentro del FiltersContext.Provider.

//recibe como parametro:
// children: es una prop especial que recibe todo el contenido que se encuentra dentro de las etiquetas <FiltersProvider>. todo lo que este envuelto en este FiltersProvider, va a tener acceso a lo que este definido en esta funcion.

export function FiltersProvider({ children }) {
  <FiltersContext.Provider
    value={{
      category: "all",
      minPrice: 0,
    }}
  >
    {children} 
  </FiltersContext.Provider>;
}
