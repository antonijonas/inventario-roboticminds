export default function Modal({titulo,children,cerrar}){
return <div className="modal">
<div className="modal-box">
<h2>{titulo}</h2>
{children}
<button onClick={cerrar}>Cerrar</button>
</div>
</div>
}
