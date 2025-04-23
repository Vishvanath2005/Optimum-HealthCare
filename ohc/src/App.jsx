import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Dashboard from './pages/dashboard/Dashboard'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path='/dashboard' element={<Dashboard />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App