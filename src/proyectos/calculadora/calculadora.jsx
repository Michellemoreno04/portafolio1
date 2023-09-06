import  { useState } from "react";
import { Navegation } from "../../App";

export const Calculadora = (props) =>{

    const [primerosNumeros,setPrimerosNumeros] = useState ("")  
    
    const [resultado,setResultado] = useState ("") 

    const operar = (valor) =>{
        
setPrimerosNumeros(primerosNumeros + valor.target.value )

    }  
const operacion = () =>{
const evaluar = eval(primerosNumeros);
setPrimerosNumeros(evaluar);
   
   
}


    const reset = () =>{ // esta ees para resetear la suma
        setPrimerosNumeros("")
    }


    return(
       
        <div>
            <Navegation/>
 <h1 className="titulo-calculadora">Calculadora</h1>
 <div className="calculadora">
<input className="resultado-calculado" value={primerosNumeros}  placeholder="0" />
<button className="btn-calculadora" onClick={operar} value={1}>1</button>
<button className="btn-calculadora" onClick={operar} value={2}>2</button>
<button className="btn-calculadora"onClick={operar} value={3}>3</button>
<button className="btn-operadores" onClick={operar} value={'*'}>*</button>

<button className="btn-calculadora"onClick={operar} value={4}>4</button>
<button className="btn-calculadora"onClick={operar} value={5}>5</button>
<button className="btn-calculadora"onClick={operar} value={6}>6</button>
<button className="btn-operadores" onClick={operar}   value={'+'}>+</button>

<button className="btn-calculadora"onClick={operar} value={7}>7</button>
<button className="btn-calculadora"onClick={operar} value={8}>8</button>
<button className="btn-calculadora"onClick={operar} value={9}>9</button>

<button className="btn-operadores" onClick={operar} value={'-'}>-</button>
<button className="btn-calculadora" onClick={operar} value={0}>0</button>
<button className="btn-operadores"onClick={operar} value={'/'}>/</button>
<button className="btn-operadores" onClick={operacion}>=</button>
<button className="btn-operadores" onClick={reset}>R</button>
 </div>
 
        </div>
    )
}
