import { useState,useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data,setData]=useState([]);

  useEffect(() => {
        axios.get('/api/data')
          .then((response) => {
            setData(response.data)
          })
          .catch((error) => {
            console.error("API Error:", error)
            setData([])
          })
      },[])



  return (
    <>
      <div>
        <h1>Data from backend:</h1>
        <ul>
          {
          
            Array.isArray(data) && data.map((item)=>(
              <li key={item.id}>{item.name} - {item.age} years old</li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default App
