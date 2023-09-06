import { useState, } from "react";
import "./style.css"
import { Navegation } from "../../App";

export const Administrador = () => {
  const [backgroundColor, setBackgroundColor] = useState("#EBEDEE");
  const [disponible, setDisponible] = useState(0);
  const [ahorros, setAhorros] = useState(0);
  const [cosasPersonales, setCosasPersonales] = useState(0);
  const [sueldo,setSueldo] = useState("");

  
  const modoColor = () => {
    setBackgroundColor((prevColor) =>
      prevColor === "#58626c" ? "#EBEDEE" : "#58626c"
    );
  };

  const handleSueldoChange = ({target}) => {
    
    setSueldo(target.value)
    
          const ahorros = sueldo * 0.25;
          const cosasPersonales = sueldo * 0.25;
          const disponible = sueldo - ahorros - cosasPersonales;
          setAhorros(ahorros);
          setCosasPersonales(cosasPersonales);
          setDisponible(disponible);      
} 
function evento(event){
    event.preventDefault();
    console.log(sueldo) 
}    

  return (
    <div><Navegation/>
    <div className="panel_container">
       
    <div className="panel_opciones"style={{backgroundColor: backgroundColor}} >
       
       <h2>Panel</h2><br/>
       <button className="btn_panel">Home</button> <hr/>
       <button className="btn_panel">Ahorros</button><hr/>
       <button className="btn_panel">Disponibles</button><hr/>
       <button className="btn_panel">Ocupaciones</button><hr/>
       
    <div className="session_panel">
    
    
        <div className="toggle-switch">
        <button className="btn-serrar-session">Cerrar session</button>
    <label className="switch-label">
    <input type="checkbox" className="checkbox" onClick={modoColor}/>
    <span className="slider"></span>
    </label>

    </div>  
    
       </div>
       </div>

       <div className="home-panel" style={{backgroundColor: backgroundColor}}>
       <Monto titulo="Disponible" monto={disponible}/>
       <Monto titulo="Ahorros" monto={ahorros}/>
       <Monto titulo="Cosas personales" monto={cosasPersonales}/> 
       <div className="cantidadGuardada">

        <form onSubmit={evento}> 
           <p>Sueldo:{" " + sueldo}</p>
       <input className="input-calcular-valor"  placeholder="$" type="number"  onChange={handleSueldoChange}/> <br/>
       <label>Ingresa la cantidad a guardar</label> <br/><br/>
    
                <button className="btn-guardar-monto">Guardar</button>
                </form>
       </div>
       </div>
    
    
       </div>
    
       </div>
    )
    }
   
    const Monto = (props,event) =>{

    
    return(<div className="panelControl">
    <h3 className="tituloPanel">{props.titulo}</h3>
    <div className="montos">
    {props.monto}
    
    </div>
    </div>
    )
    }
  


