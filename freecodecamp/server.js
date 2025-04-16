import { Socket } from "http";
import {createServer} from "Socket.io"

const httpServer=createServer()
const socket =new Server(httpServer, {})

socket.on('connection', ()=>{
  console.log(socket);
})

httpServer.listen(3000, ()=>{
  console.log("post is listening to 3000.");
})