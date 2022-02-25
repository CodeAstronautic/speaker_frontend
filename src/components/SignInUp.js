import React, { useState } from "react";
import "./css/SignInUp.css";
import user from "./images/profile.png";
import axios from "axios";
import { BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const SignInUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [tabs, setTabs] = useState(0)
  const [message, setMessage] = useState("")
  // const [provider, setProvider] = useState()
  const navigate = useNavigate()
  console.log(process.env.REACT_APP_URL, "process.env.REACT_APP_URLprocess.env.REACT_APP_URL")
  const handleSubmit = (e, provide) => {

    if (email == "") {
      return setMessage("Please enter the details")
    }
    e.preventDefault();
    if (provide) {
      axios
        .post(`${process.env.REACT_APP_URL}/auth/login/`, {
          name: name,
          phone: phone,
          email: email,
          provider: provide
        })
        .then((data) => {
          console.log()
          localStorage.setItem("@userData", JSON.stringify(data?.data));
          if (data?.data?.isSubscribed) {
            navigate('/events')
          } else {
            navigate("/subplan")
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  console.log(message, "kjlkjl")
  return (
    <div className="mp-parent" style={{ background: "none", marginTop: "0" }}>
      <div className="mp-left siu-left">
        <div className="siul-child">
          <div className="mpl-heading" >
            <p onClick={() => setTabs(1)}>Become a member now!</p>
            <button onClick={() => setTabs(0)}>Already a memeber? SIGN IN</button>
          </div>
          {message && <p style={{
            color: "red",
            padding: "10px",
            textAlign: "center"
          }}>{message}</p>}
          {tabs === 0 && <form>
            <div className="siuinput-parent">
              <p>Name</p>
              <input
                type="text"
                className="siu-input"
                placeholder="enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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

            <div className="siubtn-parent">

              <div className="eprbtn2 siubtn1" onClick={(e) => handleSubmit(e, "GOOGLE")}>SIGN - UP WITH GOOGLE</div>
              <h3
                style={{
                  color: "grey",
                  margin: "2rem",
                }}
              >
                OR
              </h3>
              <div className="eprbtn2 siubtn1" style={{ width: "fit-content" }} onClick={(e) => handleSubmit(e, "FACEBOOK")}>
                SIGN - UP WITH FACEBOOK
              </div>
            </div>
          </form>}
          {tabs === 1 && <form>

            <div className="siuinput-parent">
              <p>Name</p>
              <input
                type="text"
                className="siu-input"
                placeholder="enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
              <p>Phone</p>
              <input
                type="number"
                className="siu-input"
                placeholder="015675675"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="siubtn-parent">
              <div className="eprbtn2 siubtn1" onClick={(e) => handleSubmit(e, "GOOGLE")}>SIGN - UP WITH GOOGLE</div>
              <h3
                style={{
                  color: "grey",
                  margin: "2rem",
                }}
              >
                OR
              </h3>
              <div className="eprbtn2 siubtn1" style={{ width: "fit-content" }} onClick={(e) => handleSubmit(e, "FACEBOOK")}>
                SIGN - UP WITH FACEBOOK
              </div>
            </div>
          </form>}
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
