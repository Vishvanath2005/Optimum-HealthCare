import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import Dashboard from './pages/dashboard/Dashboard'
import ForgotPassword from './pages/auth/ForgotPassword'
import Gmb from './pages/gmb/GMB'
import EditGmbSet from './pages/gmb/EditGmbSet'
import Leads from './pages/leads/Leads'
import Appointment from './pages/appointment/Appointment'
import Finance from './pages/finance/Finance'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="" element ={<SignUp/>}/>
      <Route path="/login" element ={<Login/>}/>
      <Route path="/forgotpassword" element ={<ForgotPassword/>}/>
      <Route path="/" element={<Layout />}>
      <Route path="/dashboard" element ={<Dashboard/>}/>
      <Route path="/appointment" element ={<Appointment/>}/>
      <Route path="/gmb" element ={<Gmb/>}/>
      <Route path="/finance" element ={<Finance/>}/>
      <Route path="/editgmb" element ={<EditGmbSet/>}/>
      <Route path="/leads" element ={<Leads/>}/>
      </Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App