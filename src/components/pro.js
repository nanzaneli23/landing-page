import Style from "./pro.module.css";
function Pro( props )
{
    return(
        <figure className={Style.pro}>
            <img src={props.pro} alt=""></img>
        </figure>
    )
}
export default Pro;