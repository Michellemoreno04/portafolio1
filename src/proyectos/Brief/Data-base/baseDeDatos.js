const mysql = require('mysql')
const express = require('express')
const cors = require('cors')
const app = express()
const nodemiler = require('nodemailer')
const PORT = 3001;

app.use(cors())
app.use(express.json())
                         // RUTAS
 app.use(require("./correo-server/rutas/rutas"))

/*const informacion = transporter.sendMail(mailOptions,(err,result)=>{
    if(err){
        console.log(err)
    }else{
        console.log("email enviado  ")
    }
})
console.log("email enviado: ",informacion)
})*/



/*const conexion = mysql.createConnection({
    host:'localhost',
    database:'db-brief', // aqui va el nombre de la base de datos
    user:'michelle',
    password:'primerproyecto1'
})
*/

/*conexion.connect((error)=>{
    if(error){
        throw error;  // esto es para acpturar el error
    }else{
        console.log('conexion a base de datos exitosa! ')
    }
    })*/



    

// INSERTAR DATOS EN LA BASE DE DATOS
/*const datosInsertados = 'INSERT INTO brief (nombre,apellidos,correo,empresa,dedicacion,mision,secciones,adicionales,presupuesto) VALUES (?,?,?,?,?,?,?,?,?)'


conexion.query(datosInsertados,[datosResividos.nombre,datosResividos.apellido,datosResividos.correo,
    datosResividos.empresa,datosResividos.dedicacion,datosResividos.mision,datosResividos.secciones,
    datosResividos.adicionales,datosResividos.presupuesto],(err,result)=>{
    if(err){
        throw err;
    }else{
        
        console.log("usuario añadido exitosamente!",result)
       
    }
})*/   


 //SELECCIONAR PARA MOSTRAR
/*conexion.query('SELECT * from usuarios',(error,resultado) =>{
    if(error){
        throw error;
    }else{
        resultado.forEach(resultado =>{  // el foreach es para que se muestren todos los datos psea para hacer un recorrido en todos los datos 

            console.log(resultado)
        })
    }*/




//conexion.end(); //esto es para que se pare el servidor 

app.listen(PORT,()=>{
    console.log("server running on port: ",PORT)
})
