import { useState } from "react";
import "./miorg.css";
const MiOrg = (props) =>{

    //Estado - hooks
    //useState
    //useState()
    console.log(props);
    //const [nombreVariable, funcionActualiza] = useState(valorinicial)
   // const [nombre, actualizarNombre] = useState("Harland");


    // const [mostrar, actualizarMostrar] = useState(true);
    // const manejarclick = ()=>{
    //     console.log("mostrar / ocultar elemento", !mostrar);
    //     actualizarMostrar(!mostrar);
    // }
//<h3 className="title">Mi organización {nombre}</h3> , esto iba abajo
    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}
export default MiOrg;