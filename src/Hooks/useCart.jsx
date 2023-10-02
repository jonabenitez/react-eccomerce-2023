//importamos el custom Hook de useContext
import {useContext} from 'react'
//importamos el contexto
import {CartContext} from '../context/CartContext'


//consumir el contexto: es un funcion.
export function useCart() {
    const useCartContext = useContext(CartContext)
    return useCartContext
}
