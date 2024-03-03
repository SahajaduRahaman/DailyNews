import React, { useState, useEffect, useRef } from 'react'
import TopBanner from '../components/TopBanner'
import { Link, NavLink } from 'react-router-dom'
import "../../styles/Navbar.css"
import ProfileLogo from "../../assets/profile-logo.png"
import AuthContext from '../../context/ContextApi';
import { useContext } from 'react';
import WindowScroll from '../../rules/WindowScroll'

const Navbar = () => {
  const Token = useContext(AuthContext)
  const authToken = Token.state.authToken;

  const navRef = useRef()

  const [ navBarClass, setNavBarClass ] = useState("navbar");

  const changeNavBackground = () => {
    let position = window.scrollY;
    if (position > 120) {
      setNavBarClass("navbar navColorChange");
    }
    else {
      setNavBarClass("navbar");
    }
  }

  useEffect(() => {
    WindowScroll()
  },[])

  useEffect(() => {
    window.addEventListener("scroll", changeNavBackground);

    return () => {
      window.removeEventListener("scroll", changeNavBackground);
    };
  },[])

  const HandleNav = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <>
      <TopBanner />
      <header className={navBarClass}>
        <div className="navbar-container">
          <div className="menu-icon" onClick={HandleNav}>
            <i className="fa-solid fa-bars" />
          </div>
          <div className='navbar-right-section' ref={navRef}>
            <div className="menu-icon close-icon" onClick={HandleNav}>
              <i class="fa-solid fa-circle-xmark" />
            </div>
            <ul className='navbar-ul-li'>
              <li className="navbar-li" onClick={HandleNav}>
                <NavLink to="/">Home</NavLink>
              </li>
              { authToken &&
                <li className="navbar-li" onClick={HandleNav}>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
              }
              <li className="navbar-li" onClick={HandleNav}>
                <NavLink to="/politics">Politics</NavLink>
              </li>
              <li className="navbar-li" onClick={HandleNav}>
                <NavLink to="/technology">Technology</NavLink>
              </li>
              <li className="navbar-li" onClick={HandleNav}>
                <NavLink to="/country">Country</NavLink>
              </li>
              <li className="navbar-li" onClick={HandleNav}>
                <NavLink to="/world">World</NavLink>
              </li>
              <li className="navbar-li" onClick={HandleNav}>
                <NavLink to="/business">Business</NavLink>
              </li>
              <li className="navbar-li" onClick={HandleNav}>
                <NavLink to="/education">Education</NavLink>
              </li>
              <li className="navbar-li" onClick={HandleNav}>
                <NavLink to="/career">Career</NavLink>
              </li>
              <li className="navbar-li" onClick={HandleNav}>
                <NavLink to="/entertainment">Entertainment</NavLink>
              </li>
              <li className="navbar-li" onClick={HandleNav}>
                <NavLink to="/sports">Sports</NavLink>
              </li>
            </ul>
          </div>
          <div className="profile-logo">
            <Link to = {authToken ? "/dashboard" : "login"}>
              <img src={ProfileLogo} alt="profile-logo" style={{width : 40, height : 40}}/>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar