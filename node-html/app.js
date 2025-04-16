  import { configDotenv } from "dotenv"
  import express from "express"
  import http from "http"
  import path from "path"
  import { Server } from "socket.io";

  const app=express();
  const server=http.createServer(app)
  const io=new Server(server)

  io.on('connection', (socket)=>{
    console.log("A new user has connected", socket.id);
    socket.on('user-message', message=>{
      console.log("A new user is messaged", message);
      io.emit("message", message)
    })
  })

  const port=9000;
  app.use(express.static(path.resolve("./public")))


  app.get("/", (req, res)=>{
    return res.sendFile("/public/index.html");
  })

  server.listen(9000, ()=>console.log("Path is working now in", port))