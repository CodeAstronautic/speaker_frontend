import React , {useState} from 'react'
import user from "../images/profile.png";
import { useNavigate } from "react-router-dom";

export default function Index({userData}) {
    const [tabs , setTabs]=useState(0)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear("@token");
        navigate("/login");
    };
    return (
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

                <div className={tabs==0?"cdrow active-tab":"cdrow"}>
                    <div className="cdr-box"></div>
                    <span onClick={()=>setTabs(0)}>BASIC INFORMATION</span>
                </div>
                <div className={tabs==1?"cdrow active-tab":"cdrow"}>
                    <div className="cdr-box"></div>
                    <span onClick={()=>setTabs(1)}>ACCOUNT</span>
                </div>
                <div className={tabs==2?"cdrow active-tab":"cdrow"}>
                    <div className="cdr-box"></div>
                    <span onClick={()=>setTabs(2)}>EVENTS</span>
                </div>
                <div className={tabs==3?"cdrow active-tab":"cdrow"}>
                    <div className="cdr-box"></div>
                    <span onClick={()=>setTabs(3)}>BILLING INFORMATION</span>
                </div>
                <div onClick={handleLogout} className="cdrow">
                    <div className="cdr-box"></div>
                    <span>LOGOUT</span>
                </div>
            </div>
            {tabs==0&&
            <div className="mpl-right">
                <div className="mpl-heading">
                    <p>BASIC INFORMATION</p>
                    <button>Edit</button>
                </div>
                <div className="mpedit-section">
                    <div className="mpes-form">
                        <p>Full Name</p>
                        <input
                            type="text"
                            className="mpes-input"
                            placeholder="Write Here"
                            value={userData?.name}
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
                            value={userData?.phone}

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
            </div>}
            {tabs==1&&
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
                            value={userData?.name}
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
                            value={userData?.phone}

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
            </div>}
            {tabs==2&&
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
                            value={userData?.name}
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
                            value={userData?.phone}

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
            </div>}
            {tabs==3&&
            <div className="mpl-right">
                <div className="mpl-heading">
                    <p>BILLING</p>
                    <button>Edit</button>
                </div>
                <div className="mpedit-section">
                    <div className="mpes-form">
                        <p>Full Name</p>
                        <input
                            type="text"
                            className="mpes-input"
                            placeholder="Write Here"
                            value={userData?.name}
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
                            value={userData?.phone}

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
            </div>}
        </div>
    )
}
