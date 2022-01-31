import React from "react";
import user from "./images/profile.png";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";

export default function BillingInformation() {
  return (
    <div className="mp-parent">
      <div className="mp-left">
        <div className="mp-upper">
          <div className="mpl-left">
            <h5
              style={{
                margin: "0 auto 1rem auto",
                borderBottom: "2px solid #ffbf19",
                width: "fit-content",
                paddingBottom: "0.5rem",
              }}
            >
              PROFILE DETAILS
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
              <span>EVENTS</span>
            </div>
            <div className="cdrow active-tab">
              <div className="cdr-box"></div>
              <span>BILLING INFORMATION</span>
            </div>
            <div className="cdrow">
              <div className="cdr-box"></div>
              <span>LOGOUT</span>
            </div>
          </div>
          <div className="mpl-right">
            <div className="mpl-heading">
              <p>BILLING INFORMATION</p>
            </div>
            <div className="mpedit-section">
              <div className="mpes-form">
                <div className="bill-header">
                  <span style={{ marginBottom: "1rem" }}>Bank Account</span>
                  <button style={{
                    background:' none',
                    textDecoration:' underline',
                    border:' none',
                    outline:' none',
                    marginTop: '-3px',
                  }}>Change</button>
                </div>
                <p>IFSC</p>
                <input
                  type="text"
                  className="mpes-input"
                  placeholder="Write Here"
                />
                <p>Account Number</p>
                <input
                  type="text"
                  className="mpes-input"
                  placeholder="Write Here"
                />
                <p>Beneficiary</p>
                <input
                  type="text"
                  className="mpes-input"
                  placeholder="Write Here"
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "2rem", display: "flex" }}>
          <span style={{ fontSize: "2rem" }}>
            <AiOutlineSafetyCertificate />
          </span>
          <span
            style={{
              fontSize: "small",
              marginLeft: "0.5rem",
              fontWeight: "bold",
            }}
          >
            Your information is secured with <br /> SpeakerOre
          </span>
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
            style={{ marginTop: "10px", }}
            className="eprbtn1"
          >
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
}
