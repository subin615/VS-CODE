import React, { useRef, useState } from 'react'
import NavBar from '../../components/NavigationBar/NavBar';
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/home/Home'

const AuthorizedRoute: React.FC = () => {
    const windowPath = window.location.pathname
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </>
    )
}

export default AuthorizedRoute;
