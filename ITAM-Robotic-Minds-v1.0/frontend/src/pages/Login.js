import {useNavigate} from 'react-router-dom';

export default function Login(){
const nav=useNavigate();

return <div className="login">
<h1>Inventario TIC</h1>
<input placeholder="Usuario"/>
<input placeholder="Contraseña" type="password"/>
<button onClick={()=>nav('/dashboard')}>Ingresar</button>
</div>
}
