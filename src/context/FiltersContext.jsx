/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// 1. CREAR UN CONTEXTO: FilterContext
export const FiltersContext = createContext();

// 2. PROVEER EL CONTEXTO:
//crear el provider,(se crea a partir de esta funcion: filtersProvider.) y aca defino la info que voy a proveer, la guardo dentro del FiltersContext.Provider.

//recibe como parametro:
// children: es una prop especial que recibe todo el contenido que se encuentra dentro de las etiquetas <FiltersProvider>. todo lo que este envuelto en este FiltersProvider, va a tener acceso a lo que este definido en esta funcion.
// FiltersContext --accede-->Provider y envuelve lo que le pasemos como children, lo que englovemos dentro


// PRIMERA DEFINICION DEL CONTEXTO:
// definimos de forma estatica la categoria y el precio, IGUAL QUE EN EL HOOK, pero no nos sirve estatico ya que no funciona.

// export function FiltersProvider ({children}){
//   return <FiltersContext.Provider value={{
//     category:'all',
//     minPrice:0
//     }}
//     >{
//       children}
//     </FiltersContext.Provider>
// }


// DEFINICION DINAMICA: con un manejador de estado, el useState.

export function FiltersProvider ({children}){
//redefinimos los filtros pero ahora con estado, de forma dinamica.
const [filters, setfilters] = useState({
  category:'all',
  minPrice:100
  })


  return <FiltersContext.Provider value={{filters,setfilters}}
    >{
      children}
    </FiltersContext.Provider>
}
