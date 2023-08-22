
import Imagem from "./components/img/telas.png";
import Menu from "./components/menu";
import Telas from "./components/telas";
import Img from "./components/img/inicio.png"
import Inicio from"./components/inicio"
import Img1 from "./components/img/pro.png"
import Pro from "./components/pro";
import Rodape from "./components/rodape";

function App() {

  
  return (
   <>
   
   <Menu/>
  
   <Telas telas={Imagem}/>
   <h2 className="texto">Principais novidades da estação</h2>
   <Inicio inicio={Img}/>
  <Pro pro={Img1}/>
  <Rodape/>
  
   </>
  );
}

export default App;
