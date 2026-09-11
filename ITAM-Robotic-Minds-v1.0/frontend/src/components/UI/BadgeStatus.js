export default function BadgeStatus({estado}){
return <span className={'badge '+estado.toLowerCase()}>
{estado}
</span>
}
