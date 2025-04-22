import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/layout/Layout'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App