import React from "react";
import "./css/eventpage.css";
import { BsChevronRight } from "react-icons/bs";
import userblank from "./images/blank-profile-picture.png";

const Eventpage = () => {
  return (
    <div className="mp-parent" style={{ background: "none" }}>
      <div className="mp-left">
        <div className="search-ticket">
          <div className="st-upper">
            <div className="stu-left">
              <input
                className="searchbar"
                type="text"
                placeholder="Search by event name, location, or category name"
                name="search"
              />
              <button type="submit">
                <i class="fa fa-search"></i>
              </button>
            </div>
            <div className="stu-right">
              <input type="checkbox" className="apply1" name="apply1" />
              <div className="stur-text">
                <b className="s1">SpeakerOre Exclusive</b>
                <p
                  className="eprtext1"
                  style={{ fontSize: "x-small", paddingRight: "5rem" }}
                >
                  Events only for SpeakerOre subscribers. All the speaker in
                  these events will be selected among speakers or members.
                </p>
              </div>
            </div>
          </div>

          <div className="st-lower">
            <p className="s3">Location: </p>
            <input type="text" className="s4" placeholder="New Delhi" />
            <p className="s5">Categories:</p>
            <input type="text" className="s6" placeholder="Film Industry" />
            <p className="s7"> Sort:</p>
            <input type="text" className="s8" placeholder="by date" />
            <p className="s9">from</p>
            <input type="text" className="s10" placeholder="dd/mm/yyyy" />
            <p className="s11">to</p>
            <input type="text" className="s12" placeholder="dd/mm/yyyy" />
            <p className="s13">Reset Filter</p>
          </div>
        </div>
      </div>
      <div className="ep-right">
        <div className="eprcard">
          <div className="avatar-parent">
            <img src={userblank} alt="" />
          </div>
          <p>
            Hi, <b style={{ fontWeight: "500" }}>Stranger!</b>
          </p>
          <span className="eprtext1">
            Are you an event manager or a speaker?
          </span>
          <div style={{ marginTop: "3rem" }} className="eprbtn1">
            Sign In
          </div>
          <div className="eprbtn2">Sign Up</div>
          <span className="eprtext1" style={{ fontSize: "x-small" }}>
            Single click Google Sign in.
          </span>

          <div className="pc-seperator">.</div>
          <h5>Why Sign In/Up?</h5>
          <ul className="pc-stranger-perks">
            <li>Get event details for FREE.</li>
            <li>Unlimited clicks on events</li>
            <li>Get hired through speakerOre exclusive events </li>
          </ul>
        </div>

        <div className="eprcard">
          <p>
            <b style={{ fontWeight: "500" }}>My Profile</b>
          </p>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1.3rem",
            }}
            className="eprtext1"
          >
            <div>Basic Information</div>
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
            <div>Account Settings</div>
            <div>
              <BsChevronRight />
            </div>
          </span>
          <div style={{ marginTop: "5rem" }} className="eprbtn2">
            Show Bookmarked Events
          </div>
          <div style={{ marginTop: "10px" }} className="eprbtn1">
            View Profile
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
            style={{ marginTop: "10px", marginTop: "5rem" }}
            className="eprbtn1"
          >
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};
export default Eventpage;
