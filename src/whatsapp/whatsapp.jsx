import whatsapp from "../imagenes/whatsap.png"
import "./whatsapp.css"
 export const Btn_whatsapp = ()=>{
 return(
    <div className="container-boton">
<a href="https://wa.me/8092065907?text= Deseo realizar un proyecto web" target="_blanck">
    <img  className="btn-whatsapp" src={whatsapp} />
</a>
    </div>
 )
}
