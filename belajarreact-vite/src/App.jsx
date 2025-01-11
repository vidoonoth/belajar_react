import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Header from './assets/header'
import Paragraph from './assets/paragraf'
import Paragraph2 from './assets/paragraf'

function App() {
  const students = ['alfin', 'budi', 'eko'];
      const [no, setNo] = useState(0);
      const [error, setError] = useState("");

      function handleAddClick() {
        setNo(no + 1);
      }
      
      function handleSubstractClick() {
        if(no > 0){
          setNo(no - 1);
        }else{
          {alert('tidak bisa dikurangin lagi');}    
          setError("tidak bisa dikuranag");
        }
      }

      function handleResetClick() {        
        setNo(0);
      }

  return (
    <>    
      <Header />
      {/* ini props*/}
      <Paragraph paragraph="1"/>   
      <Paragraph paragraph="2"/>  
          
      {/* props refactor */}
      <Paragraph2 />
      <Paragraph2 p2="1" />
      {/* array.map() */}      
      <ul>
            {students.map((student) => (
              <li key={student} > {student} </li>
            ))}
          </ul>

          <h2>{error}</h2>
          <button onClick={handleAddClick}> Tambah </button>
          <p>{no}</p>
          <button onClick={handleSubstractClick}> Kurang</button>
          <button onClick={handleResetClick}> reset</button>

    </>
  )
}

export default App
