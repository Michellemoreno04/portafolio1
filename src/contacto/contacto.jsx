import Swal from "sweetalert2"
import "./contacto.css"
import {useForm} from "react-hook-form"   
export const Contacto = () => {
  const {register,reset,handleSubmit,formState:{ errors  } } = useForm() // ESTO ESTA COMPLETO PARA HACER EL FORMULARIO

  const onSubmit = (data) => {
    fetch("http://localhost:3001/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
      })
    
      .catch((error) => {
        console.error("Error al enviar el formulario:", error);
      });
   
      reset()// esto es para que se limpie el formulario 
      Swal.fire( //alerta de que se envio el formulario
        ' Formulario enviado!',
        'Gracias!',
        'success'
      )
  };

    return(
        
<div className="contact-form">
  <span className="heading">Contact Us</span>

  <form onSubmit={handleSubmit(onSubmit)}>

    <label htmlFor="name">Name:</label>
    <input
     type="text"
     name="nombre"
     {...register("nombre", // con requister se capturan el valor del input 
     {required: true})} // para que sean obligatorios
       />
       {
        errors.nombre && <span>Nombre requerido!</span> // mensage de requerimiento
       }
    <label htmlFor="email">Email:</label>
    <input
     type="email" 
     name="email" 
     {...register("email",
     {required: true})}
     />
        {
        errors.email && <span>Email requerido!</span>
       }
    <label htmlFor="message">Message:</label>
    <textarea
     name="mensaje" 
     {...register("mensaje",
     {required: true})}
     ></textarea>
        {
        errors.message && <span>Mensage requerido!</span>
       }
    <button type="submit">Submit</button>
  </form>
</div>
 )
}
