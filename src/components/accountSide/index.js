import React from 'react'
import user from "../images/profile.png";
import { useNavigate } from "react-router-dom";

export default function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear("@userData");
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

                <div className="cdrow active-tab">
                    <div className="cdr-box"></div>
                    <span>BASIC INFORMATION</span>
                </div>
                <div className="cdrow">
                    <div className="cdr-box"></div>
                    <span>ACCOUNT</span>
                </div>
                <div className="cdrow">
                    <div className="cdr-box"></div>
                    <span>EVENTS</span>
                </div>
                <div className="cdrow">
                    <div className="cdr-box"></div>
                    <span>BILLING INFORMATION</span>
                </div>
                <div className="cdrow" onClick={handleLogout}>
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
                        <p>Full Name</p>
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
    )
}
