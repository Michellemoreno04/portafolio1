import   React from "react";
import { Navegation } from "../App";
import "./proyectos.css"

export const Proyectos = () =>{

 return(
    
            <div className="gradient">
                <Navegation/>
          <Cuadros_proyectos/>
            </div>
            

    
    )
}
export const Cuadros_proyectos = (props) =>{
    return(
        <div className="proyectos"> 
   
        </div>
    )
}
