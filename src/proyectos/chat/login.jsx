import { useState } from "react"
import Avatar from 'react-avatar'; // esto es para subir las fotos



export const Login_chat = () =>{
const [nombre,setNombre] = useState("")

const [registrado,setRegistrador] = useState(false) 
const [selectedFile,setSelectedFile] = useState("")

function Obtener_nombre(e){
   e.preventDefault()
   setNombre(nombre)
   localStorage.setItem('user-name',nombre)
   console.log(nombre)
if(nombre === ""){
    alert("pon tu nombre para que puedas entrar al chat")
}else{
    setRegistrador(true)
    console.log(nombre)
   window.location.href="/chat"    //esto fuen para redirigirn el usuario al chat
}
}

    return(
        <form onSubmit={Obtener_nombre}> 
        <div className="login-chat">
           
<h1 style={{position:'absolute',top:'0',fontSize:'100px'}}>Conectate!</h1>
<input type="text" 
className="nombre-login"
 placeholder=" Nombre" 
 onChange={(e)=>setNombre(e.target.value) }/> <br/>


<button className="btn-chat-registro">Entra</button>

        </div>
        
        </form>
        
    )
}