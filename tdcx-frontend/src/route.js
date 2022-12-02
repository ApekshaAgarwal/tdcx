import React from 'react'
import {  Routes, Route, Navigate } from 'react-router-dom'

import Header from './common/Header'
import { PrivateRoute } from './HOC'
import Dashboard from './module/dashboard'
import Login from './module/user/login'
function RedirectDashboard() {
    return <Navigate to={'/dashboard'} replace={true} />
}

export const Pages = () => {

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path='/' element={<RedirectDashboard />} />
            <Route path="/" element={<Header />} >
                <Route index path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            </Route>

        </Routes>
    )
}
