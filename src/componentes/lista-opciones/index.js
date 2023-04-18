import "./listaopciones.css"
const ListaOpciones = ()=>{
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

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            { equipos.map( (equipo, index) => {
                // return <option>Equi</option>
                return <option key={index}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones