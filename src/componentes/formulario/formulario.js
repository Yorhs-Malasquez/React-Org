import "./formulario.css";
import CampoTexto from "../campo-texto";
import ListaOpciones from "../lista-opciones";
import Boton from "../boton";
//props son datos que vamos a enviar a nuestros componentes
const Formulario = ()=>{
    const manejarenvio = (e) => {
        e.preventDefault();//permite que la pagina no se visualice el efecto de recarga
        console.log("Manejar el envio",e);

    }
    return <section className="formulario">
        <form onSubmit={manejarenvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre" required/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto" required/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required/>
            <ListaOpciones />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}
//tambien se puede agregar una imagen dentro del boton
export default Formulario