import React from 'react'
import User from './User/index'
import Admin from './Admin/App'
import Guest from './Guest/App'
import Agent from './Election_Agent/App'
import { Route, Routes } from 'react-router-dom'
import Payment from './User/pages/payment'

export default function App() {
    return (
        <Routes>
            <Route path="/Admin/*" element={<Admin/>}/>
            <Route path="/User/*" element={<User/>}/>
            <Route path="/*" element={<Guest/>}/>
            <Route path="/Agent/*" element={<Agent/>}/>
            <Route path="/payment" element={<Payment/>}/>
        </Routes>
    )
}
