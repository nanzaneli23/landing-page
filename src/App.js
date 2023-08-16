import Contador from "./components/Contador";
import ExibeNota from "./components/ExibeNota";
import { useState } from "react";
import BoasVindas from "./components/BoasVindas";

function App(props) {

  const [ contador , setContador] = useState(0);
  
  function Aumento()
  {
    setContador( contador + 1);
  }
  function Diminuir()
  {
    setContador( contador - 1);
  }


  let nota= props.nota;
  let aprovado = false;
  let reprovado = false;
  if(nota>5){
    aprovado = true;
  } else{
    reprovado = true;
  }

 
  
  return (
   <>
   { aprovado && 
   <ExibeNota mensagem="Aprovado" nota={props.nota} />
}

   { reprovado && 
     <ExibeNota mensagem="Reprovado" nota={props.nota} />
}
<Contador/>
<BoasVindas/>



  
   </>
  );
}

export default App;
