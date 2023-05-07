import { useState } from "react"
import "./campo.css"
const Campo = (props) => {

    //los props son datos que podemos enviar a nuestros componentes
    //console.log("datos:",props);
    const placeholderModificado = `${props.placeholder}...`

    //destructuración
    const {type="text"} =props
    console.log(type);


    const manejarCambio = (e) =>{
        
        props.actualizarValor(e.target.value)
        //console.log("cambio",e.target.value);
    }
/**
 * className={`campo campo-${type}`} => todos tienen las propiedades de campo pero con $ se puede decir
 * que le agregue el tipo campo-text o campo-color
 * 
 */
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo.toUpperCase()}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor} 
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo
