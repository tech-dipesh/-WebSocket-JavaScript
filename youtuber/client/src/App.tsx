import { useEffect } from "react"
import { io } from "socket.io-client"
function App() {
  const socket:string=io("http://localhost:9000")
  useEffect(("connect") => {
    // first
    
  }, [])
  
  return (
    <>
 <h2>Hello world</h2>
    </>
  )
}

export default App
