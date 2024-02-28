import React from "react";
import AuthContext from "../../context/ContextApi";
import { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "../../styles/Dashboard.css"
import WindowScroll from "../../rules/WindowScroll";

const Dashboard = () => {
  const Token = useContext(AuthContext);
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
          <NavLink to="profile" className="dashboard-link" onClick={WindowScroll()}>
            <i className="fa-solid fa-user"></i>
            <span className="hide">Profile</span>
          </NavLink>
          <NavLink to="addnews" className="dashboard-link" onClick={WindowScroll()}>
            <i className="fa-solid fa-plus"></i>
            <span className="hide">Add News</span>
          </NavLink>
          <NavLink to="adminnews" className="dashboard-link" onClick={WindowScroll()}>
            <i className="fa-solid fa-newspaper"></i>
            <span className="hide">My News</span>
          </NavLink>
          <button onClick={HandleClick}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span className="hide">Log Out</span>
          </button>
        </div>
        <div className="dash-right">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
