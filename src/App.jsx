import React from 'react'
import Viewdata from "./Viewdata";
import Insertdata from './Insertdata';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Viewdata/>} />
      <Route path='insertdata' element={<Insertdata/>} />
    </Routes>
       </>
  )
}

export default App
