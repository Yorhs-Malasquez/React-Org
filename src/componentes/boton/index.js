import "./boton.css"
const Boton = (props) => {
    return <button className="boton">{props.children}</button>//children es un metodo que aparece en el componente 
    //cuando se da inspeccionar
}
export default Boton