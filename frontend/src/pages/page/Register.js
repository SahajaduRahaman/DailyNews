import React, { useEffect, useState } from 'react'
import { RegisterApi } from '../../fetchApi/FetchAPI'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../context/ContextApi';
import { useContext } from 'react';
import WindowScroll from '../../rules/WindowScroll';

const Register = () => {
  const Reducer = useContext(AuthContext)
  const dispatch = Reducer.dispatch;

  const Navigate = useNavigate()

  const [registerDetails, setRegisterDetails] = useState({
    name : "",
    email : "",
    mobile : "",
    password : "",
  })

  useEffect(() => {
    WindowScroll()
  },[])

  const HandleInputChange = (e) => {
    setRegisterDetails({...registerDetails, [e.target.name] : e.target.value})
  }

  const HandleSubmit = (e) => {
    e.preventDefault()

    RegisterApi(registerDetails).then((data) => {
      if (data.status === 200) {
        localStorage.setItem("authToken", data.data.authToken)
        dispatch({type : "register"})
        Navigate("/dashboard")
      }
      else {
        alert(data.data.message)
        console.log(data)
      }
    });
  }

  return (
    <>
      <div className="login-container">
        <form action="" onSubmit={(e) => HandleSubmit(e)} className='login-form'>
          <h3>Register Here</h3>

          <label htmlFor="name">Name</label>
          <input value={registerDetails.name} type="text" name='name' id='name' required placeholder='Enter your name' onChange={(e) => HandleInputChange(e)}/>

          <label htmlFor="email">Email</label>
          <input value={registerDetails.email} type="email" name='email' id='email' required placeholder='Enter your email' onChange={(e) => HandleInputChange(e)}/>

          <label htmlFor="mobile">Mobile</label>
          <input value={registerDetails.mobile} type="tel" name='mobile' id='mobile' required placeholder='Enter your mobile' onChange={(e) => HandleInputChange(e)}/>

          <label htmlFor="password">Password</label>
          <input value={registerDetails.password} type="password" name='password' id='password' required placeholder='Enter your password' onChange={(e) => HandleInputChange(e)}/>

          <button className='login-btn'>Sign Up</button>

          <div class="social">
            <div class="go">
              Already have an account ? 
              <Link to="/login">Log In</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register