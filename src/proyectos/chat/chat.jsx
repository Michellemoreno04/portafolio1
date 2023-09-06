import "./chat-style.css"
import io from 'socket.io-client'
import { useState, useEffect } from 'react'
import { Navegation } from "../../App"
import Swal from "sweetalert2"
import ft_anonimo from "../../imagenes/ft_anonimo.jpg"

  // const socket = io("http://localhost:3000/")  esto es parta que haga la peticion al backend


 export const Chat = (nombreUsuario) =>{
  
const [mensage,setMensage] = useState("")
const [mensages,setMensages] = useState([])

const nombreUser = localStorage.getItem('user-name')



 
const enviarMensage = (e) =>{
  e.preventDefault()
  const newMensage = {
    body: mensage,
    from: 'me',
    
  }

  setMensages([...mensages,newMensage])
  socket.emit('mensage',mensage )  // emit es para emitir o enviar al servidor la data o info
}

useEffect(() =>{
    
    socket.on("mensage",mensagesResividos)
return() =>{
  socket.off("mensage",mensagesResividos)
}

},[])

const mensagesResividos = (mensage) =>
setMensages((state)=> [...state,mensage]);

useEffect(() => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Welcome '+ nombreUser,
    showConfirmButton: false,
    timer: 2800
  })
}, []);
  return (
    <div className="container">
        <Navegation/>
    
    <div className='chat'> 
    
    <form onSubmit={enviarMensage}>
    
      <div className='cabezera'>
        <p>Online</p>
      </div>

      <ul>
        {
        mensages.map((mensage, i) =>(
          <li className="my-2 p-2 table text-sm rounded_md" key={i}>
                 {mensage.body}{'     '}:{mensage.from}
            </li>
        ))
        }

      </ul>
        <input className='inputmensage' placeholder='write here!' onChange={(e) =>{setMensage(e.target.value)} } />
        <button className='btn-enviar'>Enviar</button>
      
    
    </form>
      </div>
      <div className="usuarios-chat">

<Usuarios/>

      </div>
      </div>

      
    )
}

const Usuarios = () =>{
  const nombreUsuario = localStorage.getItem('user-name')
  return(
    <div>
      <p style={{fontSize:'25px',display:'flex',justifyContent:'center'}}>Usuarios</p>
    
    <div className="usuarios">
      
      <div className="foto-user">
        <img src={ft_anonimo}  className="foto-profile"/>
      </div>
      <div className="user-name">{nombreUsuario}</div>
    </div>
    </div>
  )
}


export default Chat;
