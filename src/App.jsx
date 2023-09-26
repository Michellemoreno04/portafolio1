import { Link,BrowserRouter as Router,Routes,Route } from "react-router-dom"
import mifoto from "./imagenes/ft_bg.png"
import { Proyectos } from "./proyectos/proyectos"
import { useState } from "react"
import html_img from "./imagenes/html_icon.png"
import css_img  from "./imagenes/CSS.png"
import react_img from "./imagenes/React.png"
import js_img from "./imagenes/js_icon.png"
import wordpress from "./imagenes/wordpress.png"
import ui_img2 from "./imagenes/ui_img2.png"
import doctor from "./imagenes/doctor.png"
import excurcion from "./imagenes/excurcion.png"
import restaurante from "./imagenes/restaurante.png"
import restaurante2 from "./imagenes/restaurante2.png"
import { Contacto } from "./contacto/contacto"
import { Btn_whatsapp } from "./whatsapp/whatsapp"

const Componentes = () =>{
  return(
    <div className="componentes">
      <Navegation/>
      <MiFoto/>
     <Btn_whatsapp/>
      <SegundoPortal/> 
      <ProyectosHome/>
      <FotoCreandoWeb/>
      <Contacto/>
     <PieDePagina/>
    </div>
  )
}


export function Navegation() {
  const [menuVisible, setMenuVisible] = useState(false);


  const toggleMenu = () => {
    setMenuVisible(!menuVisible); // Cambia el estado entre true y false
  };
  return (
    
      <div className='home'>
        
        <div className="navegation"  >
        <img src={mifoto} className="fotoPerfil"/>
        <label className="nombre">Michelle Moreno</label>
        <Link to="/" className="Link">Home</Link>
        <Link to="/informacion" className="Link">Informacion</Link>
        <Link to="/contacto" className="Link">Contacto</Link>
        <Link to="/proyectos" className="Link">Proyectos</Link>
 
        </div>

        <label className="burger" htmlFor="burger" >
  <input type="checkbox" id="burger" checked={menuVisible} onChange={toggleMenu}/>
  <span></span>
  <span></span>
  <span></span>
</label>
<div className={`navegation-mobile ${menuVisible ? '' : 'active'}`/*esta clase esta en css*/ }> 
        
<Link to="/" className="btn-navbar-mobile">Home</Link>
        <Link to="/informacion" className="btn-navbar-mobile">Informacion</Link>
        <Link to="/contacto" className="btn-navbar-mobile">Contacto</Link>
        <Link to="/proyectos" className="btn-navbar-mobile">Proyectos</Link>
 
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
 
</Routes>
 </Router>
</div>
  )
 
}
 const MiFoto = () =>{
  return(
   <div className="primeraPortada" id="contacto">
    <img src={mifoto} className="mifoto"/>
    <div className="titulo" >
      <h2>Hola!, soy Michelle Moreno soy diceñador de paginas web y desarrollador de software.</h2>
<button className="btn-contacto">Trabajemos</button>

    </div>
    </div>
    
  )
}
// copiado de la web css portal.com
const SegundoPortal = ()=>{
  return(
    <div className="segundoPortal">
<div className="wrapper">
	<svg >
		<text x="50%" y="50%" dy=".35em" textAnchor="middle">
		Tipos de paginas web
     
		</text>
	</svg>
  <TiposDeWeb/>
  <div className="funcioneswebs"> 
<div className="explicacion">
  <img src={ui_img2}  className="ui_img2"/>
<p>Estos son solo algunos ejemplos, y hay muchos otros
   tipos de páginas web que se adaptan a diferentes propósitos y necesidades</p>
</div>
    </div>
</div>

    </div>
  )
}

const TiposDeWeb = ()=>{
  
  return(

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
          <h4>Instituciones</h4>
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
          <h4>Noticias</h4>
        <p> Estos sitios web ofrecen contenido periodístico, artículos de opinión y
           noticias sobre una variedad de temas. Pueden cubrir noticias locales, 
          internacionales, deportes, entretenimiento y más. Algunos también incluyen imágenes y videos.</p>
          </div>
     
          <div className="webs7">
          <h4>Educativa</h4>
        
          </div>
   

   </div>
   
  )
}
const ProyectosHome = ()=>{
  return(
    <div className="paginas-proyectos">
      <div className="wrapper">
	<svg >
		<text x="50%" y="50%" dy=".35em" textAnchor="middle">
		Paginas creadas
     
		</text>
	</svg>
  </div>
<Link to={"https://amigodoctor.com/inicio/"} target="_blank">
<img src={doctor} className="img-proyectos" />
</Link>
<Link  to={"https://www.goingpartyboatpuntacana.com/?goingpartyboatpuntacana_com&gclid=CjwKCAjw6p-oBhAYEiwAgg2PgoyiscwHiDYHwsN5PmShZJQpI--e6JgBM2VWFMsxO9q6xhXHfz_lwhoCEXgQAvD_BwE"} target="_blank">
<img src={excurcion} className="img-proyectos"/>
</Link>
<Link to={"https://www.sweetbasilvail.com/"} target="_blank">
<img src={restaurante} className="img-proyectos"/>
</Link>
<Link to={"https://www.elatelierderafa.com/"} target="_blank"> 
<img src={restaurante2} className="img-proyectos"/>
</Link>

    </div>
  )
}

const FotoCreandoWeb = ()=>{

  return(
    <div className="tecnologia">
       
       <h2 className="spanText">Tecnologias</h2>
 
     <img src={html_img}  className="img-tecnologias" />
       <img src={css_img}  className="img-tecnologias"/>
       <img src={js_img} className="img-tecnologias" />
       <img src={react_img}  className="img-tecnologias"/>
       <img src={wordpress}  className="img-tecnologias"/>

  
    </div>
  )
}


const PieDePagina = ()=>{

  return(
    <div className="pieDePagina">
      <label>
        Santo Domingo Este | Phone 8092065907 | Email michelmore05@gmail.com
      </label>

    </div>
  )
}