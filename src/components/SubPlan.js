import React from "react";
import "./css/subPlan.css";
import Culture from "./images/cul.png";
import user from "./images/profile.png";
import TeamMembers from './TeamMembers';

const SubPlan = () => {
    return (
        <>
            <div className="ep-parent">
                <div className="ep-left">
                    <div className="epl-heading subplan-heading">
                        <p style={{borderBottom:'1px solid rgba(255, 191, 25, 1)'}}>Plans</p>
                        <p style={{fontWeight:'bolder'}}>SpeakerOre</p>
                    </div>
                    <div className="plan-container">
                        <div className="plan-card">
                            <p>PLAN INCLUDES:</p>
                            <div style={{height: '15rem'}}></div>
                            <p>Rs. 2499/-</p>
                            <div className="eprbtn1">BUY NOW</div>
                        </div>
                        <div className="plan-card">
                            <p>PLAN INCLUDES:</p>
                            <div style={{height: '15rem'}}></div>
                            <p>Rs. 2499/-</p>
                            <div className="eprbtn1">BUY NOW</div>
                        </div>
                        <div className="plan-card">
                            <p>PLAN INCLUDES:</p>
                            <div style={{height: '15rem'}}></div>
                            <p>Rs. 2499/-</p>
                            <div className="eprbtn1">BUY NOW</div>
                        </div>
                    </div>
                    <h4
                        style={{
                            textAlign: "center",
                        }}
                    >
                        Achievements so far in SpeakerOre community
                    </h4>

                    <div className="second-box">
                        <div className="box-two">
                            <p>400+</p>
                            <p>TOTAL EVENTS </p>
                        </div>
                        <div className="box-two">
                            <p>400+</p>
                            <p>TOTAL EVENTS </p>
                        </div>
                        <div className="box-two">
                            <p>400+</p>
                            <p>TOTAL EVENTS </p>
                        </div>
                        <div className="box-two">
                            <p>400+</p>
                            <p>TOTAL EVENTS </p>
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
                            <div></div>
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
                            <div></div>
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
                            <div></div>
                        </span>
                        <div
                            style={{ marginTop: "10px", marginTop: "5rem" }}
                            className="eprbtn1"
                        >
                            Contact Us
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SubPlan;
