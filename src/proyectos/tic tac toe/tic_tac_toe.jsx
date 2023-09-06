import "./style.css"

export const Titulo = () =>{
   return <h3 className="titulo_del_juego">Juego del Tic Tac Toe</h3>
}
 export function TicTacToe(props){
   
     
  
    return(
      <div>
     <div>
     
               
             <button className="btn-casillas" onClick={()=>props.onClick()} >
                <div className="btn-puesto">{props.puesto}</div> 
             </button>
            
             </div>     
           </div>   
    )
}

