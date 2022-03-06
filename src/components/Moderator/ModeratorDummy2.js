import React from "react";
import "./ModeratorDummy.css";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BsChevronDown, BsCalendar3 } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import LoggedInSidebar from "../accountSide/LoggedInSidebar";

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
     <LoggedInSidebar />
      </div>
    </>
  );
}
