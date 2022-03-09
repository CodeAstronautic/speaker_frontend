import React, { useState } from "react";
import "../css/addeventpage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoggedInSidebar from "../accountSide/LoggedInSidebar";

export default function Addeventpage() {
  const [name, setName] = useState("");
  const [start_time, setstart_time] = useState("");
  const [about, setabout] = useState("");
  const [location, setlocation] = useState("");
  const [mode, setMode] = useState()
  const [topic, setTopic] = useState()
  const [AudienceType, setAudienceType] = useState()
  const [paymentTerm, setpaymentTerm] = useState()
  const [eventIncludes, seteventIncludes] = useState()
  const [contact, setcontact] = useState()
  const [sessionType, setsessionType] = useState()
  const [tags, settags] = useState()
  const [isExclusive, setisExclusive] = useState()

  const navigate = useNavigate();
  const handleEventCreate = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      street: "091 Willms Via",
      state: "Louisiana",
      country: location,
      start_time: start_time || "",
      end_time: "2021-09-01T04:49:42.144Z",
      email: "Colt36@hotmail.com",
      about: about,
      city: "Justinetown",
      postalCode: "56525",
      website: '',
      mode: mode,
      topic: topic,
      location: location,
      paymentTerm: paymentTerm,
      eventIncludes: eventIncludes,
      contact: contact,
      sessionType: sessionType,
      AudienceType: AudienceType,
      tags: tags,
      description:
        "Praesentium omnis et dolore omnis dolores. Tempora non ut rem. Aut et beatae quisquam. Non eius nobis et eum porro qui facilis possimus ab.",
      categories: [
        "et",
        "minus",
        "dolorum",
        "ipsa",
      ],
    };
    axios
      .post(`${process.env.REACT_APP_URL}/events`, data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("@token")).token
            }`,
        },
      })
      .then((data) => {
        if (data?.data) {
          navigate("/events");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="mp-parent">
        <form onSubmit={handleEventCreate}>
          <div className="mp-left">
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
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                      <p>Date of the event</p>
                      <input
                        type="date"
                        className="mpes-input"
                        placeholder="Write Here"
                        value={start_time}
                        onChange={(e) => setstart_time(e.target.value)}
                      />
                      <p>Mode</p>
                      <select
                        className="mpes-input"
                        style={{
                          paddingTop: "0",
                          paddingBottom: "0",
                          color: "grey",
                        }}
                        onChange={(e) => setMode(e.target.value)}
                        value={mode}
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
                        value={location}
                        onChange={(e) => setlocation(e.target.value)}
                      />
                      <p>Topic covered</p>
                      <input
                        type="text"
                        className="mpes-input"
                        placeholder="Write Here"
                        onChange={(e) => setTopic(e.target.value)}
                        value={topic}
                      />
                      <p>Audience Size</p>
                      <input
                        type="text"
                        className="mpes-input"
                        placeholder="Write Here"
                        onChange={(e) => setAudienceType(e.target.value)}
                        value={AudienceType}
                      />
                      <p>Payment Terms</p>
                      <select
                        className="mpes-input"
                        style={{
                          paddingTop: "0",
                          paddingBottom: "0",
                          color: "grey",
                        }}
                        onChange={(e) => setpaymentTerm(e.target.value)}
                        value={paymentTerm}
                      >
                        {/* <option value="Online" selected>Choose Mode</option> */}
                        <option value="Paid" selected>
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
                        value={eventIncludes}
                        onChange={(e) => seteventIncludes(e.target.value)}
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
                        value={about}
                        onChange={(e) => setabout(e.target.value)}
                      ></textarea>
                      <p>Contact Information:</p>
                      <input
                        type="number"
                        className="mpes-input"
                        placeholder="Write Here"
                        value={contact}
                        onChange={(e) => setcontact(e.target.value)}
                      />
                      <p>Session Type</p>
                      <select
                        className="mpes-input"
                        style={{
                          paddingTop: "0",
                          paddingBottom: "0",
                          color: "grey",
                        }}
                        value={sessionType}
                        onChange={(e) => setsessionType(e.target.value)}
                      >
                        <option value="ChooseMode" >
                          Choose Mode
                        </option>
                        <option value="Conference" >
                          Conference
                        </option>
                        <option value="Offline">Offline</option>
                      </select>
                      <p>Audience Type</p>
                      <input
                        type="text"
                        className="mpes-input"
                        placeholder="Write Here"
                        value={AudienceType}
                        onChange={(e) => setAudienceType(e.target.value)}
                      />
                      <p>Tags</p>
                      <div className="tag-div">
                        <input
                          type="text"
                          className="mpes-input"
                          placeholder="first"
                          value={tags}
                          onChange={(e) => settags(e.target.value)}
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
                      <input
                        type="checkbox"
                        style={{ position: "initial" }}
                        className="apply1"
                        name="apply1"
                        value={isExclusive}
                        onChange={(e) => setisExclusive(e.target.value)}
                      />
                      <div className="conu-text">
                        <h4>Apply for SpeakerOre Exclusive</h4>
                        <span>
                          Events only for SpeakerOre subscribers. All the
                          speaker in these events will be selected among
                          speakers or members.
                        </span>
                      </div>
                    </div>
                    <div className="con-lower">
                      <button
                        className="con-lower-btn eprbtn2"
                        style={{
                          margin: "1rem",
                          border: "1px solid #ffbf19",
                          background: "none",
                        }}
                      >
                        Cancel Event
                      </button>
                      <button
                        className="con-lower-btn eprbtn1"
                        style={{
                          margin: "1rem",
                        }}
                      >
                        Add Event
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <LoggedInSidebar />
       
      </div>
    </>
  );
}
