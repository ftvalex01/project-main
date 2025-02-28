import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { formatedDate } from "@ftvalex01/shared-utils";

function App() {
  const [count, setCount] = useState(0)
  
  // Se espera que en el .env esté definida VITE_API_URL
  const apiUrl = import.meta.env.VITE_NEXT_PUBLIC_API_URL;
  
  // Si la variable no está definida, lanzamos un error para que se note inmediatamente
  if (!apiUrl) {
    throw new Error("Error: VITE_API_URL no está definida. Revisa la configuración del .env.");
  }
  
  console.log(formatedDate(new Date()));
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>API URL: {apiUrl}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
