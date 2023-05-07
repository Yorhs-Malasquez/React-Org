import "./colaborador.css";
import {AiFillCloseCircle} from "react-icons/ai"
const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo,id} = props.datos;
    const {colorPrimario, eliminarColaborador} = props
    /*
onClick={() => eliminarColaborador(id)} la funcion eliminar se coloca dentro del arrow function
para que solo se pueda eliminar el colaborador dando el click, en caso contrario se eliminaria 
automaticamente sin siquiera darle el click
    */
    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)}>D</AiFillCloseCircle>
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Colaborador