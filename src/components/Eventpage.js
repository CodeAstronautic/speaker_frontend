import React, { useEffect, useState } from "react";
import "./css/eventpage.css";
import {
  BsChevronRight,
  BsFillBookmarkFill,
  BsFillCalendarEventFill,
  BsChevronLeft,
} from "react-icons/bs";
import axios from "axios";
import LoggedInSidebar from "./accountSide/LoggedInSidebar";


const Eventpage = () => {
  const [search, setSearch] = useState("")
  const [isExclusive, setisExclusive] = useState(false)
  const [eventData, setEventData] = useState()
  useEffect(() => {
    const userToken = localStorage.getItem('@token')
    axios.get(`${process.env.REACT_APP_URL}/events`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(userToken).token}`
      }
    }).then((d) => setEventData(d?.data)).catch((err) => {
      console.log(err)
    })
  }, [])
  const filteredCountries = eventData?.filter((country) => {
    return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  var aquaticCreatures = eventData?.filter(function (creature) {
    return creature.isExclusive === isExclusive;
  });
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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">
                <i class="fa fa-search"></i>
              </button>
            </div>
            <div className="stu-right">
              <input type="checkbox" className="apply1" name="apply1" value={isExclusive} onChange={(e) => setisExclusive(true)} />
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
              <p className="stlc-text">Mode: </p>
              <select
                className="stlc-field "
              // style={{
              //   paddingTop: "0",
              //   paddingBottom: "0",
              //   color: "grey",
              // }}
              >
                <option value="Online" selected>
                  In-person
                </option>
                <option value="Online">Virtual</option>
                <option value="Offline">Hybrid</option>
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
            {isExclusive ?
              <>
                {aquaticCreatures && aquaticCreatures?.map((data) => {
                  return (
                    <div className="event-card">
                      <div className="ec-section1">
                        <div className="eds1-l">
                          <p className="e1">{data?.name}</p>
                          <p className="e2">{data?.state}</p>
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
                          <p>{data?.start_time}</p>
                        </span>
                        <p className="e8">ONLINE</p>
                      </div>
                      <div className="ec-section3">
                        Tags: <p className="e4">Industry, Film, Acting, Speaking </p>
                      </div>
                      <div className="ec-section4">
                        {data?.description}
                      </div>
                      <div className="ec-section5">
                        <a href={`/single-event/${data?.id}`}>

                          <button
                            className="eprbtn2"
                            style={{
                              background: "#ffbf19",
                              padding: "0.5rem 2rem",
                            }}
                          >
                            View Details
                          </button>
                        </a>
                      </div>
                    </div>
                  )
                })}
              </> : <>
                {filteredCountries && filteredCountries?.map((data) => {
                  return (
                    <div className="event-card">
                      <div className="ec-section1">
                        <div className="eds1-l">
                          <p className="e1">{data?.name}</p>
                          <p className="e2">{data?.state}</p>
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
                          <p>{data?.start_time}</p>
                        </span>
                        <p className="e8">ONLINE</p>
                      </div>
                      <div className="ec-section3">
                        Tags: <p className="e4">Industry, Film, Acting, Speaking </p>
                      </div>
                      <div className="ec-section4">
                        {data?.description}
                      </div>
                      <div className="ec-section5">
                        <a href={`/single-event/${data?.id}`}>

                          <button
                            className="eprbtn2"
                            style={{
                              background: "#ffbf19",
                              padding: "0.5rem 2rem",
                            }}
                          >
                            View Details
                          </button>
                        </a>
                      </div>
                    </div>
                  )
                })}
              </>}



          </div>

          {eventData?.length > 9 &&
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
            </div>}
        </div>
      </div>
      <LoggedInSidebar setisExclusive={setisExclusive} isExclusive={isExclusive}/>
    </div>
  );
};
export default Eventpage;
