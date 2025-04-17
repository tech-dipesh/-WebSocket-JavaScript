import React, { useEffect, useState } from 'react'
import './App.css'
// import nanoid from "nanoid"
import io from "socket.io-client"
import nanoid from "nanoid"
// const socket=io("http://localhost:9998") //without cors policy this
const socket = io("https://localhost:9998", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});

function App() {
  const [message, setmessage] = useState(null)
  const [chat, setchat] = useState(second)


const sendchat=(e)=>{
  e.preventDefault()
  socket.emit("chat", {message, user: "hitesh"})
  setmessage("")
}
  return (
    <>
      <h1>Chat Application first time with the Socket</h1>
      <form onSubmit={sendchat}>
      <input type='text' name='chat'
      value={message}
      onChange={(e)=>setmessage=e.target.value}
      />
<button type='submit'>Send</button>
      </form>
    </>
  )
}

export default App
