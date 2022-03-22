import React, { useEffect } from "react";
import "../css/Navbar.css";
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const token = JSON.parse(localStorage.getItem("@token"))?.token;
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
            {token ? (
              <li className="" >
                <a href="/myprofile" style={{ float: "right" }}>My Profile</a>
              </li>
            ) : (
              <li className="navright">
                <a href="/login">SignIn</a>
              </li>
            )}
          </ul>
        </div>
      </div>
      {open && <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          backgroundColor: "none !important"
        }}
      >
        <Box style={{
          background: "white",
          float: "right",
          marginTop: "52px",
          width: "155px",
          marginRight: "9px",
          height: "157px"
        }}>
           <ul className="nav-ul" style={{display:"grid",marginRight:"15px"}}>
            <li>
              <a href="/events">My profile</a>
            </li>
            <li>
              <a href="/subplan">Events</a>
            </li>
            <li>
              <a href="/events">Logout</a>
            </li>
            </ul>
        </Box>
      </Modal>}
    </>
  );
}
