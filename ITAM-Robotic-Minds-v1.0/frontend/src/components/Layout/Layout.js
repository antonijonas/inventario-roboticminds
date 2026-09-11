import { Link, Outlet } from "react-router-dom";

export default function Layout(){

return (

<div className="app">

<aside>

<h2>
Inventario TIC
</h2>


<nav>

<Link to="/dashboard">
Dashboard
</Link>


<Link to="/inventario">
Inventario
</Link>


<Link to="/prestamos">
Préstamos
</Link>


<Link to="/devoluciones">
Devoluciones
</Link>


<Link to="/mantenimiento">
Mantenimiento
</Link>


<Link to="/reportes">
Reportes
</Link>


<Link to="/usuarios">
Usuarios
</Link>


</nav>

</aside>


<section>


<header>

Administrador TIC | Sistema de Inventario

</header>


<main>

<Outlet />

</main>


</section>


</div>

);

}