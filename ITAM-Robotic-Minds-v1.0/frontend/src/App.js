import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import Inventario from './pages/Inventario';
import Prestamos from './pages/Prestamos';
import Devoluciones from './pages/Devoluciones';
import Mantenimiento from './pages/Mantenimiento';
import Reportes from './pages/Reportes';
import Usuarios from './pages/Usuarios';

export default function App(){
return <BrowserRouter>
<Routes>
<Route path="/" element={<Login/>}/>
<Route element={<Layout/>}>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/inventario" element={<Inventario/>}/>
<Route path="/prestamos" element={<Prestamos/>}/>
<Route path="/devoluciones" element={<Devoluciones/>}/>
<Route path="/mantenimiento" element={<Mantenimiento/>}/>
<Route path="/reportes" element={<Reportes/>}/>
<Route path="/usuarios" element={<Usuarios/>}/>
</Route>
</Routes>
</BrowserRouter>
}
