import React from "react";
// import "./css/SingleEventPageExclusive.css";
import user from "./images/profile.png";
import {
  BsChevronRight,
  BsChevronLeft,
  BsFlag,
  BsBookmark,
  BsCalendar3,
  BsLink45Deg,
  BsFillCalendarEventFill,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { BiMap } from "react-icons/bi";

export default function SingleEventPageExclusive() {
  return (
    <div className="mp-parent">
      <div className="mp-left">
        <div className="sep-eventinfo">
          <div className="sep-einfo-head">
            <button>
              <span style={{ position: "relative", top: "3px" }}>
                <BsChevronLeft />
              </span>
              <span>Back to Events Search </span>
            </button>
            <div>
              <div>
                <BsFlag />
              </div>
              <div>
                <BsBookmark />
              </div>
            </div>
          </div>
          <div
            className="sep-einfo-body"
            style={{ paddingBottom: "0", paddingRight: "0" }}
          >
            <div className="eib-left">
              <div className="eibl-ename">EVENT NAME</div>
              <div className="eibl-eplace">New Delhi, India</div>
              <div className="eibl-oname" style={{ marginBottom: "0.4rem" }}>
                <span>Organiser Name: </span>
                <span>Mohit Gopal</span>
              </div>
              <div className="eibl-mode" style={{ marginBottom: "0.4rem" }}>
                <span>Event Mode: </span>
                <span>ONLINE</span>
              </div>
              <div className="eibl-date" style={{ marginBottom: "0.4rem" }}>
                <span
                  style={{ position: "relative", top: "3px", marginLeft: "0" }}
                >
                  <BsCalendar3 />
                </span>
                <span>Date:</span>
                <span>29th Dec’2021</span>
              </div>
              <div className="eibl-location" style={{ marginBottom: "0.4rem" }}>
                <span
                  style={{ position: "relative", top: "3px", marginLeft: "0" }}
                >
                  <BiMap />
                </span>
                <span>Location:</span>
                <span>**Not required</span>
              </div>
              <div className="eibl-link" style={{ marginBottom: "0.4rem" }}>
                <span
                  style={{ position: "relative", top: "3px", marginLeft: "0" }}
                >
                  <BsLink45Deg />
                </span>
                <span>Link:</span>
                <span> https://www.google.com</span>
              </div>
            </div>
            <div className="eib-right">
              <div className="eibr-header">About this event:</div>
              <div className="eibr-body">
                <span>
                  Tags: Film Industry, Actors, Hotel, Speaking, Guests
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nunc lorem nam parturient. Sit donec ornare tristique
                  vulputate quisque. Suscipit auctor proin nisl pretium cum
                  magna id egestas. Mauris iaculis sagittis tortor scelerisque
                  praesent aliquam aliquam. Dolor tincidunt id habitasse purus
                  lacus, euismod erat. Varius sem nam euismod volutpat eu
                  commodo pellentesque sollicitudin eget. Accumsan venenatis
                  libero eget accumsan, gravida quis auctor amet. Ut nibh
                  consectetur lorem.
                </p>
              </div>
            </div>
          </div>
          <div className="sep-einfo-foot" style={{color:'rgba(40, 166, 20, 1)'}}>
          This is speakerore exclusive event. You can apply via mailing to the organizer.
          </div>
        </div>

        <div className="mp-lower" style={{ marginTop: "1rem" }}>
          <div className="mpl-right">
            <div className="mpl-heading">
              <p>Mail to Organizer</p>
              <button
                style={{
                  color: "rgba(255, 191, 25, 1)",
                  textDecoration: "underline",
                }}
              >
                SpeakerOre Exclusive Events*
              </button>
            </div>
            <div className="mplower-body">
              <div className="mpedit-section" style={{ columnGap: "0" }}>
                <div className="mpes-form">
                  <p>Full Name</p>
                  <input
                    type="text"
                    className="mpes-input see-forminput"
                    placeholder="Write Here"
                  />
                  <p>Phone Number</p>
                  <input
                    type="text"
                    className="mpes-input see-forminput"
                    placeholder="Write Here"
                  />
                  <p>Address</p>
                  <input
                    type="text"
                    className="mpes-input see-forminput"
                    placeholder="Write Here"
                  />
                  <p>Website</p>
                  <input
                    type="text"
                    className="mpes-input see-forminput"
                    placeholder="Write Here"
                  />
                  <p>Books Authored</p>
                  <input
                    type="text"
                    className="mpes-input see-forminput"
                    placeholder="Write Here"
                  />
                </div>
                <div className="mpes-form">
                  <p>Linkedin Profile</p>
                  <input
                    type="text"
                    className="mpes-input see-forminput"
                    placeholder="Write Here"
                  />
                  <p>Youtube Profile</p>
                  <input
                    type="text"
                    className="mpes-input see-forminput"
                    placeholder="Write Here"
                  />
                  <p>Facebook Profile</p>
                  <input
                    type="text"
                    className="mpes-input see-forminput"
                    placeholder="Write Here"
                  />
                  <p>Twitter Profile</p>
                  <input
                    type="text"
                    className="mpes-input see-forminput"
                    placeholder="Write Here"
                  />
                  <p>Instagram Profile</p>
                  <input
                    type="text"
                    className="mpes-input see-forminput"
                    placeholder="Write Here"
                  />
                </div>
                <div className="mpes-form form-ta">
                  <p>Problems you are helping the audience solve:</p>
                  <textarea
                    rows="5"
                    cols="46"
                    placeholder="Write here..."
                  ></textarea>
                  <p>
                    Sample Keynote Speakers Video Link:*(Write Fresher if no
                    experience yet)
                  </p>
                  <textarea
                    rows="5"
                    cols="46"
                    placeholder="Write here..."
                  ></textarea>
                  <p>
                    Previous speaking references and contact information:*
                    (Write Fresher for no experience yet)
                  </p>
                  <textarea
                    rows="5"
                    cols="46"
                    placeholder="Write here..."
                  ></textarea>
                  <p>
                    Anything extra you want the organizer to know about you:
                  </p>
                  <textarea
                    rows="5"
                    cols="46"
                    placeholder="Write here..."
                  ></textarea>
                </div>
              </div>
              <div className="confirmation">
                <div className="con-upper">
                  <input
                    type="checkbox"
                    style={{ position: "initial" }}
                    class="apply1"
                    name="apply1"
                  />
                  <div className="conu-text">
                    <h4>Applied via SpeakerOre Exclusive </h4>
                    <span style={{fontSize:'medium'}}>
                    Providing a direct way to connect with the event manager via mail. Tip: Share whatever sample you have.
                    </span>
                  </div>
                </div>
                <div className="sepe-middle">**It is not compulsory to apply for the above option, it’s just a pact that you are making with us that you will only be hiring through our platform.</div>
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

        <div style={{ margin: "1rem" }}>
          <span
            style={{
              fontSize: "medium",
              marginLeft: "0.5rem",
              fontWeight: "bold",
            }}
          >
            Similar Events
          </span>
        </div>

        <div className="card-parent" style={{ padding: "0 1rem" }}>
          <div className="vc-sec">
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
            </div>
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
            </div>
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
            </div>
          </div>
          <div className="vc-sec">
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
            </div>
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
            </div>
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
            </div>
          </div>
          <div className="vc-sec">
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
            </div>
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
            </div>
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
            </div>
          </div>
          <div className="vc-sec">
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
            </div>
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
            </div>
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
            </div>
          </div>
          <div className="vc-sec">
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
            </div>
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
            </div>
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
            </div>
          </div>
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
  );
}
