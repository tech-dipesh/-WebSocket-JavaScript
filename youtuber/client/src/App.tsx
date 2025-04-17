import { useEffect, useState } from "react"
import { io, Socket } from "socket.io-client"
import { DefaultEventsMap } from "@socket.io/component-emitter"
const App:React.FC=()=>{
  const socket:Socket<DefaultEventsMap, DefaultEventsMap>=io("http://localhost:9000")
  const [ss, usess] = useState<Socket<DefaultEventsMap, DefaultEventsMap>  | null >(null);

  useEffect(() => {
    // first
    socket.on("connect", ()=>{
    console.log("Connected id is", socket.id);
    socket.emit("welcome", "welcome to the server.", socket.id)
    usess(socket)
  })
  }, [])

  //it will listen the server
    socket.on("Welcome-message", (data)=>{
      console.log(`The data is coming a ${data}`);
    })

    if(!ss){
      return <h2>Loading Please wait...</h2>
    }
  return (
    <>
    {/* <h1>My id is: ${ss?.id}</h1> */}
    <h1>My id is: {ss?.id}</h1>
    
 <h2>Hello world, this is frontend</h2>

    </>
  )
}

export default App
