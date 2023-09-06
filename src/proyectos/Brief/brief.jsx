import { useState } from 'react'
import './brief-style.css'
import { Navegation } from '../../App'
import Swal from 'sweetalert2'


export const Brief = () =>{
   
    const [datos,setDatos] = useState({  // este es un objeto que va a resivir valores 
        nombre:"",
        apellido:"",
        correo:"",
        empresa:"",
        dedicacion:"",
        mision:"",
        secciones:"",
        funcionalidades:"",
        adicionales:"",
        presupuesto:"",
    })

    const enviarData = (event) =>{
        event.preventDefault()
          // Verificar si algún campo está vacío
    for (const key in datos) {  //ESTA ES UN BLUCLE QUE VA A VALIDAR PROPIEDAD POR PROPIEDAD DE LA VAR DATOS

       /* if (datos[key] === "") { 
            alert("Por favor, completa todos los campos antes de enviar.");
            return; // Detiene el envío del formulario si hay campos vacíos
        }*/
    }
    fetch("http://localhost:3001/brief", { // esta es la rura del backend 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });
   
        console.log(datos)
   
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Formulario hacido enviado correctamente!',
          showConfirmButton: false,
          timer: 3500
        })
    }
    
    return(
        <div>
            <Navegation/>
        <div className="formulario-brief">
           
            <h1>Brief de diseño y desarrollo de paginas web</h1>
            <div className='pregunta-brief'>
               
                    <h3>Que es un Brief?</h3>
                 
                    <details> 
                    Un brief de diseño y desarrollo de páginas web es un documento que se crea
                     al inicio de un proyecto de diseño y desarrollo de un sitio web. Su objetivo principal
                      es proporcionar una guía clara y detallada sobre las metas, requisitos y expectativas del cliente,
                     así como brindar información esencial al equipo encargado del diseño y desarrollo.
                    </details>

                    <div >
              <form className='brief-info' onSubmit={enviarData} > 
                    
                        <label> Nombre:</label>
                                                                 {/*EN LA SIGUIENTE FUNCION   ... DATOS SE COPIA EL OBJETO SEGIDO D                               DE EL NOMBRE ECT...PARA MANDARLO JUSTO A ESE OBJETO*/ }                     
                            <input type="text" className='inputs'  placeholder='Nombre'  nombre="Nombre"
                            onChange={(e) => setDatos({ ...datos, nombre: e.target.value })} />
                        

                            <label> Apellido: </label>
                            <input type="text"  className='inputs' placeholder='Apellidos' nombre="Apellido"
                            
                            onChange={(e) => setDatos({ ...datos, apellido: e.target.value })} />
                       
                            <label> Correo Electronico: </label>
                            <input type="gmail" className='inputs' placeholder='correo@gmail.com'  nombre="Gmail"
                            onChange={(e) => setDatos({ ...datos, correo: e.target.value })}/>

                            <label> Nombre de la empresa: </label>
                            <input type="text" className='inputs' placeholder='Empresa'  nombre="Empresa"
                            onChange={(e) =>{setDatos({...datos,empresa:e.target.value})}} />

                            <label> A que se dedica: </label>
                            <input type="text" className='inputs' placeholder='Que servicio das?'  nombre="A lo que se didica"
                            onChange={(e) =>{setDatos({...datos,dedicacion:e.target.value})}}/>

                            <label> Mision y Visicion de la empresa: </label>
                            <input type="text"  className='inputs' placeholder='Cual es tu mision con tu empresa?'  nombre="Mision y Vicion"
                            onChange={(e) =>{setDatos({...datos,mision:e.target.value})}}/>

                            <label> Cantidad de secciones: </label>
                            <input type="text" className='inputs'placeholder='Cuantas paginas quieres que tenga tu pagina?'  nombre="Cantidad de secciones"
                             onChange={(e) =>{setDatos({...datos,secciones:e.target.value})}}/>

                            <label> Funcionalidades especificas: </label> 
                            <input type="text" className='inputs' placeholder='Que cosas te gustaria que hiciera tu web?'  nombre="Funcionalidades "
                             onChange={(e) =>{setDatos({...datos,funcionalidades:e.target.value})}}/>

                            <label> Adicionales: </label>
                            <input type="text"  className='inputs'placeholder='cosas extras que te gustaria añadir...'  nombre="Adiciones"
                            onChange={(e) =>{setDatos({...datos,adicionales:e.target.value})}}/>

                            <label> Presupuesto: </label>
                            <input type="text"  className='inputs' placeholder='Cual es tu presupuesto? (opcional!)'  nombre="Presupuesto"
                             onChange={(e) =>{setDatos({...datos,presupuesto:e.target.value})}}/>

                            <input type="submit" className='btn-enviar' />
                            
                          
                        </form>

                    </div>
            </div>

        </div>
        </div>
    )
} 