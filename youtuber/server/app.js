import express from "express"
import cors from "cors"
import { Server } from "socket.io";
import {createServer} from "http"
const app=express()
const server=createServer(app)

app.use(cors())
const io=new Server(server, {
  cors:{
    origin: "https://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }
})

const port=9000;

app.get("/", (req, res)=>{
  console.log("hello port is running like usain bolt.");
  res.send("hello world")
})

io.on('connection', (socket)=>{
  console.log("user is connected successfully");
  console.log("id", socket.id);
})

server.listen(port, (req, res)=>{
  console.log("App is lisening to the", port);
})