import { useState } from "react"
import "./campoTexto.css"
const CampoTexto = (props) => {

    //los props son datos que podemos enviar a nuestros componentes
    console.log("datos:",props);
    const placeholderModificado = `${props.placeholder}...`

    const manejarCambio = (e) =>{
        
        props.actualizarValor(e.target.value)
        console.log("cambio",e.target.value);
    }

    return <div className="campo-texto">
        <label>{props.titulo.toUpperCase()}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor} 
            onChange={manejarCambio}
        />
    </div>
}

export default CampoTexto
