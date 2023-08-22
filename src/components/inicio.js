import Style from "./inicio.module.css";
function Inicio( props )
{
    return(
        <figure className={Style.inicio}>
            <img src={props.inicio} alt=""></img>
        </figure>
    )
}
export default Inicio;