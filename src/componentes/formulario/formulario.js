import { useState } from "react";
import "./formulario.css";
import Campo from "../campo";
import ListaOpciones from "../lista-opciones";
import Boton from "../boton";
//props son datos que vamos a enviar a nuestros componentes
const Formulario = (props) => {
    //useState para colaborador
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
   

    //useState para equipo
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarenvio = (e) => {
        e.preventDefault();//permite que la pagina no se visualice el efecto de recarga
        console.log("Manejar el envio");
        let datosEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo
        }
        registrarColaborador(datosEnviar);
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color});//con esta linea el titulo y colo ya viene definio en un objeto
    }

    return <section className="formulario">
        <form onSubmit={manejarenvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresar Nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <Campo
                titulo="Puesto"
                placeholder="Ingresar Puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <Campo
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo
                titulo="Titulo"
                placeholder="Ingresar Título"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar el color en Héxa"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>
                Registrar Equipo
            </Boton>
        </form>
    </section>
}
//tambien se puede agregar una imagen dentro del boton
export default Formulario