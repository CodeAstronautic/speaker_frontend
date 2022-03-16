import React, { useEffect, useState } from "react";
import "../css/eventpage.css";
import {
  BsChevronRight,
  BsFillBookmarkFill,
  BsFillCalendarEventFill,
  BsChevronLeft,
} from "react-icons/bs";
import LoggedInSidebar from "../accountSide/LoggedInSidebar";
import axios from "axios";

const BookmarkedEvent = () => {
  const [bookmarkData, setbookmarkData] = useState("");
  const userToken = JSON.parse(localStorage.getItem("@token"));
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/events/bookmark`, {
        headers: {
          Authorization: `Bearer ${userToken?.token}`,
        },
      })
      .then((data) => {
        setbookmarkData(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="mp-parent" style={{ background: "none", marginTop: "0" }}>
      <div className="mp-left">
        <div className="view-event" style={{ marginTop: "0" }}>
          <p style={{ marginBottom: "1rem" }}>Bookmarked Events</p>
          {bookmarkData?.length > 0 &&
            bookmarkData?.map((data) => {
              return (
                <div className="vc-sec">
                  <div className="event-card">
                    <div className="ec-section1">
                      <div className="eds1-l">
                        <p className="e1">{data?.name}</p>
                        <p className="e2">{data?.state}, {data?.country}</p>
                      </div>
                      <div className="eds1-r">
                        <BsFillBookmarkFill />
                      </div>
                    </div>
                    <div className="ec-section2">
                      <span>
                        <div
                          style={{ marginRight: "0.5rem", fontSize: "medium" }}
                        >
                          <BsFillCalendarEventFill />
                        </div>
                        <p>Date: {new Date(data?.start_time)}</p>
                      </span>
                      <p className="e8">{data?.mode}</p>
                    </div>
                    <div className="ec-section3">
                      Tags: <p className="e4">{data?.tags} </p>
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
                </div>
              );
            })}

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
