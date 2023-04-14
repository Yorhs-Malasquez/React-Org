import "./formulario.css";
import CampoTexto from "../campo-texto";
import ListaOpciones from "../lista-opciones";
//props son datos que vamos a enviar a nuestros componentes
const Formulario = ()=>{
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto"/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto"/>
            <ListaOpciones/>
        </form>
    </section>
}

export default Formulario