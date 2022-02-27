import React from "react";
import LoggedInSidebar from "./accountSide/LoggedInSidebar";
import "./css/subPlan.css";
import user from "./images/profile.png";

const SubPlan = () => {
    return (
        <>
            <div className="ep-parent">
                <div className="ep-left">
                    <div className="epl-heading subplan-heading">
                        <p style={{ borderBottom: '1px solid rgba(255, 191, 25, 1)' }}>Plans</p>
                        <p style={{ fontWeight: 'bolder' }}>SpeakerOre</p>
                    </div>
                    <div className="plan-container">

                        <div className="plan-card">
                            <p>PLAN INCLUDES:</p>
                            <div style={{ height: '15rem' }}></div>
                            <p>Rs. 2499/-</p>
                            <div className="eprbtn1"><a href="/events">
                                BUY NOW
                            </a></div>
                        </div>
                        <div className="plan-card">
                            <p>PLAN INCLUDES:</p>
                            <div style={{ height: '15rem' }}></div>
                            <p>Rs. 2499/-</p>
                            <div className="eprbtn1"><a href="/events">BUY NOW  </a></div>
                        </div>
                    </div>

                </div>
             <LoggedInSidebar />
            </div>
        </>
    );
};
export default SubPlan;
