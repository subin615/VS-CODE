import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom'
import Registration from '../../pages/Registration/Registration';

const Login = lazy(() => import('../../pages/Login/Login'))

const AuthenicationRoute: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Registration />}></Route>
        </Routes>

    )
}

export default AuthenicationRoute;