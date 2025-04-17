import express from "express"
import { createServer } from "http"
import {Server} from "socket.io"
import cors from "cors"
const app=express()
const httpServer=createServer(app)
const io=new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true,
    }
})

io.on("connection", (socket)=>{
  console.log("what is socket:",)
  console.log("Socket is active to the connection");

  socket.on("chat", (payload)=>{
    console.log("what is payload:", payload);
    io.emit("chat", payload)
  })
})  

  httpServer.listen(9998, ()=>console.log("server is listenging"))