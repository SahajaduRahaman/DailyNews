import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../../styles/Login.css"
import { LogInApi } from '../../fetchApi/FetchAPI'
import AuthContext from '../../context/ContextApi';
import { useContext } from 'react';
import WindowScroll from '../../rules/WindowScroll';

const Login = () => {
  const Reducer = useContext(AuthContext)
  const dispatch = Reducer.dispatch;

  const Navigate = useNavigate()

  const [loginDetails, setLoginDetails] = useState({
    email : "",
    password : ""
  })

  useEffect(() => {
    WindowScroll()
  },[])

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
    <div className='login-container'>
      <form action="" onSubmit={(e) => HandleSubmit(e)} className='login-form'>
        <h3>Login Here</h3>

        <label for="username">User Email</label>
        <input value={loginDetails.email} type="email" id='username' name='email' onChange={(e) => HandleChange(e)} required autoComplete='true'/>

        <label for="password">Password</label>
        <input value={loginDetails.password} type="password" id='password' name='password' onChange={(e) => HandleChange(e)} required autoComplete='true'/>

        <button className='login-btn'>Log In</button>
        <div class="social">
          <div class="go">
            Dont have an account ? 
            <Link to="/register">Sign Up</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login