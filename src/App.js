import { useState } from 'react';
import {v4 as uuid } from "uuid"; //para crear ids
import './App.css';
import Header from './componentes/header/header.js';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/miOrg';
import Equipo from './componentes/equipo'
import Footer from './componentes/footer/footer';
//cuando se trabaja con estados debe estar dentro de un componente y se define antes del return
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);//ocultando el formulario
  const [colaboradores, actualizarColaboradores] = useState([
    {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }]);
  //Ternario --> condición ? semuestra : nosemuestra
  const [equipos, actualizarEquipos] = useState( [
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9"
    }
    ,
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff"
    }
    ,
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0f8e2"
    }
    ,
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#e06b69",
      colorSecundario: "#fde7e8"
    }
    ,
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#db6ebf",
      colorSecundario: "#fae9f5"
    }
    ,
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#ffba05",
      colorSecundario: "#fff5d9"
    }
    ,
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#ff8a29",
      colorSecundario: "#ffeedf"
    }
  ])

  //console.log(uuid()); muestra el codio aleatorio
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("nuevo Colaborador :", colaborador);
    //spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colab", id);

    //filter nos devuelve un nuevo arreglo,
    //filter es una propiedad de los arreglos
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores);
  }

  //Actualizar Color de Equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo)=>{
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }
  
  //lista de equipos

  // mostrarFormulario === true ? esto es igual a  mostrarFormulario ?
  return (
    <div>
      <Header />
      { /*mostrarFormulario ? <Formulario/> : <></>*/}
      {mostrarFormulario && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador = {registrarColaborador}
      />}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {//siempre que se trabaja con map se debe utilizar key
        //primera forma
        // equipos.map((equipo)=>{
        //   return <Equipo datos={equipo} key={equipo.titulo}/>
        // })
        //segunda forma
        equipos.map((equipo) => <Equipo
          datos={equipo} 
          key={equipo.titulo} 
          //con esta linea se filtra a los integrantes por equipos
          colaboradores={colaboradores.filter(colaborador=>colaborador.equipo === equipo.titulo)}
          eliminarColaborador = {eliminarColaborador}
          actualizarColor = {actualizarColor}
        />)
      }
      <Footer/>
    </div>
  );
}

export default App;
