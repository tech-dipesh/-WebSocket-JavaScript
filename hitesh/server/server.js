import express from "express"
import { createServer } from "http"
import {Server} from "socket.io"
import cors from "cors"
const app=express()
const server=createServer(app)
const io=new server({
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      credentials: true
    }
})

io.on("connection", (socket)=>{
  console.log("what is socket:", socket)
  console.log("Socket is active to the connection");

  socket.on("chat", (payload)=>{
    console.log("what is payload:", payload);
    io.emit("chat", payload)
  })
})  

  server.listen(9998, ()=>console.log("server is listenging"))