import React, { useState } from 'react'
import { RegisterApi } from '../../fetchApi/FetchAPI'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/ContextApi';
import { useContext } from 'react';

const Register = () => {
  const Reducer = useContext(AuthContext)
  const dispatch = Reducer.dispatch;

  const Navigate = useNavigate()

  const [registerDetails, setRegisterDetails] = useState({
    name : "",
    email : "",
    mobile : "",
    password : ""
  })

  const HandleInputChange = (e) => {
    setRegisterDetails({...registerDetails, [e.target.name] : e.target.value})
  }

  const HandleSubmit = (e) => {
    e.preventDefault()

    RegisterApi(registerDetails).then((data) => {
      if (data.status === 200) {
        localStorage.setItem("authToken", data.data.authToken)
        dispatch({type : "register"})
        alert("Register successfull.")
        Navigate("/dashboard")
      }
      else {
        alert("Register unsuccessfull.")
        console.log(data)
      }
    });
  }

  return (
    <>
      <div className="register-container">
        <h1>Register here...</h1>
        <form action="" onSubmit={(e) => HandleSubmit(e)}>
          <label htmlFor="name">Name</label>
          <input value={registerDetails.name} type="text" name='name' id='name' required placeholder='Enter your name' onChange={(e) => HandleInputChange(e)}/>

          <label htmlFor="email">Email</label>
          <input value={registerDetails.email} type="email" name='email' id='email' required placeholder='Enter your email' onChange={(e) => HandleInputChange(e)}/>

          <label htmlFor="mobile">Mobile</label>
          <input value={registerDetails.mobile} type="tel" name='mobile' id='mobile' required placeholder='Enter your mobile' onChange={(e) => HandleInputChange(e)}/>

          <label htmlFor="password">Password</label>
          <input value={registerDetails.password} type="password" name='password' id='password' required placeholder='Enter your password' onChange={(e) => HandleInputChange(e)}/>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    </>
  )
}

export default Register