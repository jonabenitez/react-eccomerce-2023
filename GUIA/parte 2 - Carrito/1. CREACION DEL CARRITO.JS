// CREACION DEL CARRITO

// 1. USArEAMOS useID para crear un ID unico, este lo vamos a compartir con el input y el label, que nos sirve para definirlos como hermanos, que luego en el css aplicaremos las propiedades para que cuando este aparezca crekeado aparezca el menu slice en la interfaz.

// 2. CREAMOS EL MENU SLICE: UL>LI>IMG - DIV(PRODUCTO Y PRECIO)-FOOTER (CANTIDAD Y BOTON +).

export default function Cart() {
  const cartCheckBoxId = useId();

  return (
    <>
      {/* boton del carrito*/}
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>

      <input id={cartCheckBoxId} type="checkbox" hidden />
      {/* este input actua como un botton, que esta oculto y en el css le ponemos la condiciones que cuando este chekeado aparezca lo que contiene el hermano de clase que es el aside cart */}

      {/* muestra del menu carrito */}
      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
              alt="Iphone"
            />
            <div>
              <strong>Iphone</strong> - $1500
            </div>
            <footer>
              <small>Cantidad:1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
      </aside>
    </>
  );
}
