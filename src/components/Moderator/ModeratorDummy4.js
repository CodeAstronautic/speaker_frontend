import React from "react";
import "./ModeratorDummy.css";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import {  BsCalendar3 } from "react-icons/bs";
import LoggedInSidebar from "../accountSide/LoggedInSidebar";

export default function ModeratorDummy4() {
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
              <div className=" mpl-heading">
                <p>SUBSCRIPTION PLANS</p>
              </div>
              <div
                className="st-lower"
                style={{
                  marginLeft: "1.5rem",
                }}
              >
                <div
                  className="stu-left"
                  style={{
                    width: "50%",
                  }}
                >
                  <input
                    className="searchbar"
                    type="text"
                    placeholder="Name of the customer here..."
                    name="search"
                  />
                  <button
                    type="submit"
                    style={{
                      border: " none",
                      color: " white",
                      background: "#ffbf19",
                      borderRadius: " 10px",
                      padding: " 1rem",
                      position: " relative",
                      left: "-0.7rem",
                    }}
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
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
              </div>
              <div className="subplan-sec1">
                <div className="sps1-row">
                  <h5>S. No.</h5>
                  <h5>Name </h5>
                  <h5>Subscription Plan</h5>
                  <h5>Starting Date</h5>
                  <h5>Ending Date</h5>
                  <h5>Location</h5>
                </div>
                <div className="sps1-row">
                  <p>1.</p>
                  <p>Mohit Gopal </p>
                  <p>Monthly</p>
                  <p>31.01.2022</p>
                  <p>28.02.2022</p>
                  <p>New Delhi</p>
                  <button>Edit Details</button>
                </div>
                <div className="sps1-row">
                  <p>1.</p>
                  <p>Mohit Gopal </p>
                  <p>Monthly</p>
                  <p>31.01.2022</p>
                  <p>28.02.2022</p>
                  <p>New Delhi</p>
                  <button>Edit Details</button>
                </div>
                <div className="sps1-row">
                  <p>1.</p>
                  <p>Mohit Gopal </p>
                  <p>Monthly</p>
                  <p>31.01.2022</p>
                  <p>28.02.2022</p>
                  <p>New Delhi</p>
                  <button>Edit Details</button>
                </div>
                <div className="sps1-row">
                  <p>1.</p>
                  <p>Mohit Gopal </p>
                  <p>Monthly</p>
                  <p>31.01.2022</p>
                  <p>28.02.2022</p>
                  <p>New Delhi</p>
                  <button>Edit Details</button>
                </div>
              </div>
              <div className="subplan-sec2">
                <h3
                  style={{
                    textAlign: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  Suscription Plan Details
                </h3>
                <p
                  style={{
                    textAlign: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  Editing as Mohit Gopal
                </p>
                <div className="sps1-row">
                  <p>Name</p>
                  <p>Subscription Plan</p>
                  <p>Started on</p>
                  <p>Ends on</p>
                  <p>Email address</p>
                  <p>Paid</p>
                </div>
                <div className="sps1-row">
                  <h5>Mohit Gopal</h5>
                  <h5>Monthly</h5>
                  <h5 style={{ display: "flex" }}>
                    31.01.2022
                    <div style={{ marginLeft: "0.5rem", textAlign: "center" }}>
                      <BsCalendar3 />
                      <button
                        style={{
                          outline: "none",
                          background: "none",
                          border: "none",
                          textDecoration: "underline",
                          fontSize: "small",
                        }}
                      >
                        Change
                      </button>
                    </div>
                  </h5>
                  <h5 style={{ display: "flex" }}>
                    28.02.2022
                    <div style={{ marginLeft: "0.5rem", textAlign: "center" }}>
                      <BsCalendar3 />
                      <button
                        style={{
                          outline: "none",
                          background: "none",
                          border: "none",
                          textDecoration: "underline",
                          fontSize: "small",
                        }}
                      >
                        Change
                      </button>
                    </div>
                  </h5>
                  <h5>mohit.gopal18@gmail.com</h5>
                  <h5>Rs.599/-</h5>
                </div>
                <div className="mdlheader mpl-heading">
                  <p>Update Details</p>
                </div>
                <p>
                  <b>Mohit Gopal</b> changed the suscription ending date from{" "}
                  <b>28.02.2022</b> to <b>30.03.2022</b>
                </p>
                <p>
                  <b>Mohit Gopal</b> changed the suscription ending date from{" "}
                  <b>28.02.2022</b> to <b>30.03.2022</b>
                </p>
                <p>
                  <b>Mohit Gopal</b> changed the suscription ending date from{" "}
                  <b>28.02.2022</b> to <b>30.03.2022</b>
                </p>
                <div className="con-lower">
                  <button
                    className="con-lower-btn eprbtn2"
                    style={{
                      margin: "1rem",
                      border: "1px solid #ffbf19",
                      background: "none",
                    }}
                  >
                    Cancel Subscription
                  </button>
                  <button
                    className="con-lower-btn eprbtn1"
                    style={{
                      margin: "1rem",
                      
                    }}
                  >
                    Update Subscription
                  </button>
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
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
        </div>
        <LoggedInSidebar />
      </div>
    </>
  );
}
