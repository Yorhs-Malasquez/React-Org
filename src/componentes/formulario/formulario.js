import { useState } from "react";
import "./formulario.css";
import CampoTexto from "../campo-texto";
import ListaOpciones from "../lista-opciones";
import Boton from "../boton";
//props son datos que vamos a enviar a nuestros componentes
const Formulario = ()=>{

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    

    const manejarenvio = (e) => {
        e.preventDefault();//permite que la pagina no se visualice el efecto de recarga
        console.log("Manejar el envio");
        let datosEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo
        }
        console.log(datosEnviar);
    }
    return <section className="formulario">
        <form onSubmit={manejarenvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar Nombre" 
                required
                valor={nombre} 
                actualizarValor={actualizarNombre}  
            />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresar Puesto" 
                required
                valor = {puesto} 
                actualizarValor = {actualizarPuesto}  
            />
            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor = {foto} 
                actualizarValor = {actualizarFoto}  
            />
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
            />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}
//tambien se puede agregar una imagen dentro del boton
export default Formulario