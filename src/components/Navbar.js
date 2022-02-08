import React from "react";
import "./css/Navbar.css";
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Navbar() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={require("./images/logo.jpg")} alt={""} />
        </div>
        <div>
          <ul className="nav-ul">
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/">Plans</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li className="navright">
              <a href="/">SignIn</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
