import  express  from "express";
import { Socket, Server as SocketServer } from "socket.io";
import http from 'http'
import cors from "cors"


const app = express()
const server = http.createServer(app)
const io = new SocketServer(server,{   // esto es para que cors deje que se conecte la web
    cors: {
        origin: "http://localhost:5173" // si le pongo un * funcionan todos los dominios que quieran acceder
    }
})

app.use(cors())

io.on('connection', socket =>{  // esto es para que avise cuando se conecto alguien 
    console.log("cliente conectado! " + socket.id)

    socket.on('mensage', (body) =>{  // el 'on' lo que quiere decir es lo que se hace en socket 
        console.log(body)
        socket.broadcast.emit('mensage',{   // el boardcast es para reenviar al cliente
            body,                     // cuerpo del mensage
            from: socket.id.slice(4)               // slice es para cortar el id del usuario y no sea tan largo       

        })  // ESTO ES PARA ENVIAR DE NUEVO AL FRONEND PERO A TODOS LOS USUARIOS CONECTADOS AL CHAT
    } )
})
server.listen(3000) // para que el servidor escuche
console.log("servidor corriendo en el puerto 3000")