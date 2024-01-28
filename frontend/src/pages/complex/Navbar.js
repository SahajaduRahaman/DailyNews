import React, { useState, useEffect } from 'react'
import TopBanner from '../components/TopBanner'
import { Link, NavLink } from 'react-router-dom'
import "../../styles/Navbar.css"
import ProfileLogo from "../../assets/profile-logo.png"
import AuthContext from '../../context/ContextApi';
import { useContext } from 'react';


const Navbar = () => {

  const Token = useContext(AuthContext)
  const authToken = Token.state.authToken;

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

  const HandleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNavBackground);

    HandleClick()

    return () => {
      window.removeEventListener("scroll", changeNavBackground);
    };
  }, [])


  return (
    <>
      <TopBanner />
      <header className={navBarClass}>
        <div className="navbar-container">
          <ul className='navbar-ul-li'>
            <li className="navbar-li">
              <NavLink to="/" onClick={HandleClick}>Home</NavLink>
            </li>
            { authToken &&
              <li className="navbar-li">
                <NavLink to="/dashboard" onClick={HandleClick}>Dashboard</NavLink>
              </li>
            }
            <li className="navbar-li">
              <NavLink to="/politics" onClick={HandleClick}>Politics</NavLink>
            </li>
            <li className="navbar-li">
              <NavLink to="/technology" onClick={HandleClick}>Technology</NavLink>
            </li>
            <li className="navbar-li">
              <NavLink to="/country" onClick={HandleClick}>Country</NavLink>
            </li>
            <li className="navbar-li">
              <NavLink to="/world" onClick={HandleClick}>World</NavLink>
            </li>
            <li className="navbar-li">
              <NavLink to="/business" onClick={HandleClick}>Business</NavLink>
            </li>
            <li className="navbar-li">
              <NavLink to="/education" onClick={HandleClick}>Education</NavLink>
            </li>
            <li className="navbar-li">
              <NavLink to="/career" onClick={HandleClick}>Career</NavLink>
            </li>
            <li className="navbar-li">
              <NavLink to="/entertainment" onClick={HandleClick}>Entertainment</NavLink>
            </li>
            <li className="navbar-li">
              <NavLink to="/sports" onClick={HandleClick}>Sports</NavLink>
            </li>
          </ul>
          <div className="profile-logo">
            <Link to = {authToken ? "/dashboard" : "login"} onClick={HandleClick}>
              <img src={ProfileLogo} alt="profile-logo" style={{width : 40, height : 40}}/>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar