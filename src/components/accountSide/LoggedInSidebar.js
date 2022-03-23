import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/About2.css";
export default function LoggedInSidebar({ setisExclusive }) {
  const [userData, setUser] = useState("");
  const isLoggedin = JSON.parse(localStorage.getItem("@token"))?.userdata;
  useEffect(() => {
    if (userData) {
      axios
        .get(
          `${process.env.REACT_APP_URL}/auth/get-loogedin/${
            JSON.parse(localStorage.getItem("@token"))?.userdata?.id
          }`
        )
        .then((data) => {
          setUser(data?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  console.log(isLoggedin,"isLoggedinisLoggedin")
  return (
    <div className="ep-right">
      <div className="eprcard">
        <div className="avatar-parent">
          <img src="" alt="" />
        </div>
        <p>
          Hi,{" "}
          {isLoggedin ? (
            <b style={{ fontWeight: "500" }}>{isLoggedin?.name}!</b>
          ) : (
            ""
          )}
          {!isLoggedin && <b style={{ fontWeight: "500" }}>Stranger</b>}
        </p>
        <span className="eprtext1">{userData?.role ? userData?.role : ""}</span>
        {JSON.parse(localStorage.getItem("@token"))?.userdata &&
        JSON.parse(localStorage.getItem("@token"))?.userdata?.role !==
          "USER" ? (
          <div style={{ marginTop: "3rem" }} className="eprbtn2">
            <a href="/addevent">Create a new event</a>
          </div>
        ) : (
          ""
        )}
        {!JSON.parse(localStorage.getItem("@token"))?.userdata && (
          <div style={{ marginTop: "3rem" }} className="eprbtn2">
            <a href="/login">Sign Up</a>
          </div>
        )}
        {JSON.parse(localStorage.getItem("@token"))?.userdata && (
          <a href="/single-event-ex">
            <div className="eprbtn2">SpeakerOre exclusive Events</div>
          </a>
        )}
        {JSON.parse(localStorage.getItem("@token"))?.userdata && (
          <div
            style={{
              marginTop: "0",
              background: "rgba(255, 191, 25, 0.4)",
            }}
            className="eprbtn1"
          >
            Subscribed
          </div>
        )}
      </div>

      <div className="eprcard">
        <p>
          <b style={{ fontWeight: "500" }}>Resources</b>
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
          <div></div>
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
          <div></div>
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
          <div></div>
        </span>
        <div style={{ marginTop: "10px" }} className="eprbtn1">
          Contact Us
        </div>
      </div>
    </div>
  );
}
