import React, { useState } from "react";
import "./css/SignInUp.css";
import user from "./images/profile.png";
import axios from "axios";
import { BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const SignInUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()
  console.log(process.env.REACT_APP_URL,"process.env.REACT_APP_URLprocess.env.REACT_APP_URL")
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_URL}/auth/login/`, {
        idToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm92aWRlciI6IkdPT0dMRSIsImlkIjozLCJpYXQiOjE2MDk1NjczODB9.1Pfo2rS15iat0B_A1niv2MKawFw6sgWAmc0qOL73Was",
        provider: "GOOGLE",
        name: "Brijesh Bumrela 2",
        phone: "8668916913",
        email: "brijeshbumrela@gmail.com",
      })
      .then((data) => {
        localStorage.setItem("@userData", JSON.stringify(data?.data));
        navigate('/events')
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mp-parent" style={{ background: "none", marginTop: "0" }}>
      <div className="mp-left siu-left">
        <div className="siul-child">
          <div className="mpl-heading">
            <p>Become a member now!</p>
            <button>Already a memeber? SIGN IN</button>
          </div>
          <form>
            {/* <div className="siuinput-parent">
            <p>Full Name</p>
            <input type="text" className="siu-input" placeholder="Full Name" />
          </div> */}

            <div className="siuinput-parent">
              <p>Email Address</p>
              <input
                type="email"
                className="siu-input"
                placeholder="xyz@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="siuinput-parent">
              <p>Password </p>
              <input
                type="password"
                className="siu-input"
                placeholder="12345"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="siubtn-parent">
              <div className="eprbtn1 siubtn1">
                <button
                  type="button"
                  onClick={handleSubmit}
                  style={{
                    background: "#ffbf19",
                    borderStyle: "none",
                  }}
                >
                  SIGN - UP
                </button>
              </div>
              <h3
                style={{
                  color: "grey",
                  margin: "2rem",
                }}
              >
                OR
              </h3>
              <div className="eprbtn2 siubtn1">SIGN - UP WITH GOOGLE</div>
              <div className="eprbtn2 siubtn1" style={{ width: "fit-content" }}>
                SIGN - UP WITH FACEBOOK
              </div>
            </div>
          </form>
        </div>
        <div className="siul-child">
          <p>
            COMPONENT TO SHOW THE PROCESS OF WHAT A USER CAN ONCE HE SIGNS IN.
          </p>
        </div>
      </div>
      <div className="ep-right">
        <div className="eprcard">
          <div className="avatar-parent">
            <img src={user} alt="" />
          </div>
          <p>
            Hi, <b style={{ fontWeight: "500" }}>Mohit Gopal!</b>
          </p>
          <span className="eprtext1">Event Manager</span>
          <div style={{ marginTop: "3rem" }} className="eprbtn2">
            Create a new event
          </div>
          <div className="eprbtn2">SpeakerOre exclusive Events</div>
          <div
            style={{
              marginTop: "0",
              background: "rgba(255, 191, 25, 0.4)",
            }}
            className="eprbtn1"
          >
            Subscribed
          </div>
        </div>

        <div className="eprcard">
          <p>
            <b style={{ fontWeight: "500" }}>Reources</b>
          </p>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1.3rem",
            }}
            className="eprtext1"
          >
            <div>About Us</div>
            <div>
              <BsChevronRight />
            </div>
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1.3rem",
            }}
            className="eprtext1"
          >
            <div>How it works</div>
            <div>
              <BsChevronRight />
            </div>
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1.3rem",
            }}
            className="eprtext1"
          >
            <div>Privacy Policy</div>
            <div>
              <BsChevronRight />
            </div>
          </span>
          <div style={{ marginTop: "10px" }} className="eprbtn1">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignInUp;
