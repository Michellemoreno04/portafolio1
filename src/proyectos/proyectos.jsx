import   React from "react";
import tic_tac_toe from "../imagenes/tic_tac_toe.png"
import calculadora from "../imagenes/calculadora.png"
import ft_ingresos from "../imagenes/ft_ingreso.jpg"
import imgChat from "../imagenes/img-chat.jpg"
import { Link } from "react-router-dom";
import { Navegation } from "../App";
import brief from "../imagenes/breif.png"
export const Proyectos = () =>{
// hi
 return(
    
            <div className="gradient">
                <Navegation/>
            <h1 className="titulo_del_portafolio">Estos son mis proyectos</h1>


            <Cuadros_proyectos 
            nombre="Tic Tac Toe"
            imagen={tic_tac_toe}
            boton_jugar="/tablero"
            name="Jugar"
          />
           <Cuadros_proyectos 
            nombre="Calculadora"
            imagen={calculadora}
            boton_jugar="/calculadora"
            name="Abrir"
            />
               <Cuadros_proyectos 
            nombre="Administrador"
            imagen={ft_ingresos}
            boton_jugar="/administrador"
            name="Abrir"
            />
               <Cuadros_proyectos 
            nombre="Chat"
            imagen={imgChat}
            boton_jugar="/login-chat"
            name="Abrir"
            />

<Cuadros_proyectos 
            nombre="Brief"
            imagen={brief}
            boton_jugar="/brief"
            name="Abrir"
            />
       




            </div>
            

    
    )
}
export const Cuadros_proyectos = (props) =>{
    return(
        <div className="proyectos"> 
   <div className="nombreDelJuego">{props.nombre}</div>

   <img  className="portafolio_img" src={props.imagen} /* las imagenesdeben de tener el mismo tamaño *//>  


   <Link to={props.boton_jugar}/* asi se pasa la redireccion como props */>  
   <button className="btn-para-jugar" >{props.name}</button>
   </Link>
        </div>
    )
}
