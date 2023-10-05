const express = require("express")
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer")
const {google} = require("googleapis")
const OAuth2 = google.auth.OAuth2;

app.use(express.urlencoded({extended:false})) //para entender los datos del formulario
app.use(bodyParser.json()); // Analiza solicitudes JSON para que no de undefined
app.use(require('./rutas/rutas'))
app.use(cors())
app.post('/send-email',async(req,res)=>{

    const  {nombre,email,mensaje} = req.body //esto se llama destructurin para obtener los datos de cada variable
contentHTML = ` 
<h1>Informacion del usuario</h1>
<ul style={{backgroundColor:"blue"}}>
<li>nombre: ${nombre}</li>
<li>gmail: ${email}</li>
<li>mensaje: ${mensaje}</li>

</ul>

`
res.json({mensaje:"irmormacio enviada!"})
//refresh token 
// 1//04QzinCJK-rAxCgYIARAAGAQSNwF-L9IrehWRXXLUgibLrQhYKaEIOucX6eYaDOuXmg7vU_iM_Z4XgLQ1AhBPl_VD9qxeoJXySzA
//ID del cliente 
// 434077651907-bj8caaa0pf1hhhd93rfl7di0se8f5rp0.apps.googleusercontent.com
// Secreto del cliente 
// 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
// redirect-URI 
//  https://developers.google.com/oauthplayground
// npm installed googleapis --save

const clientId ="186836721550-1c8ab8p4o2f6n9gn03c1qol3ai6pkdjb.apps.googleusercontent.com"
const clientSecret ="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"
const refreshToken="1//04iDqF3NJnHqVCgYIARAAGAQSNwF-L9Ir4_AVKadxJVuIrBM_yujSeiKnKi-7OwmxFSJTIrhPg2LNyNpan8jHdCXCKHMBig07XT4"
const redirect_URI="https://developers.google.com/oauthplayground"

const oauth2Client = new google.auth.OAuth2(clientId,clientSecret,redirect_URI)

oauth2Client.setCredentials({refresh_token:refreshToken}) //para poder refrescar cada ves que expire el token

// para enviar correo
async function sendMail(){
try {
    const accessToken =await oauth2Client.getAccessToken()
   const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            type:"OAuth2",
            user:"michelmore05@gmail.com",
            clientId:clientId, // cambiado
            clientSecret:clientSecret,//
            refreshToken:refreshToken, //
            accessToken:accessToken,//
        }
    })
    const mailOptions = await transporter.sendMail({
        from:'Portafolio Michelle Moreno <michelmore05@gmail.com>',
        to: "michelmore05@gmail.com",
        subject: 'Correo de pruebass', //asunto o titulo
         html:contentHTML
        });
const resultado = await transporter.sendMail(mailOptions)
return resultado;

} catch (error) {

console.log(error)
}}
sendMail()
.then((resultado) =>console.log("gmail se ha enviado"))
.catch((error)=> console.log(error.message))
})

app.listen(3001,()=>{
    console.log('server running on port 3001')
})