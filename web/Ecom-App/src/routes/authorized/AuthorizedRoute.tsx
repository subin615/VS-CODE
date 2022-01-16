import React from 'react'
import NavBar from '../../components/navigationBar/NavBar';
import {Routes, Route} from 'react-router-dom'

const AuthorizedRoute:React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<NavBar/>}/>
        </Routes>
    )
}

export default AuthorizedRoute;
