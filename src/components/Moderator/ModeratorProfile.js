import React from "react";
import "../css/ModeratorProfile.css";
import user from "../images/profile.png";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import LoggedInSidebar from "../accountSide/LoggedInSidebar";

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
          <div className="mp-lower">
            <div className="mpl-right">
              <div className="mpl-heading">
                <p>Event Details</p>
                <button>Show previous events hosted</button>
              </div>
              <div className="mplower-body">
                <div className="mpedit-section">
                  <div className="mpes-form">
                    <p>Name of the event</p>
                    <input
                      type="text"
                      className="mpes-input"
                      placeholder="Write Here"
                    />
                    <p>Date of the event</p>
                    <input
                      type="date"
                      className="mpes-input"
                      placeholder="Write Here"
                    />
                    <p>Mode</p>
                    <select
                      className="mpes-input"
                      style={{
                        paddingTop: "0",
                        paddingBottom: "0",
                        color: "grey",
                      }}
                    >
                      <option value="Online" selected>
                        Choose Mode
                      </option>
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                    </select>
                    <p>Location</p>
                    <input
                      type="text"
                      className="mpes-input"
                      placeholder="Write Here"
                    />
                    <p>Topic covered</p>
                    <input
                      type="text"
                      className="mpes-input"
                      placeholder="Write Here"
                    />
                    <p>Audience Size</p>
                    <input
                      type="text"
                      className="mpes-input"
                      placeholder="Write Here"
                    />
                    <p>Payment Terms</p>
                    <select
                      className="mpes-input"
                      style={{
                        paddingTop: "0",
                        paddingBottom: "0",
                        color: "grey",
                      }}
                    >
                      {/* <option value="Online" selected>Choose Mode</option> */}
                      <option value="Online" selected>
                        Paid
                      </option>
                      <option value="Offline">Offline</option>
                    </select>
                  </div>
                  <div className="mpes-form">
                    <p>This event includes (in short):</p>
                    <textarea
                      rows="4"
                      cols="46"
                      placeholder="A small about the event that is going to be held for the speakers."
                      style={{
                        background: "#F5F5F5",
                        borderRadius: "10px",
                        padding: "0.5rem",
                        marginBottom: "1rem",
                      }}
                      res
                    ></textarea>
                    <p>About (elaborate)</p>
                    <textarea
                      rows="5"
                      cols="46"
                      placeholder="A small about the event that is going to be held for the speakers."
                      style={{
                        borderRadius: "10px",
                        padding: "0.5rem",
                        marginBottom: "1rem",
                      }}
                      res
                    ></textarea>
                    <p>Contact Information:</p>
                    <input
                      type="number"
                      className="mpes-input"
                      placeholder="Write Here"
                    />
                    <p>Session Type</p>
                    <select
                      className="mpes-input"
                      style={{
                        paddingTop: "0",
                        paddingBottom: "0",
                        color: "grey",
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
                    <p>Audience Type</p>
                    <input
                      type="text"
                      className="mpes-input"
                      placeholder="Write Here"
                    />
                    <p>Tags</p>
                    <div className="tag-div">
                      <input
                        type="text"
                        className="mpes-input"
                        placeholder="first"
                      />
                      <button>ADD</button>
                    </div>
                    <ul className="tags-parent">
                      <li>first</li>
                      <li>second</li>
                      <li>third</li>
                      <li>fourth</li>
                      <li>fifth</li>
                    </ul>
                  </div>
                </div>
                <div className="confirmation">
                  <div className="con-upper">
                  <input type="checkbox" style={{position:'initial'}} className="apply1" name="apply1"/>
                  <div className="conu-text">
                  <h4>Apply for SpeakerOre Exclusive</h4>
                  <span>Events only for SpeakerOre subscribers. All the speaker in these events will be selected among speakers or members.</span>
                  </div>
                  </div>
                  <div className="con-lower">
                        <button className="con-lower-btn eprbtn2" style={{
                            margin: '1rem', border:'1px solid #ffbf19',background:'none'
                        }}>Cancel Event</button>
                        <button className="con-lower-btn eprbtn1" style={{
                            margin: '1rem'
                        }}>Add Event</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     <LoggedInSidebar />
      </div>
    </>
  );
}
