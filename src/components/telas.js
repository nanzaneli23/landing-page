import Style from "./telas.module.css";

function Telas( props )
{
    return(
        <>
        <h2>Novidades para todos os gostos de variados tipos e tonalidades de cor!!</h2>

<figure className={Style.Telas}>
    <img src={props.telas} alt=""></img> 
</figure>
        </>
       
    )
}
export default Telas;