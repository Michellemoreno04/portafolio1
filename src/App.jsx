import { Link,BrowserRouter as Router,Routes,Route } from "react-router-dom"
import mifoto from "./imagenes/ft_bg.png"
import { Proyectos } from "./proyectos/proyectos"
import { Contacto } from "./paginas/contacto/contacto"
import { Informacion } from "./paginas/contacto/informacion/informacion"
import { Tablero } from "./proyectos/tic tac toe/tablero"
import { Calculadora } from "./proyectos/calculadora/calculadora"
import { Administrador } from "./proyectos/administrador/administrador"
import { Chat } from "./proyectos/chat/chat"
import { Login_chat } from "./proyectos/chat/login"
import { Brief } from "./proyectos/Brief/brief"
import ui_img from "./imagenes/ui_img.png"
import ui_img2 from "./imagenes/ui_img2.png"




const Componentes = () =>{
  return(
    <div className="componentes">
      <Navegation/>
      <MiFoto/>
      <SegundoPortal/> 
      <FotoCreandoWeb/>
      <InfoDominios/>
    </div>
  )
}


export function Navegation() {
  

  return (
    
      <div className='home'>
        
        <div className="navegation"  >
        
        <Link to="/" className="Link">Home</Link>
        <Link to="/informacion" className="Link">Informacion</Link>
        <Link to="/contacto" className="Link">Contacto</Link>
        <Link to="/proyectos" className="Link">Proyectos</Link>
      
        </div>
        
       
      </div>   
      
  )
}

                                         // RUTASSSSSS
export  const Rutas= () => {
  
  return( <div> 
   <Router>
   
<Routes>
<Route path="/" element={<Componentes/>} />
<Route path="/proyectos" element={<Proyectos/>} />
<Route path="/contacto" element={<Contacto/>} /> 
<Route path="/informacion" element={<Informacion/>} /> 
<Route path="/tablero" element={<Tablero/>} /> 
<Route path="/calculadora" element={<Calculadora/>} /> 
<Route path="/administrador" element={<Administrador/>} />
<Route path="/login-chat" element={<Login_chat/>} />  
<Route path="/chat" element={<Chat/>} /> 
<Route path="/brief" element={<Brief/>} /> 
    
</Routes>
 </Router>
</div>
  )
 
}
 const MiFoto = () =>{
  return(
   
    <div className="titulo" >
      
      <img src={mifoto} className="mifoto"/>
      <h2>Hola!, soy Michelle Moreno soy diceñador y desarrollador de software.</h2>
<button className="btn1">Contacto</button>

    </div>
    
  )
}
// copiado de la web css portal.com
const SegundoPortal = ()=>{
  return(
    <div className="segundoPortal">
<div className="wrapper">
	<svg>
		<text x="50%" y="50%" dy=".35em" textAnchor="middle">
			Diseñador y Programador web
     
		</text>
	</svg>
  <TiposDeWeb/>
</div>

    </div>
  )
}

const TiposDeWeb = ()=>{
  return(
    <div >

    
    <div className="tiposDeWeb">
      
        <div className="webs">
          <h4>Portafolios</h4>
        <p>Un sitio web de portafolio es una plataforma donde los profesionales, como diseñadores,
           fotógrafos, artistas y escritores, muestran su trabajo previo y habilidades
          El objetivo es presentar su experiencia y talento a posibles clientes o empleadores.</p>
          </div>
          <div className="webs">
          <h4>Web para negocios</h4>
        <p>Un sitio web para negocios es una presencia en línea para una empresa.
           Puede incluir información sobre la empresa, sus productos o servicios, 
           ubicación, horario de atención y formas de contacto
          . Es una herramienta fundamental para la visibilidad y el marketing.</p>
          </div>

          <div className="webs">
          <h4>Web Instituciones</h4>
        <p> Los sitios web de instituciones, como escuelas, universidades u organizaciones
           sin fines de lucro, proporcionan información sobre la institución, programas académicos, 
          eventos, noticias y recursos para estudiantes, profesores y miembros.</p>
          </div>
          
          <div className="webs">
          <h4>Blogs</h4>
        <p>Los blogs son plataformas donde los escritores o expertos comparten regularmente
           contenido en forma de artículos. Los temas pueden variar ampliamente, desde consejos
           de viaje hasta análisis técnicos. Los lectores pueden comentar y participar en discusiones.</p>
          </div>
          <div className="webs">
          <h4>Tienda online</h4>
        <p>También conocidos como sitios de comercio electrónico, estas plataformas 
          permiten a las empresas vender productos en línea. Los visitantes pueden navegar por los productos
          , agregarlos al carrito de compras y realizar transacciones seguras</p>
          </div>
          <div className="webs">
          <h4>Noticias o revistas</h4>
        <p> Estos sitios web ofrecen contenido periodístico, artículos de opinión y
           noticias sobre una variedad de temas. Pueden cubrir noticias locales, 
          internacionales, deportes, entretenimiento y más. Algunos también incluyen imágenes y videos.</p>
          </div>
          
    </div>
   
    
    </div>
  )
}

const FotoCreandoWeb = ()=>{



  return(
    <div className="creandoWeb">
       
       <span className="spanText">Todas las tools para hacer la mejor web del mercado</span><br />
       <button className="btn-creandoWeb"> Button
</button>
    </div>
  )
}
const InfoDominios = ()=>{

  return(
    <div className="dominios">
	<svg>
		<text x="50%" y="50%" dy=".35em" textAnchor="middle">
			Dominios y Hostin
		</text>  
	</svg>
  <div className="dominio">
<p>
Un dominio web es una dirección única que se utiliza
 para identificar un sitio web en Internet. Es la forma en que las personas acceden
  a un sitio web específico.
  Nombre de dominio: El nombre de dominio es la parte principal de la dirección web que las
   personas escriben en su navegador para visitar un sitio web.
   Por ejemplo, en "www.ejemplo.com", "ejemplo.com" es el nombre de dominio.
</p>
<p>
El hosting (también conocido como alojamiento web) es un servicio que proporciona la infraestructura
 necesaria para que un sitio web sea accesible en Internet. En otras palabras, es el lugar donde se almacenan todos los archivos 
y datos de tu sitio web y desde donde se entregan a los visitantes cuando acceden a tu dominio
</p>
 
</div>
    </div>
    
  )
}
