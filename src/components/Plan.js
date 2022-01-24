import React from "react";
import Navbar from "./Navbar";
import "./css/plan.css";
export default function Plan() {
    return (
        <>
            <Navbar />
            <div className="main-bar">
                <div className="card-main">
                    <div>
                        <p>PROFILE DETAILS</p>
                    </div>
                    <p className="new-yellow">
                        <span className="box-new"></span>BASIC INFORMATION
                    </p>
                    <p>ACCOUNT</p>
                    <p>BILLING INFORMATION</p>
                    <p>LOGOUT</p>
                </div>
                <div className="stranger">
                    <img src={require("./images/blank-profile-picture.png")} alt={""} />
                    <p className="st1">Hi, Stranger!</p>
                    <p className="st2">Are you an event manager or a speaker?</p>
                    <button className="st3"> Sign In </button>
                    <button className="st4">Sign Up</button>
                    <p className="st5">Single click Google Sign in.</p>
                    <hr />
                    <p className="st6">Why Sign In/Up?</p>
                    <ul className="st7">
                        <li>Get event details for FREE. </li>
                        <li>Unlimited clicks on events</li>
                        <li> Get hired through speakerOre exclusive events</li>
                    </ul>
                </div>
                <div className="stranger">
                    <img src={require("./images/blank-profile-picture.png")} alt={""} />
                    <p className="st1">Hi, Stranger!</p>
                    <p className="st2">Are you an event manager or a speaker?</p>
                    <button className="st3"> Sign In </button>
                    <button className="st4">Sign Up</button>
                    <p className="st5">Single click Google Sign in.</p>
                    <hr />
                    <p className="st6">Why Sign In/Up?</p>
                    <ul className="st7">
                        <li>Get event details for FREE. </li>
                        <li>Unlimited clicks on events</li>
                        <li> Get hired through speakerOre exclusive events</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
