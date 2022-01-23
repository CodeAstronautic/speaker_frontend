import React from 'react'
import "./css/Navbar.css";
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Navbar() {
    return (
        <>
            <div className="container">
                <div className='logo'> 
                <img src={require("./images/logo.jpg") }  alt={""} />
                </div>
                <div>
                <ul>
                <li><a href="/">Events</a></li>
                <li><a href="/">Plans</a></li>        
                <li><a href="/">About</a></li>
                <li className="navright"><a href="/">SignIn</a></li>
                </ul>
                </div>
              
            
        </div>
        </>
    )
}

