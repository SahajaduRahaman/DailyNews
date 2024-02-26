import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { LogInApi } from '../../fetchApi/FetchAPI'
import AuthContext from '../../context/ContextApi';
import { useContext } from 'react';



const Login = () => {
  const Reducer = useContext(AuthContext)
  const dispatch = Reducer.dispatch;

  const Navigate = useNavigate()

  const [loginDetails, setLoginDetails] = useState({
    email : "",
    password : ""
  })

  const HandleChange = (e) => {
    setLoginDetails({...loginDetails, [e.target.name]: e.target.value})
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
    LogInApi(loginDetails).then((data) => {
      if (data.status === 200) {
        localStorage.setItem("authToken", data.data.authToken)
        dispatch({type : "login"})
        alert("Login successfull.")
        Navigate("/dashboard")
      }
      else {
        alert("Login unsuccessfull.")
        console.log(data)
      }
    });
  }


  return (
    <div>
      <div>
        <form action="" onSubmit={(e) => HandleSubmit(e)}>
          <input value={loginDetails.email} type="email" name='email' onChange={(e) => HandleChange(e)} required autoComplete='true'/>
          <input value={loginDetails.password} type="password" name='password' onChange={(e) => HandleChange(e)} required autoComplete='true'/>
          <button>Log In</button>
        </form>
      </div>
      <div>dont have an account? 
        <Link to="/register">Sign Up</Link>
      </div>
    </div>
  )
}

export default Login