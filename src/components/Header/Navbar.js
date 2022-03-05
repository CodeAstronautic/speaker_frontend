import React, { useEffect } from "react";
import "../css/Navbar.css";
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Navbar() {
  const token = JSON.parse(localStorage.getItem('@token'))?.token
  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={require("../images/logo.jpg")} alt={""} />
        </div>
        <div>
          <ul className="nav-ul">
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/subplan">Plans</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            {token ? <li className="navright">
              <a href="/myprofile">myprofile</a>
            </li> : <li className="navright">
              <a href="/login">SignIn</a>
            </li>}
          </ul>
        </div>
      </div>
    </>
  );
}
