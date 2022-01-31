import React from "react";
import user from "./images/profile.png";
import "./css/MyProfileEvent.css";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import {
  BsFillBookmarkFill,
  BsFillCalendarEventFill,
} from "react-icons/bs";

export default function MyProfileEvent() {
  return (
    <>
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
              <div className="cdrow active-tab">
                <div className="cdr-box"></div>
                <span>EVENTS</span>
              </div>
              <div className="cdrow">
                <div className="cdr-box"></div>
                <span>BILLING INFORMATION</span>
              </div>
              <div className="cdrow">
                <div className="cdr-box"></div>
                <span>LOGOUT</span>
              </div>
            </div>
            <div className="mpe-right">
              <div className="mper-header">
                <p>EVENTS</p>
                <button>Create an event</button>
                <p>Number of events created: 6</p>
              </div>
              <div className="mper-body">
                <div className="mperb-section">
                <div className="event-card">
              <div className="ec-section1">
                <div className="eds1-l">
                  <p className="e1">NEW MOVIE COMMENCING IN THE NEARBY...</p>
                  <p className="e2">New Delhi, India</p>
                </div>
                <div className="eds1-r">
                  <BsFillBookmarkFill />
                </div>
              </div>
              <div className="ec-section2">
                <span>
                  <div style={{ marginRight: "0.5rem", fontSize: "medium" }}>
                    <BsFillCalendarEventFill />
                  </div>
                  <p>Date: 27th December 2021</p>
                </span>
                <p className="e8">ONLINE</p>
              </div>
              <div className="ec-section3">
                Tags: <p className="e4">Industry, Film, Acting, Speaking </p>
              </div>
              <div className="ec-section4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
                turpis turpis eu adipiscing et. Et enim amet faucibus sed
                gravida tristique sagittis diam, habitant. Vel morbi viverra nam
                ac. Justo integer lorem nisl ullamcorper sed. Quam vel placerat.
              </div>
              <div className="ec-section5">
                <button
                  className="eprbtn2"
                  style={{
                    background: "#ffbf19",
                    padding: "0.5rem 2rem",
                  }}
                >
                  View Details
                </button>
              </div>
            </div> <div className="event-card">
              <div className="ec-section1">
                <div className="eds1-l">
                  <p className="e1">NEW MOVIE COMMENCING IN THE NEARBY...</p>
                  <p className="e2">New Delhi, India</p>
                </div>
                <div className="eds1-r">
                  <BsFillBookmarkFill />
                </div>
              </div>
              <div className="ec-section2">
                <span>
                  <div style={{ marginRight: "0.5rem", fontSize: "medium" }}>
                    <BsFillCalendarEventFill />
                  </div>
                  <p>Date: 27th December 2021</p>
                </span>
                <p className="e8">ONLINE</p>
              </div>
              <div className="ec-section3">
                Tags: <p className="e4">Industry, Film, Acting, Speaking </p>
              </div>
              <div className="ec-section4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
                turpis turpis eu adipiscing et. Et enim amet faucibus sed
                gravida tristique sagittis diam, habitant. Vel morbi viverra nam
                ac. Justo integer lorem nisl ullamcorper sed. Quam vel placerat.
              </div>
              <div className="ec-section5">
                <button
                  className="eprbtn2"
                  style={{
                    background: "#ffbf19",
                    padding: "0.5rem 2rem",
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
                </div>
                <div className="mperb-section">
                <div className="event-card">
              <div className="ec-section1">
                <div className="eds1-l">
                  <p className="e1">NEW MOVIE COMMENCING IN THE NEARBY...</p>
                  <p className="e2">New Delhi, India</p>
                </div>
                <div className="eds1-r">
                  <BsFillBookmarkFill />
                </div>
              </div>
              <div className="ec-section2">
                <span>
                  <div style={{ marginRight: "0.5rem", fontSize: "medium" }}>
                    <BsFillCalendarEventFill />
                  </div>
                  <p>Date: 27th December 2021</p>
                </span>
                <p className="e8">ONLINE</p>
              </div>
              <div className="ec-section3">
                Tags: <p className="e4">Industry, Film, Acting, Speaking </p>
              </div>
              <div className="ec-section4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
                turpis turpis eu adipiscing et. Et enim amet faucibus sed
                gravida tristique sagittis diam, habitant. Vel morbi viverra nam
                ac. Justo integer lorem nisl ullamcorper sed. Quam vel placerat.
              </div>
              <div className="ec-section5">
                <button
                  className="eprbtn2"
                  style={{
                    background: "#ffbf19",
                    padding: "0.5rem 2rem",
                  }}
                >
                  View Details
                </button>
              </div>
            </div> <div className="event-card">
              <div className="ec-section1">
                <div className="eds1-l">
                  <p className="e1">NEW MOVIE COMMENCING IN THE NEARBY...</p>
                  <p className="e2">New Delhi, India</p>
                </div>
                <div className="eds1-r">
                  <BsFillBookmarkFill />
                </div>
              </div>
              <div className="ec-section2">
                <span>
                  <div style={{ marginRight: "0.5rem", fontSize: "medium" }}>
                    <BsFillCalendarEventFill />
                  </div>
                  <p>Date: 27th December 2021</p>
                </span>
                <p className="e8">ONLINE</p>
              </div>
              <div className="ec-section3">
                Tags: <p className="e4">Industry, Film, Acting, Speaking </p>
              </div>
              <div className="ec-section4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
                turpis turpis eu adipiscing et. Et enim amet faucibus sed
                gravida tristique sagittis diam, habitant. Vel morbi viverra nam
                ac. Justo integer lorem nisl ullamcorper sed. Quam vel placerat.
              </div>
              <div className="ec-section5">
                <button
                  className="eprbtn2"
                  style={{
                    background: "#ffbf19",
                    padding: "0.5rem 2rem",
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
                </div>
                <div className="mperb-section">
                <div className="event-card">
              <div className="ec-section1">
                <div className="eds1-l">
                  <p className="e1">NEW MOVIE COMMENCING IN THE NEARBY...</p>
                  <p className="e2">New Delhi, India</p>
                </div>
                <div className="eds1-r">
                  <BsFillBookmarkFill />
                </div>
              </div>
              <div className="ec-section2">
                <span>
                  <div style={{ marginRight: "0.5rem", fontSize: "medium" }}>
                    <BsFillCalendarEventFill />
                  </div>
                  <p>Date: 27th December 2021</p>
                </span>
                <p className="e8">ONLINE</p>
              </div>
              <div className="ec-section3">
                Tags: <p className="e4">Industry, Film, Acting, Speaking </p>
              </div>
              <div className="ec-section4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
                turpis turpis eu adipiscing et. Et enim amet faucibus sed
                gravida tristique sagittis diam, habitant. Vel morbi viverra nam
                ac. Justo integer lorem nisl ullamcorper sed. Quam vel placerat.
              </div>
              <div className="ec-section5">
                <button
                  className="eprbtn2"
                  style={{
                    background: "#ffbf19",
                    padding: "0.5rem 2rem",
                  }}
                >
                  View Details
                </button>
              </div>
            </div> <div className="event-card">
              <div className="ec-section1">
                <div className="eds1-l">
                  <p className="e1">NEW MOVIE COMMENCING IN THE NEARBY...</p>
                  <p className="e2">New Delhi, India</p>
                </div>
                <div className="eds1-r">
                  <BsFillBookmarkFill />
                </div>
              </div>
              <div className="ec-section2">
                <span>
                  <div style={{ marginRight: "0.5rem", fontSize: "medium" }}>
                    <BsFillCalendarEventFill />
                  </div>
                  <p>Date: 27th December 2021</p>
                </span>
                <p className="e8">ONLINE</p>
              </div>
              <div className="ec-section3">
                Tags: <p className="e4">Industry, Film, Acting, Speaking </p>
              </div>
              <div className="ec-section4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
                turpis turpis eu adipiscing et. Et enim amet faucibus sed
                gravida tristique sagittis diam, habitant. Vel morbi viverra nam
                ac. Justo integer lorem nisl ullamcorper sed. Quam vel placerat.
              </div>
              <div className="ec-section5">
                <button
                  className="eprbtn2"
                  style={{
                    background: "#ffbf19",
                    padding: "0.5rem 2rem",
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
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
              style={{ marginTop: "10px" }}
              className="eprbtn1"
            >
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
