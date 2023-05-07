import "./equipo.css"
import Colaborador from "../colaborador"
import hexToRgba from "hex-to-rgba"//se debe importar la libreria

const Equipo = (props) => {
    //Destructuración
    const{colorPrimario, colorSecundario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor} = props
    const obj={
        backgroundColor:hexToRgba(colorPrimario, 0.6)//para el efecto de opacidad
    }
    const estiloTitulo = {borderColor: colorPrimario}
    //con esa condicion solo se muestra las secciones que contengan un integrante
    return <>
        {
            colaboradores.length > 0 && 
            <section className="equipo" style={obj}>
                <input
                    type='color'
                    className="input-color"
                    value={hexToRgba(colorPrimario, 0.6)}
                    onChange={(event)=>{
                        //se agrega onChange para poder controlar el input y no salga error en consola,
                        //con ello le quitamos toda la responsabilidad al navegador
                        actualizarColor(event.target.value, id);//obtenemos el valor del color
                    }}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores"> 
                    {
                        colaboradores.map((colaborador,index)=><Colaborador 
                            datos={colaborador} 
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador = {eliminarColaborador}
                        />)
                    }
                </div>
            </section>
        }</>
}
export default Equipo