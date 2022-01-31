import React from "react";
import "./css/eventpage.css";
import {
  BsChevronRight,
  BsFillBookmarkFill,
  BsFillCalendarEventFill,
  BsChevronLeft
} from "react-icons/bs";
import userblank from "./images/blank-profile-picture.png";

const Eventpage = () => {
  return (
    <div className="mp-parent" style={{ background: "none", marginTop: "0" }}>
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
            <div className="stl-child">
              <p className="stlc-text">Location: </p>
              <select
                className="stlc-field "
                // style={{
                //   paddingTop: "0",
                //   paddingBottom: "0",
                //   color: "grey",
                // }}
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
              <p className="stlc-text">Categories: </p>
              <select
                className="stlc-field "
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
            </div>
            <div className="stl-child">
              <p className="stlc-text">Sort: </p>
              <select
                className="stlc-field "
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
            </div>
            <div className="stl-child">
              <p className="stlc-text">from: </p>

              <input
                type="date"
                className=" stlc-field"
                placeholder="dd/mm/yyyy"
              />
            </div>
            <div className="stl-child">
              <p className="stlc-text">to: </p>

              <input
                type="date"
                className=" stlc-field"
                placeholder="dd/mm/yyyy"
              />
            </div>

            <p className="s13">Reset Filter</p>
          </div>
        </div>

        <div className="view-event">
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
                <div style={{marginRight:'0.5rem', fontSize:'medium'}}>
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
              <button className="eprbtn2" style={{
                background:'#ffbf19', padding:'0.5rem 2rem'
              }}>View Details</button>
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
                <div style={{marginRight:'0.5rem', fontSize:'medium'}}>
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
              <button className="eprbtn2" style={{
                background:'#ffbf19', padding:'0.5rem 2rem'
              }}>View Details</button>
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
                <div style={{marginRight:'0.5rem', fontSize:'medium'}}>
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
              <button className="eprbtn2" style={{
                background:'#ffbf19', padding:'0.5rem 2rem'
              }}>View Details</button>
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
                <div style={{marginRight:'0.5rem', fontSize:'medium'}}>
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
              <button className="eprbtn2" style={{
                background:'#ffbf19', padding:'0.5rem 2rem'
              }}>View Details</button>
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
                <div style={{marginRight:'0.5rem', fontSize:'medium'}}>
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
              <button className="eprbtn2" style={{
                background:'#ffbf19', padding:'0.5rem 2rem'
              }}>View Details</button>
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
                <div style={{marginRight:'0.5rem', fontSize:'medium'}}>
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
              <button className="eprbtn2" style={{
                background:'#ffbf19', padding:'0.5rem 2rem'
              }}>View Details</button>
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
                <div style={{marginRight:'0.5rem', fontSize:'medium'}}>
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
              <button className="eprbtn2" style={{
                background:'#ffbf19', padding:'0.5rem 2rem'
              }}>View Details</button>
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
                <div style={{marginRight:'0.5rem', fontSize:'medium'}}>
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
              <button className="eprbtn2" style={{
                background:'#ffbf19', padding:'0.5rem 2rem'
              }}>View Details</button>
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
                <div style={{marginRight:'0.5rem', fontSize:'medium'}}>
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
              <button className="eprbtn2" style={{
                background:'#ffbf19', padding:'0.5rem 2rem'
              }}>View Details</button>
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
                <div style={{marginRight:'0.5rem', fontSize:'medium'}}>
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
              <button className="eprbtn2" style={{
                background:'#ffbf19', padding:'0.5rem 2rem'
              }}>View Details</button>
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
                <div style={{marginRight:'0.5rem', fontSize:'medium'}}>
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
              <button className="eprbtn2" style={{
                background:'#ffbf19', padding:'0.5rem 2rem'
              }}>View Details</button>
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
                <div style={{marginRight:'0.5rem', fontSize:'medium'}}>
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
              <button className="eprbtn2" style={{
                background:'#ffbf19', padding:'0.5rem 2rem'
              }}>View Details</button>
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
                <div style={{marginRight:'0.5rem', fontSize:'medium'}}>
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
              <button className="eprbtn2" style={{
                background:'#ffbf19', padding:'0.5rem 2rem'
              }}>View Details</button>
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
                <div style={{marginRight:'0.5rem', fontSize:'medium'}}>
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
              <button className="eprbtn2" style={{
                background:'#ffbf19', padding:'0.5rem 2rem'
              }}>View Details</button>
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
                <div style={{marginRight:'0.5rem', fontSize:'medium'}}>
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
              <button className="eprbtn2" style={{
                background:'#ffbf19', padding:'0.5rem 2rem'
              }}>View Details</button>
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
                <div style={{marginRight:'0.5rem', fontSize:'medium'}}>
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
              <button className="eprbtn2" style={{
                background:'#ffbf19', padding:'0.5rem 2rem'
              }}>View Details</button>
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
                <div style={{marginRight:'0.5rem', fontSize:'medium'}}>
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
              <button className="eprbtn2" style={{
                background:'#ffbf19', padding:'0.5rem 2rem'
              }}>View Details</button>
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
                <div style={{marginRight:'0.5rem', fontSize:'medium'}}>
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
              <button className="eprbtn2" style={{
                background:'#ffbf19', padding:'0.5rem 2rem'
              }}>View Details</button>
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
                <div style={{marginRight:'0.5rem', fontSize:'medium'}}>
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
              <button className="eprbtn2" style={{
                background:'#ffbf19', padding:'0.5rem 2rem'
              }}>View Details</button>
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
                <div style={{marginRight:'0.5rem', fontSize:'medium'}}>
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
              <button className="eprbtn2" style={{
                background:'#ffbf19', padding:'0.5rem 2rem'
              }}>View Details</button>
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
                <div style={{marginRight:'0.5rem', fontSize:'medium'}}>
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
              <button className="eprbtn2" style={{
                background:'#ffbf19', padding:'0.5rem 2rem'
              }}>View Details</button>
            </div>
          </div>
          </div>
          <div className="event-nav-bottom">
            <div className="enav-prev">
              <span className="enb-icon"><BsChevronLeft/></span>
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
              <span className="enb-icon"><BsChevronRight/></span>
            </div>
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
            style={{ marginTop: "10px",}}
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
