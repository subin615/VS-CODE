import React,{Suspense,lazy, useRef, useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import AuthenicationRoute from './authentication/AuthenticationRoute';
import AuthorizedRoute from './authorized/AuthorizedRoute';

const Navigation:React.FC = () => {
  const [token, _] = useState(()=>{
    const getToken = localStorage.getItem('token')
    // if(!getToken)return false
    return true
  })
    return (
      <Router>
        <Suspense fallback={<div>...Loading</div>}>
          {token ?
          <AuthorizedRoute />:
          <AuthenicationRoute />
          }
        </Suspense>
      </Router>
    )
}

export default Navigation;