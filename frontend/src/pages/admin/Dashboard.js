import React from "react";
import AuthContext from "../../context/ContextApi";
import { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "../../styles/Dashboard.css"

const Dashboard = () => {
  const Token = useContext(AuthContext);
  const authToken = Token.state.authToken;
  const dispatch = Token.dispatch;

  const Navigate = useNavigate();

  const HandleClick = () => {
    localStorage.removeItem("authToken");
    dispatch({ type: "logout" });
    Navigate("/");
  };

  return (
    <>
      <div className="dashboard-container">
        <div className="dash-left">
          <NavLink to="profile" className="dashboard-link">
            <i className="fa-solid fa-user"></i>
            <span className="hide">Profile</span>
          </NavLink>
          <NavLink to="addnews" className="dashboard-link">
            <i className="fa-solid fa-plus"></i>
            <span className="hide">Add News</span>
          </NavLink>
          <NavLink to="adminnews" className="dashboard-link">
            <i className="fa-solid fa-newspaper"></i>
            <span className="hide">My News</span>
          </NavLink>
          <button onClick={HandleClick}>
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
            <span className="hide">Log Out</span>
          </button>
        </div>
        <div className="dash-right">
          <h3>{authToken}</h3>
          <p>login successfull.</p>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
