import { useState,useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data,setData]=useState([]);

  useEffect(
    ()=>{
      axios.get('http://localhost:3000/api/data')
      .then((response)=>{
        setData(response.data);
      })
    },
    []
  )



  return (
    <>
      <div>
        <h1>Data from backend:</h1>
        <ul>
          {
            data.map((item)=>(
              <li key={item.id}>{item.name} - {item.age} years old</li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default App
