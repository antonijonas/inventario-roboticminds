import {PieChart,Pie,Tooltip} from 'recharts';
import CardKPI from '../components/UI/CardKPI';

const data=[
{name:'Disponible',value:240},
{name:'Prestado',value:70},
{name:'Mantenimiento',value:40}
];

export default function Dashboard(){
return <>
<h1>Dashboard</h1>

<div className="cards">
<CardKPI titulo="Equipos Totales" valor="850"/>
<CardKPI titulo="Disponibles" valor="240"/>
<CardKPI titulo="Prestados" valor="70"/>
<CardKPI titulo="Mantenimiento" valor="40"/>
</div>

<h2>Estado equipos</h2>

<PieChart width={350} height={250}>
<Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}/>
<Tooltip/>
</PieChart>

</>
}
