import React,{lazy} from 'react';
import {Routes, Route} from 'react-router-dom'

const Login = lazy(()=> import('../../pages/login/Login'))

const AuthenicationRoute:React.FC = () =>{
    return (
        <Routes>
            <Route path="/" element={<Login/>}></Route>
        </Routes>

    )
}

export default AuthenicationRoute;