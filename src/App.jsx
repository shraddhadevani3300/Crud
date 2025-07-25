import React from 'react'
import Viewdata from "./Viewdata";
import Insertdata from './Insertdata';
import Updateapi from './Updateapi';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Viewdata/>} />
      <Route path='insertdata' element={<Insertdata/>} />
      <Route path="updateapi" element={<Updateapi/>} />
    </Routes>
       </>
  )
}

export default App
