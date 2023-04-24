import { useState } from 'react';
import './App.css';
import Header from './componentes/header/header.js';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/miOrg';
//cuando se trabaja con estados debe estar dentro de un componente y se define antes del return
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  //Ternario --> condición ? semuestra : nosemuestra

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario);
  }
// mostrarFormulario === true ? esto es igual a  mostrarFormulario ?
  return (
    <div>
      <Header/>
      { /*mostrarFormulario ? <Formulario/> : <></>*/}
      {mostrarFormulario && <Formulario/>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
