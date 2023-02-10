import { Link, useLocation } from "@remix-run/react";
import imagen from '../../public/img/carrito.png'

function Navegacion() {

    const location = useLocation();

  return (
    <div className="navegacion">
    <Link
        to='/'
        className={location.pathname === '/' ? 'active' : ''}
        >
        Inicio
    </Link>
    <Link
        to='/nosotros'
        className={location.pathname === '/nosotros' ? 'active' : ''}
        >
        Nosotros
    </Link>
    <Link
        to='/guitarras'
        className={location.pathname === '/Guitarras' ? 'active' : ''}
        >
        Guitarras
    </Link>
    <Link
        to='/blog'
        className={location.pathname === '/blog' ? 'active' : ''}
        >
        Blog
    </Link>
    <Link
        to='/carrito'
        >
        <img src={imagen} alt="Carrito de compras" />
    </Link>
</div>
  )
}

export default Navegacion