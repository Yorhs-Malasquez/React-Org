import "./listaopciones.css"
const ListaOpciones = (props)=>{
    //para recorrer el arreglo se usa map
    //Metodo Map -> arreglo.map((equipo,index) => {
    //    return <option></option>
    //})
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    const manejarCambio=(e)=>{
        console.log("cambio",e.target.value);
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            { equipos.map( (equipo, index) => {
                // return <option>Equi</option>
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones