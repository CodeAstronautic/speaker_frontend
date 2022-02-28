import React from "react";
import "./css/eventpage.css";
import {
  BsChevronRight,
  BsFillBookmarkFill,
  BsFillCalendarEventFill,
  BsChevronLeft,
} from "react-icons/bs";
import LoggedInSidebar from "./accountSide/LoggedInSidebar";

const BookmarkedEvent = () => {
  return (
    <div className="mp-parent" style={{ background: "none", marginTop: "0" }}>
      <div className="mp-left">
        <div className="view-event" style={{ marginTop: "0" }}>
          <p style={{ marginBottom: "1rem" }}>Bookmarked Events</p>
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
          <div className="event-nav-bottom">
            <div className="enav-prev">
              <span className="enb-icon">
                <BsChevronLeft />
              </span>
              <span>Previous</span>
            </div>
            <ul className="enav-nums">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>...</li>
              <li>15</li>
            </ul>
            <div className="enav-next">
              <span>Next</span>
              <span className="enb-icon">
                <BsChevronRight />
              </span>
            </div>
          </div>
        </div>
      </div>
     <LoggedInSidebar />
    </div>
  );
};
export default BookmarkedEvent;
