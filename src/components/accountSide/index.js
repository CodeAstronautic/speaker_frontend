import React, { useEffect, useState } from "react";
import user from "../images/profile.png";
import { useNavigate } from "react-router-dom";
import { BsChevronDown, BsCalendar3 } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Index() {
  const [tabs, setTabs] = useState(0);
  const [name, setname] = useState();
  const [phone, setphone] = useState();
  const [email, setemail] = useState();
  const userToken = JSON.parse(localStorage.getItem("@token"));
  console.log(userToken, "userToken");
  const { userdata } = JSON.parse(localStorage.getItem("@token"));
  const [filterData, setFilterData] = useState("");
  const [images, setImages] = useState();
  const handleImage = (event) => {
    localStorage.setItem("@image", URL.createObjectURL(event.target.files[0]));
    setImages(URL.createObjectURL(event.target.files[0]));
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/events/all", {
        headers: {
          Authorization: `Bearer ${userToken?.token}`,
        },
      })
      .then((data) => {
        console.log(data?.data);
        const dd = data?.data?.filter((data) => data?.isExclusive == true);
        setFilterData(dd);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [plandta, setplandata] = useState("");
  const handleEdit = () => {
    const data = {
      phone: userdata.phone || phone,
      isSubscribed: true,
      email: userdata.email || email,
      name: userdata.name || name,
      provider: "GOOGLE",
      role: userdata.role,
    };
    axios
      .put(
        `http://localhost:3000/api/auth/update/${userToken?.userdata?.id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${userToken?.token}`,
          },
        }
      )
      .then((data) => {
        if (data?.data) {
          toast.dark("User updated successfully");
        }
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/api/subscription/${localStorage.getItem(
          "@planId"
        )}`
      )
      .then((data) => {
        setplandata(data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear("@token");
    navigate("/login");
  };

  return (
    <>
      <ToastContainer />
      <div className="mp-upper">
        <div className="mpl-left">
          <h5
            style={{
              margin: "0 auto 1rem auto",
              borderBottom: "2px solid #ffbf19",
              width: "fit-content",
              paddingBottom: "0.5rem",
            }}
          >
            PROFILE DETAILS
          </h5>

          <div className={tabs === 0 ? "cdrow active-tab" : "cdrow"}>
            <div className="cdr-box"></div>
            <span onClick={() => setTabs(0)}>BASIC INFORMATION</span>
          </div>
          <div className={tabs === 1 ? "cdrow active-tab" : "cdrow"}>
            <div className="cdr-box"></div>
            <span onClick={() => setTabs(1)}>ACCOUNT</span>
          </div>
         
          {userdata?.role === "MODERATOR" && (
            <div className={tabs === 4 ? "cdrow active-tab" : "cdrow"}>
              <div className="cdr-box"></div>
              <span onClick={() => setTabs(4)}>EVENT REQUESTS</span>
            </div>
          )}
          {userdata?.role === "MODERATOR" && (
            <div className={tabs === 5 ? "cdrow active-tab" : "cdrow"}>
              <div className="cdr-box"></div>
              <span onClick={() => setTabs(5)}>ARCHIVED PLANS</span>
            </div>
          )}
          {userdata?.role === "MODERATOR" && (
            <div className={tabs === 6 ? "cdrow active-tab" : "cdrow"}>
              <div className="cdr-box"></div>
              <span onClick={() => setTabs(6)}>SUBSCRIPTION PLANS</span>
            </div>
          )}

          {userdata?.role === "MODERATOR" && (
            <div className={tabs === 7 ? "cdrow active-tab" : "cdrow"}>
              <div className="cdr-box"></div>
              <span onClick={() => setTabs(7)}>FLAGGED SECTION</span>
            </div>
          )}
          {userdata?.role === "USER" && (
            <div className={tabs === 3 ? "cdrow active-tab" : "cdrow"}>
              <div className="cdr-box"></div>
              <span onClick={() => setTabs(3)}>BILLING INFORMATION</span>
            </div>
          )}
          <div onClick={handleLogout} className="cdrow">
            <div className="cdr-box"></div>
            <span>LOGOUT</span>
          </div>
        </div>
        {tabs === 0 && (
          <div className="mpl-right">
            <div className="mpl-heading">
              <p>BASIC INFORMATION</p>
            </div>
            <div className="mpedit-section">
              <div className="mpes-form">
                <p>Full Name</p>
                <input
                  type="text"
                  className="mpes-input"
                  placeholder="Write Here"
                  value={userdata?.name || name}
                  onChange={(e) => setname(e.target.value)}
                />
                <p>Phone Number</p>
                <input
                  type="text"
                  className="mpes-input"
                  placeholder="Write Here"
                  value={userdata?.phone || phone}
                  onChange={(e) => setphone(e.target.value)}
                />
                <p>Email</p>
                <input
                  type="text"
                  className="mpes-input"
                  placeholder="Write Here"
                  value={userdata?.email || email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <button className="con-lower-btn eprbtn1" onClick={handleEdit}>
                  Update User
                </button>
              </div>
              <div className="mpes-profilepic">
                {console.log(localStorage.getItem("@image"),"kgdfg")}
                {images&&<img src={localStorage.getItem("@image")} alt="" />}
                <div className={images ? " images-new " : "mpesdp-change"}>
                  <input
                    type="file"
                    className="mpes-input"
                    placeholder=""
                    onChange={handleImage}
                    style={{ height: "100%", width: "100%", opacity: "0" }}
                  />
                  {/* <span style={{ marginTop: "12rem" }}>Change</span> */}
                </div>
              </div>
            </div>
          </div>
        )}
        {tabs === 1 && (
          <div className="mpl-right">
            <div className="mpl-heading">
              <p>ACCOUNT</p>
              <button>Edit</button>
            </div>
            <div className="mpedit-section">
              <div className="mpes-form">
                <p>Full Name</p>
                <input
                  type="text"
                  className="mpes-input"
                  placeholder="Write Here"
                  value={userdata?.name}
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
                  value={userdata?.phone}
                />
                <p>Occupation</p>
                <input
                  type="text"
                  className="mpes-input"
                  placeholder="Write Here"
                />
              </div>
              <div className="mpes-profilepic">
                {/* <img src={user} alt="" /> */}
                {/* <div className="mpesdp-change">
                  <input
                    type="file"
                    className="mpes-input"
                    placeholder=""
                    style={{ height: "100%", width: "100%", opacity: "0" }}
                  />
                  {/* <span style={{ marginTop: "12rem" }}>Change</span> */}
                {/* </div>  */}
              </div>
            </div>
          </div>
        )}
        {tabs === 2 && (
          <div className="mpl-right">
            <div className="mpl-heading">
              <p>Event</p>
              <button>Edit</button>
            </div>
            <div className="mpedit-section">
              <div className="mpes-form">
                <p>Full Name</p>
                <input
                  type="text"
                  className="mpes-input"
                  placeholder="Write Here"
                  value={userdata?.name}
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
                  value={userdata?.phone}
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
                  <input
                    type="file"
                    className="mpes-input"
                    placeholder=""
                    style={{ height: "100%", width: "100%", opacity: "0" }}
                  />
                  {/* <span style={{ marginTop: "12rem" }}>Change</span> */}
                </div>
              </div>
            </div>
          </div>
        )}
        {tabs === 3 && (
          <div className="mpl-right">
            <div className="mpl-heading">
              <p>BILLING INFORMATION</p>
              <button>Edit</button>
            </div>
            <div className="mpedit-section">
              <div className="mpes-form">
                <h1>Bank Account</h1>
                <p>IFSC Code</p>
                <input
                  type="text"
                  className="mpes-input"
                  placeholder="Write Here"
                  value={userdata?.name}
                />
                <p>Account Number</p>
                <input
                  type="text"
                  className="mpes-input"
                  placeholder="Write Here"
                />
                <p>Beneficiary</p>
                <input
                  type="text"
                  className="mpes-input"
                  placeholder="Write Here"
                  value={userdata?.phone}
                />
              </div>
            </div>
          </div>
        )}
        {tabs === 4 && (
          <div className="mpl-right">
            <div className="md-header mpl-heading">
              <p>EVENT REQUESTS</p>
              <button>Total Request Pending: {filterData?.length}</button>
            </div>
            {/* <div
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
            </div> */}
            <div className="mpedit-section">
              {filterData?.length > 0 &&
                filterData?.map((data) => {
                  return (
                    <div className="md-card-parent">
                      <div className="mdcp-header">
                        <h4>{data?.name}</h4>
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
                            <span>{data?.start_time}</span>
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
                            <span>{data?.state}</span>
                          </div>
                        </div>
                        <div style={{}}>{data?.mode}</div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
        {tabs === 5 && (
          <div className="mpl-right">
            <div className="md-header mpl-heading">
              <p>ARCHIEVE PLANS</p>
              <button style={{
    height: "35.06px",
    boxSizing: "border-box",
   }}>Total Request Pending: 30</button>
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
                  <div style={{}}>ONLINE</div>
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
                  <div style={{}}>ONLINE</div>
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
                  <div style={{}}>ONLINE</div>
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
                  <div style={{}}>ONLINE</div>
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
                  <div style={{}}>ONLINE</div>
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
                  <div style={{}}>ONLINE</div>
                </div>
              </div>
            </div>
          </div>
        )}
        {tabs === 7 && (
          <div className="mpl-right">
            <div className="md-header mpl-heading">
              <p>ARCHIEVE PLANS</p>
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
                  <div style={{}}>ONLINE</div>
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
                  <div style={{}}>ONLINE</div>
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
                  <div style={{}}>ONLINE</div>
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
                  <div style={{}}>ONLINE</div>
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
                  <div style={{}}>ONLINE</div>
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
                  <div style={{}}>ONLINE</div>
                </div>
              </div>
            </div>
          </div>
        )}
        {tabs === 6 && (
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
                <p>{userdata?.name}</p>
                <p>{plandta?.name}</p>
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
                Editing as {userdata?.name}
              </p>
              <div className="sps1-row">
                <p>Name</p>
                <p>Subscription Plan</p>
                <p>Started on</p>
                <p>Ends on</p>
                <p>Email address</p>
                <p>Paid</p>
              </div>
              {console.log(plandta, "plandta")}
              <div className="sps1-row">
                <h5>{userdata?.name}</h5>
                <h5>{plandta?.name}</h5>
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
                <h5>{userdata?.email}</h5>
                <h5>Rs.{plandta?.price}/-</h5>
              </div>
              {/* <div className="mdlheader mpl-heading">
              <p>Update Details</p>
            </div> */}
              {/* <p>
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
            </p> */}
              <div className="con-lower">
                <button
                  className="con-lower-btn eprbtn2"
                  style={{
                    margin: "1rem",
                    border: "1px solid #ffbf19",
                    background: "none",
                    width: "223px"
                  }}
                >
                  Cancel Subscription
                </button>
                <a href="/events">
                  <button
                    className="con-lower-btn eprbtn1"
                    style={{
                      margin: "1rem",
                      width: "223px"
                    }}
                  >
                    Update Subscription
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
