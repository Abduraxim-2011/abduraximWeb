import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Main from "./Pages/Main"
import Resume from "./Pages/Resume"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
    </>
  )
}

export default App
