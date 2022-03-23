import React, { useEffect, useState } from "react";
import "../css/eventpage.css";
import {
  BsChevronRight,
  BsFillBookmarkFill,
  BsFillCalendarEventFill,
  BsChevronLeft,
} from "react-icons/bs";
import axios from "axios";
import LoggedInSidebar from "../accountSide/LoggedInSidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Firstpage.css";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import PurchaseError from "../../ErrorPages/purchaseError";

const EventMod = () => {
  console.log(JSON.parse(localStorage.getItem("@token")));
  const { userdata } = JSON.parse(localStorage.getItem("@token"));
  //   let data =[
  //     {
  //         "id": 1,
  //         "start_time": "2020-06-07T02:32:39.292Z",
  //         "end_time": "2021-09-01T04:49:42.144Z",
  //         "isLiked": false
  //     },
  //     {
  //         "id": 2,
  //         "start_time": "2020-06-08T02:32:39.292Z",
  //         "end_time": "2021-09-01T04:49:42.144Z",
  //         "isLiked": false
  //     },
  //     {
  //         "id": 3,
  //         "longitude": null,
  //         "start_time": "2020-06-09T02:32:39.292Z",
  //         "end_time": "2021-09-01T04:49:42.144Z",

  //     },
  //      {
  //         "id": 4,
  //         "longitude": null,
  //         "start_time": "2020-06-06T02:32:39.292Z",
  //         "end_time": "2021-09-01T04:49:42.144Z",

  //     },
  //   ]

  // var startDate = new Date("2020-06-07T02:32:39.292Z");
  // var endDate = new Date("2020-06-08T02:32:39.292Z");
  // console.log(startDate , endDate)
  // var resultProductData = data.filter(a => {
  //   var date = new Date(a.start_time);
  //   return (date >= startDate && date <= endDate);
  // });
  // console.log(resultProductData)
  const [search, setSearch] = useState("");
  const [isExclusive, setisExclusive] = useState(false);
  const [eventData, setEventData] = useState();
  const userToken = JSON.parse(localStorage.getItem("@token"));
  const [startTime, setstart_time] = useState("");
  const [endTime, setendTime] = useState("");
  console.log(userToken, "startTime");
  const userEvents = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/events/all`, {
        headers: {
          Authorization: `Bearer ${userToken?.token}`,
        },
      })
      .then((d) => setEventData(d?.data))
      .catch((err) => {
        console.log(err);
      });
  };
  var resultProductData = eventData?.filter((a) => {
    var date = new Date(a.start_time);
    return date >= startTime && date <= endTime;
  });
  console.log(resultProductData);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/events`, {
        headers: {
          Authorization: `Bearer ${userToken?.token}`,
        },
      })
      .then((d) => setEventData(d?.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    if (
      userToken?.userdata?.role === "USER" ||
      userToken?.userdata?.role == "MODERATOR"
    ) {
      userEvents();
    }
  }, []);
  const handleBookmark = (id) => {
    const data = {};
    console.log(id);
    axios
      .post(`${process.env.REACT_APP_URL}/events/bookmark/${id}`, data, {
        headers: {
          Authorization: `Bearer ${userToken?.token}`,
        },
      })
      .then((d) => {
        toast.dark("Event bookmarked successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const filteredCountries = eventData?.filter((country) => {
    return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  var aquaticCreatures = eventData?.filter(function (creature) {
    return creature.isExclusive === isExclusive;
  });
  const [mode, setMode] = useState();
  var aquaticCreature1s = eventData?.filter(function (creature) {
    return creature.mode === mode;
  });

  return (
    <>
      <ToastContainer />
      <div className="mp-parent" style={{ background: "none", marginTop: "0" }}>
        {userdata?.role == "MODERATOR" ? (
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
                    <i className="fa fa-search"></i>
                  </button>
                </div>
                <div className="stu-right">
                  <input
                    type="checkbox"
                    name="apply1"
                    value={isExclusive}
                    onChange={(e) => setisExclusive(true)}
                  />
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
                    onChange={(e) => setMode(e.target.value)}
                    value={mode}
                  >
                    <option value="Online">offline</option>
                    <option value="Offline">online</option>
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
                  <p className="stlc-text">from: </p>

                  <input
                    type="date"
                    className=" stlc-field"
                    placeholder="dd/mm/yyyy"
                    onChange={(e) => setstart_time(e.target.value)}
                    value={startTime}
                  />
                  {console.log(startTime, "startTimestartTime")}
                </div>
                <div className="stl-child">
                  <p className="stlc-text">to: </p>

                  <input
                    type="date"
                    className=" stlc-field"
                    placeholder="dd/mm/yyyy"
                    onChange={(e) => setendTime(e.target.value)}
                    value={endTime}
                  />
                </div>
                <div className="stl-child">
                  <button
                    style={{
                      marginLeft: "35px",
                      height: "45px",
                      width: "99px",
                    }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div className="view-event">
              <div className="vc-sec">
                {eventData &&
                  eventData?.map((data) => {
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
                            <div
                              style={{
                                marginRight: "0.5rem",
                                fontSize: "medium",
                              }}
                            >
                              <BsFillCalendarEventFill />
                            </div>
                            <p>{data?.start_time}</p>
                          </span>
                          <p className="e8">ONLINE</p>
                        </div>
                        <div className="ec-section3">
                          Tags:{" "}
                          <p className="e4">
                            Industry, Film, Acting, Speaking{" "}
                          </p>
                        </div>
                        <div className="ec-section4">{data?.description}</div>
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
                    );
                  })}
              </div>

              {eventData?.length > 9 && (
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
              )}
            </div>
          </div>
        ) : (
          <div className="speaker">
            <img
              src={require("../images/EventsPage2.png")}
              style={{ height: "100%" }}
              alt={""}
            />
            <div
              className="fp-text"
              style={{
                top: 0,
                left: 0,
                background: "rgba(52, 52, 52, 0.65)",
                padding: "30% 0",
                textAlign: "center",
              }}
            >
              <p className="fpae-imgtext">CREATE NOW</p>
              <p className="two">
                You can fill out the form and create any event.
              </p>
              <a href="/404">
                <button className="">VIEW EVENT</button>
              </a>
            </div>
          </div>
        )}
        <LoggedInSidebar
          setisExclusive={setisExclusive}
          isExclusive={isExclusive}
        />
      </div>
    </>
  );
};
export default EventMod;
