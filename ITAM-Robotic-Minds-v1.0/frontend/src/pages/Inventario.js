import BadgeStatus from '../components/UI/BadgeStatus';

const equipos=[
{ping:'RM-MTZ-LPT-001',equipo:'Dell Latitude',estado:'DISPONIBLE'},
{ping:'RM-MTZ-PC-002',equipo:'HP Prodesk',estado:'PRESTADO'},
{ping:'RM-GYE-MON-001',equipo:'Samsung Monitor',estado:'MANTENIMIENTO'}
];

export default function Inventario(){
return <>
<h1>Catálogo de Equipos</h1>

<input placeholder="Buscar Ping"/>

<table>
<thead>
<tr><th>Ping</th><th>Equipo</th><th>Estado</th></tr>
</thead>
<tbody>
{equipos.map(e=>
<tr key={e.ping}>
<td>{e.ping}</td>
<td>{e.equipo}</td>
<td><BadgeStatus estado={e.estado}/></td>
</tr>)}
</tbody>
</table>
</>
}
