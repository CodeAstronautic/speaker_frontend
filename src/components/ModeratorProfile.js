import React from "react";
import "./css/ModeratorProfile.css";
import user from "./images/profile.png";

export default function ModeratorProfile() {
  return (
    <>
      <div className="mp-parent">
        <div className="mp-left">
          <div className="mp-upper">
            <div className="mpl-left">
              <h5 style={{ textAlign: "center", marginBottom: "0.8rem" }}>
                CHANGE DETAILS
              </h5>

              <div className="cdrow">
                <div className="cdr-box"></div>
                <span>BASIC INFORMATION</span>
              </div>
              <div className="cdrow">
                <div className="cdr-box"></div>
                <span>ACCOUNT</span>
              </div>
              <div className="cdrow">
                <div className="cdr-box"></div>
                <span>EVENT REQUESTS</span>
              </div>
              <div className="cdrow">
                <div className="cdr-box"></div>
                <span>ARCHIVED PLANS</span>
              </div>
              <div className="cdrow">
                <div className="cdr-box"></div>
                <span>SUBSCRIPTION PLANS</span>
              </div>
              <div className="cdrow">
                <div className="cdr-box"></div>
                <span>EVENTS REQUESTS</span>
              </div>
              <div className="cdrow">
                <div className="cdr-box"></div>
                <span>FLAGGED SECTION</span>
              </div>
              <div className="cdrow">
                <div className="cdr-box"></div>
                <span>LOGOUT</span>
              </div>
            </div>
            <div className="mpl-right">
              <div className="mpl-heading">
                <p>BASIC INFORMATION</p>
                <button>Edit</button>
              </div>
              <div className="mpedit-section">
                <div className="mpes-form">
                  <p>Name of the event</p>
                  <input
                    type="text"
                    className="mpes-input"
                    placeholder="Write Here"
                  />
                  <p>Age</p>
                  <input
                    type="text"
                    className="mpes-input"
                    placeholder="Write Here"
                  />
                  <p>Phone Number</p>
                  <input
                    type="text"
                    className="mpes-input"
                    placeholder="Write Here"
                  />
                  <p>Occupation</p>
                  <input
                    type="text"
                    className="mpes-input"
                    placeholder="Write Here"
                  />
                </div>
                <div className="mpes-profilepic">
                  <img src={user} alt="" />
                  <div className="mpesdp-change">
                    <span style={{ marginTop: "12rem" }}>Change</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "2rem" }}>
            Your information is secured with SpeakerOre
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
              <div>></div>
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
              <div>></div>
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
              <div>></div>
            </span>
            <div
              style={{ marginTop: "10px", marginTop: "5rem" }}
              className="eprbtn1"
            >
              Contact Us
            </div>
          </div>
        </div>
      </div>
      <div className="disclaimer"></div>
    </>
  );
}
