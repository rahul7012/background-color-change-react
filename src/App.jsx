import {Button } from "@mui/material"
import { useState } from "react"

function App() {
  
  const [bgColor, setBgColor] = useState("white")

  const changeColor = (color) => () => {
    setBgColor(color)
  }

  return (
    <>
      <div style={{backgroundColor: bgColor}} className='d-flex flex-column justify-content-center align-items-center vh-100'>
        <h1 className='text-align-center justify-content-center mb-5'>Background Color Change</h1>
        <div className="mt-5 d-flex">
        
          <Button onClick={changeColor("blue")} style={{backgroundColor:'blue'}} className="me-2" variant="contained">Blue</Button>
          <Button onClick={changeColor("green")} style={{backgroundColor:'green'}} className="me-2"  variant="contained">Green</Button>
          <Button onClick={changeColor("yellow")} style={{backgroundColor:'yellow'}} className="me-2"  variant="contained">Yellow</Button>
          <Button onClick={changeColor("red")} style={{backgroundColor:'red'}} className="me-2"  variant="contained">Red</Button>
        
        </div>
            
      </div>
    </>
  )
}

export default App
