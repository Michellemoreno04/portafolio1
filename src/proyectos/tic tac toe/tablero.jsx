
import { TicTacToe } from "./tic_tac_toe"
import { useState } from "react"
import { Titulo } from "./tic_tac_toe"
import Swal from "sweetalert2"
import { Navegation } from "../../App"

 export const Tablero = () =>{

    const [cuadros,setCuadros] = useState(Array(9).fill(null))
    const [turno,setTurno] = useState(true)
    
const ponerCasillas = (index) =>{  // esto es parar darle el lugar que tiene cada casillas como indice
    return <TicTacToe puesto={cuadros[index]} onClick={()=>manejarClick(index)}/>
}
const manejarClick = (index) =>{
   
    const newCuadros = cuadros.slice()
    if(newCuadros[index] === null){  // este IF es para que no cambie el valor ya puesto de x y o
     newCuadros[index] = turno ? 'X' : 'O' // esto es un operador ternario casi como if(){}
     setCuadros(newCuadros)
     setTurno(!turno)  // ????? 

  }}
  const reset = () =>{
    setCuadros("")
   }
  const calcularGanador = (cuadros) =>{
const lineas =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,8,8],
    [0,4,8],
    [2,4,6],

];

for(let i = 0; i< lineas.length; i++ ){
    const [a,b,c] = lineas[i]
    if(cuadros[a]  && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c] ){
        return cuadros[a]
    }
}
return null
  }
  const ganador = calcularGanador(cuadros);
  let estado;
  if(ganador){
      estado = 'El ganador es: ' + ganador 
      Swal.fire('El ganador es: ' + ganador)
  }else{
      estado = 'Turno de: ' + (turno ? 'X' : 'O') 
  }
 
return( 
    <div className="turnos">
        <Navegation/>
         <Titulo/>
<div className="cuadrado-mayor">
{ponerCasillas(0)} 
{ponerCasillas(1)}
{ponerCasillas(2)}
{ponerCasillas(3)}
{ponerCasillas(4)}
{ponerCasillas(5)}
{ponerCasillas(6)}
{ponerCasillas(7)}
{ponerCasillas(8)}

{estado}
</div>
<button className="btn-reset" onClick={reset} >Reset</button>

</div>

)

}


