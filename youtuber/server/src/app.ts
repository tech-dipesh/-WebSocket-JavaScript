import express from "express"
import cors from "cors"
import { Server } from "socket.io";
import {createServer} from "http"

const app=express()
const server=createServer(app)

const io=new Server(server, {
  cors:{
    origin: "http://localhost:5173",
    methods: ["GET", "POST"], 
    credentials: true
  }
})
app.use(cors())
const port=9000;

app.get("/", (req, res)=>{
  console.log("hello port is running like usain bolt.");
  res.send("hello world")
})

//i have used for connectin a handler
io.on('connection', (socket)=>{
  console.log("user is connected successfully");
  console.log("and the id is", socket.id);


// it will sohw the weclome message when user is comes
socket.on("welcome", (message)=>{
  console.log("Client is saying", message);
  socket.emit("Welcome-message", "hello this is from the server")
})
})
server.listen(port, ()=>{
  console.log("App is lisening to the", port);
})