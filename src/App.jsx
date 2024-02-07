import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './images/logo.png'
import fondo from './images/fondo.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <div>
          <img src={logo} alt="logo" className="logo"></img>
          <p>Eduardo de Nóvoa Fernández</p>  
        </div>
        <div>
          <a href="#">Home</a>
          <a href="#">MeteoIA</a>
          <a href="#">About</a>
        </div>
      </nav>
      <div className="bg-img">
      </div>
    </>
  )
}

export default App
