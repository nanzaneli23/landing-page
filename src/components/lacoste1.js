import Style from "./lacoste1.module.css";
function Lacoste1( props )
{
    return(
        <figure className={Style.lacoste1}>
            <img src={props.lacoste1} alt=""></img>
        </figure>
    )
}
export default Lacoste1;