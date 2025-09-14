import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Parashow from '../components/Parashow'

const Welcome = () => {
  return (
    <div style={{ padding: "50px" }}>
      <h1>Welcome</h1>
      <Routes>
        <Route path="/welcome/new-user" element={<Parashow />} />
       
      </Routes>
    </div>
  )
}

export default Welcome
