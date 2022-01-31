import React from "react";
import "./css/SignInUp.css";
import user from "./images/profile.png";
import {
  BsChevronRight,
  BsFillBookmarkFill,
  BsFillCalendarEventFill,
  BsChevronLeft,
} from "react-icons/bs";
import userblank from "./images/blank-profile-picture.png";

const SignInUp = () => {
  return (
    <div className="mp-parent" style={{ background: "none", marginTop: "0" }}>
      <div className="mp-left siu-left">
        <div className="siul-child">
          <div className="mpl-heading">
            <p>Become a member now!</p>
            <button>Already a memeber? SIGN IN</button>
          </div>
          <div className="siuinput-parent">
            <p>Full Name</p>
            <input type="text" className="siu-input" placeholder="Full Name" />
          </div>
          <div className="siuinput-parent">
            <p>Email Address</p>
            <input
              type="text"
              className="siu-input"
              placeholder="xyz@gmail.com"
            />
          </div>
          <div className="siubtn-parent">
            <div className="eprbtn1 siubtn1">SIGN - UP</div>
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
          <div
            style={{ marginTop: "10px"}}
            className="eprbtn1"
          >
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignInUp;
