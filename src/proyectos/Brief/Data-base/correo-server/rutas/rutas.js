const express = require('express')
const rutas = express.Router();
const {google} = require('googleapis')
const nodemiler = require('nodemailer')


rutas.post("/brief",(req,result)=>{   // aqui es dnd se resive los datos del front
    const  {nombre,apellido,correo,empresa,dedicacion,mision,secciones,funcionalidades,adicionales,presupuesto} = req.body;
     contentHTML =  `
     <h1>user information del brief </h1>
     <li>user name: ${nombre} </li>
     <li>user apellido: ${apellido} </li>
     <li>user gmail: ${correo} </li>
     <li>user empresa: ${empresa} </li>
     <li>user dedicacion: ${dedicacion} </li>
     <li>user mision: ${mision} </li>
     <li>user secciones: ${secciones} </li>
     <li>user adicionales: ${funcionalidades} </li>
     <li>user adicionales: ${adicionales} </li>
     <li>user presupuesto: ${presupuesto} </li>
     `
// id del cliente para poder enviar el correo
     const clienteId = "1030172446107-gpft07lcbvpicmo1rj3gge4pgi3vvs1l.apps.googleusercontent.com"
     //cliente sercret
const clienteSecret = "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"
// este es un link ge me da la api de gmail para redirecion 
const redirect_URI = "https://developers.google.com/oauthplayground"
// refresh token  
const clienteRefreshToken = "1//04XyC8u5HYlAFCgYIARAAGAQSNwF-L9IrCRWUQ1Y_3zIemij3xOPS4SPsHBX90eLtQ8np6qVPtLwV_DT_1BcGyB0ZZIGWfvcXHUk"
     
const oauth2Client = new google.auth.OAuth2(
clienteId,
clienteSecret,
redirect_URI

)
oauth2Client.setCredentials({refresh_token: clienteRefreshToken})

async function enviarEmail(){ // esta es la funcion k envia el email
try{
    const accessToken = await oauth2Client.getAccessToken(); // esto es para consegir el token de acceso

const transporter = nodemiler.createTransport({
    service:"gmail",
    auth:{
        type:"OAuth2",
        user:"michelmore05@gmail.com",
        clientId:clienteId,
        clientSecret:clienteSecret,
        refreshToken:clienteRefreshToken
    }
})
const mailOptions = {
    from:"Pagina web de mi portafolio <michelmore05@gmail.com>",
    to: "michelmore05@gmail.com",
    subject:"Brief",
    html: contentHTML,
}
const resultado = await transporter.sendMail(mailOptions)
return resultado;

}
catch(err){
console.log(err)
}
}
enviarEmail()
.then((resultado)=>result.status(200).send(" info enviada"))
.catch((err)=>console.log(err.message))
console.log("email enviado con exito!")

})


module.exports = rutas; // export las rutas al servidor

      //  refresh token
//   1//04XyC8u5HYlAFCgYIARAAGAQSNwF-L9IrCRWUQ1Y_3zIemij3xOPS4SPsHBX90eLtQ8np6qVPtLwV_DT_1BcGyB0ZZIGWfvcXHUk

      //ID de cliente   
// 1030172446107-gpft07lcbvpicmo1rj3gge4pgi3vvs1l.apps.googleusercontent.com

      //Secreto del cliente
// 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