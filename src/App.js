import { useState } from 'react';
import './App.css';
import Header from './componentes/header/header.js';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/miOrg';
import Equipo from './componentes/equipo'
//cuando se trabaja con estados debe estar dentro de un componente y se define antes del return
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);//ocultando el formulario
  //Ternario --> condición ? semuestra : nosemuestra

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario);
  }

//lista de equipos
const equipos = [
  {
    titulo:"Programación",
    colorPrimario:"#57c278",
    colorSecundario:"#d9f7e9"
  }
  ,
  {
    titulo:"Front End",
    colorPrimario:"#82cffa",
    colorSecundario:"#e8f8ff"
  }
  ,
  {
    titulo:"Data Science",
    colorPrimario:"#a6d157",
    colorSecundario:"#f0f8e2"
  }
  ,
  {
    titulo:"Devops",
    colorPrimario:"#e06b69",
    colorSecundario:"#fde7e8"
  }
  ,
  {
    titulo:"UX y Diseño",
    colorPrimario:"#db6ebf",
    colorSecundario:"#fae9f5"
  }
  ,
  {
    titulo:"Móvil",
    colorPrimario:"#ffba05",
    colorSecundario:"#fff5d9"
  }
  ,
  {
    titulo:"Innovación y Gestión",
    colorPrimario:"#ff8a29",
    colorSecundario:"#ffeedf"
  }
]

// mostrarFormulario === true ? esto es igual a  mostrarFormulario ?
  return (
    <div>
      <Header/>
      { /*mostrarFormulario ? <Formulario/> : <></>*/}
      {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)} />}
      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {//siempre que se trabaja con map se debe utilizar key
      //primera forma
        // equipos.map((equipo)=>{
        //   return <Equipo datos={equipo} key={equipo.titulo}/>
        // })
        //segunda forma
        equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo}/>)
      }
    </div>
  );
}

export default App;
