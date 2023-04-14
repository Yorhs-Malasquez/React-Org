import "./campoTexto.css"
const CampoTexto = (props) => {
    //los props son datos que podemos enviar a nuestros componentes
    //console.log("Datos :",props.titulo);
    const placeholderModificado = `${props.placeholder}...`
    return <div className="campo-texto">
        <label>{props.titulo.toUpperCase()}</label>
        <input placeholder={placeholderModificado}></input>
    </div>
}

export default CampoTexto