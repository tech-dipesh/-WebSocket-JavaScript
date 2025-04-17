import React, { useEffect, useState } from 'react'
import './App.css'
// import nanoid from "nanoid"
import io from "socket.io-client"
import {nanoid} from "nanoid"
// const socket=io("http://localhost:9998") //without cors policy this
const socket = io("http://localhost:9998", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});
const userName=nanoid(5)

function App() {
  const [message, setmessage] = useState("")
  const [chat, setchat] = useState([])

useEffect(() => {
  socket.on("chat", (payload)=>{
    setchat([...chat, payload])
  })
  socket.on("connect_error", (err) => {
    console.log("Connection error:", err.message)
  })

  return (()=>{
    socket.off("chat")
  })
})

const sendchat=(e)=>{
  e.preventDefault()
  socket.emit("chat", {message, user: "hitesh", userName})
  setmessage("")
}
  return (
    <>
      <h1>Chat Application first time with the Socket</h1>

      {chat.map((payload, index)=>{
        return (
        <div key={index}>
          <h3>{payload.message} <span>id: {payload.userName}k</span></h3>
        </div>
        )
      })}
      
      <form onSubmit={sendchat}>
      <input type='text' name='chat'
      value={message}
      onChange={(e)=>setmessage(e.target.value)}
      />
<button type='submit'>Send</button>
      </form>
    </>
  )
}

export default App
