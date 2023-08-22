
import Style from "./rodape.module.css"
function Rodape( props )
{
    return(
        <section className={Style.rodape}>
            <h2>{props.rodape}</h2>
            <h2>Entre em contato conosco para nos avaliar e falar sobre suas experiências:</h2>
        <div>
            <li>
            EMAIL:lacoste@gmail.com
            </li>
            <p></p>
            <li>
            @lacoste_brasil
            </li>
            <p></p>
            <li>
          Telefone:(11)99456-4589
            </li>
            <p></p>
            <li>
            Facebook:lacostbrasil2023
            </li>
        </div>
        </section>
    )
}
export default Rodape;