import React from "react";
import "./ModeratorDummy.css";
import user from "../images/profile.png";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BsChevronRight, BsChevronDown, BsCalendar3 } from "react-icons/bs";
import { BiMap } from "react-icons/bi";

export default function ModeratorDummy2() {
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
              <div className="md-header mpl-heading">
                <p>ARCHIVED EVENTS</p>
                <button>Total Request Pending: 30</button>
              </div>
              <div
                className="st-lower"
                style={{
                  marginLeft: "1.5rem",
                }}
              >
                <div className="stl-child">
                  <p className="stlc-text">Location: </p>
                  <select
                    className="stlc-field "
                    style={{
                      background: "#e4e4e4",
                      color: "#000",
                    }}
                  >
                    <option value="Online" selected>
                      Choose Mode
                    </option>
                    <option value="Online" selected>
                      Conference
                    </option>
                    <option value="Offline">Offline</option>
                  </select>
                </div>
                <div className="stl-child">
                  <p className="stlc-text">Sort: </p>
                  <select
                    className="stlc-field "
                    style={{
                      background: "#e4e4e4",
                      color: "#000",
                    }}
                  >
                    <option value="Online" selected>
                      Choose Mode
                    </option>
                    <option value="Online" selected>
                      Conference
                    </option>
                    <option value="Offline">Offline</option>
                  </select>
                </div>
                <div className="stl-child">
                  <p className="stlc-text">from: </p>

                  <input
                    type="date"
                    className=" stlc-field"
                    style={{
                      background: "#e4e4e4",
                      color: "#000",
                    }}
                    placeholder="dd/mm/yyyy"
                  />
                </div>
                <div className="stl-child">
                  <p className="stlc-text">to: </p>

                  <input
                    type="date"
                    className=" stlc-field"
                    style={{
                      background: "#e4e4e4",
                      color: "#000",
                    }}
                    placeholder="dd/mm/yyyy"
                  />
                </div>
              </div>
              <div className="mpedit-section">
                  <div className="md-card-parent">
                    <div className="mdcp-header">
                      <h4>EVENT NAME HERE TILL HERE...</h4>
                      <div>
                        <BsChevronDown />
                      </div>
                    </div>
                    <div className="mdcp-body">
                      <div>
                        <div
                          className="eibl-date"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BsCalendar3 />
                          </span>
                          <span>29th Dec’2021</span>
                        </div>
                        <div
                          className="eibl-location"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BiMap />
                          </span>
                          <span>New Delhi</span>
                        </div>
                      </div>
                      <div style={{}}>
                        ONLINE
                      </div>
                    </div>
                  </div>
                  <div className="md-card-parent">
                    <div className="mdcp-header">
                      <h4>EVENT NAME HERE TILL HERE...</h4>
                      <div>
                        <BsChevronDown />
                      </div>
                    </div>
                    <div className="mdcp-body">
                      <div>
                        <div
                          className="eibl-date"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BsCalendar3 />
                          </span>
                          <span>29th Dec’2021</span>
                        </div>
                        <div
                          className="eibl-location"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BiMap />
                          </span>
                          <span>New Delhi</span>
                        </div>
                      </div>
                      <div style={{}}>
                        ONLINE
                      </div>
                    </div>
                  </div>
                  <div className="md-card-parent">
                    <div className="mdcp-header">
                      <h4>EVENT NAME HERE TILL HERE...</h4>
                      <div>
                        <BsChevronDown />
                      </div>
                    </div>
                    <div className="mdcp-body">
                      <div>
                        <div
                          className="eibl-date"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BsCalendar3 />
                          </span>
                          <span>29th Dec’2021</span>
                        </div>
                        <div
                          className="eibl-location"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BiMap />
                          </span>
                          <span>New Delhi</span>
                        </div>
                      </div>
                      <div style={{}}>
                        ONLINE
                      </div>
                    </div>
                  </div>
                  <div className="md-card-parent">
                    <div className="mdcp-header">
                      <h4>EVENT NAME HERE TILL HERE...</h4>
                      <div>
                        <BsChevronDown />
                      </div>
                    </div>
                    <div className="mdcp-body">
                      <div>
                        <div
                          className="eibl-date"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BsCalendar3 />
                          </span>
                          <span>29th Dec’2021</span>
                        </div>
                        <div
                          className="eibl-location"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BiMap />
                          </span>
                          <span>New Delhi</span>
                        </div>
                      </div>
                      <div style={{}}>
                        ONLINE
                      </div>
                    </div>
                  </div>
                  <div className="md-card-parent">
                    <div className="mdcp-header">
                      <h4>EVENT NAME HERE TILL HERE...</h4>
                      <div>
                        <BsChevronDown />
                      </div>
                    </div>
                    <div className="mdcp-body">
                      <div>
                        <div
                          className="eibl-date"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BsCalendar3 />
                          </span>
                          <span>29th Dec’2021</span>
                        </div>
                        <div
                          className="eibl-location"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BiMap />
                          </span>
                          <span>New Delhi</span>
                        </div>
                      </div>
                      <div style={{}}>
                        ONLINE
                      </div>
                    </div>
                  </div>
                  <div className="md-card-parent">
                    <div className="mdcp-header">
                      <h4>EVENT NAME HERE TILL HERE...</h4>
                      <div>
                        <BsChevronDown />
                      </div>
                    </div>
                    <div className="mdcp-body">
                      <div>
                        <div
                          className="eibl-date"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BsCalendar3 />
                          </span>
                          <span>29th Dec’2021</span>
                        </div>
                        <div
                          className="eibl-location"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BiMap />
                          </span>
                          <span>New Delhi</span>
                        </div>
                      </div>
                      <div style={{}}>
                        ONLINE
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "1rem 2rem", display: "flex" }}>
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
              style={{ marginTop: "10px",}}
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
