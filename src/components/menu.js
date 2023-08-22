import Foto from "./foto";
import Style from "./menu.module.css"
import Imagem from"./img/lacoste.png"

 
 function Menu( props )
{
    return(
        <>
        
        <div className={Style.Menu}>
            <Foto foto={Imagem}/>
            <div>
                <li>
                    <a href="#">Novidades</a>
                </li>
                <li>
                    <a href="#">Masculino</a>
                </li>
                <li>
                    <a href="#">Feminino</a>
                </li>
                <li>
                    <a href="#">Infantil</a>
                </li>
                <li>
                    <a href="#">Polos</a>
                </li>
                <li>
                    <a href="#">Coleções</a>
                </li>
            </div>
        </div>
          </>
    )
}
export default Menu;