import React from "react";
import "./css/subPlan.css";
import user from "./images/profile.png";

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

                </div>
            </div>
        </>
    );
};
export default SubPlan;
