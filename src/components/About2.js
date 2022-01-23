import React from "react";
import "./css/About2.css";
import Culture from "./images/cul.png";
import user from "./images/profile.png";
import TeamMembers from './TeamMembers';

const About2 = () => {
    return (
        <>
            <div className="ep-parent">
                <div className="ep-left">
                    <div className="epl-heading">
                        <p>About Us</p>
                        <p>SpeakerOre</p>
                    </div>
                    <div className="col-first">
                        <p>WE PROVIDE </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
                            arcu leo cras pellentesque. Ut consequat, adipiscing orci, aliquet
                            ante ipsum magna. Nunc tortor dis tortor in mauris quam fermentum
                            faucibus euismod. Felis felis lacus, ut mattis egestas. Et, eu
                            consectetur malesuada et ac porttitor aliquet urna. Vestibulum urna
                            nec nibh risus, vitae id vel. Dolor, sodales semper nunc neque
                            montes, purus a nunc turpis. Lectus mi quis diam sed. Aliquet etiam
                            odio nibh ornare. Urna augue aliquet fringilla vitae fermentum mus.
                            Id imperdiet amet, integer viverra magna facilisi quis. Sem eu ut
                            leo ultrices etiam. Enim, curabitur sit ullamcorper sapien, quis.
                            Ultrices quam justo eleifend diam nibh dictum arcu. Viverra dictumst
                            ipsum risus in urna cursus. Sapien, vel feugiat integer phasellus
                            varius egestas aenean faucibus. Euismod tincidunt mauris, pretium
                            tellus imperdiet aenean quis morbi. Nibh lorem venenatis volutpat at
                            nec.{" "}
                        </p>
                    </div>
                    <div className="auditoriumimg">
                        <img src={Culture} alt="" />
                    </div>
                    <h3
                        style={{
                            marginTop: "2rem",
                            textAlign: "center",
                        }}
                    >
                        Why SpeakerOre Exclusive?
                    </h3>
                    <div className="main-box">
                        <div className="box-one">
                            <p>Get event details for FREE.</p>
                        </div>
                        <div className="box-one">
                            <p>Get event details for FREE.</p>
                        </div>
                        <div className="box-one">
                            <p>Get event details for FREE.</p>
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
                    <p className="eprtext1" style={{ textAlign: "center", fontSize: 'smaller', paddingLeft: '3rem' }}>
                        Thousands of people have joined SpeakerOre and are creating better
                        opportunities to grow. Are you?
                    </p>
                    <div className="btn-container">
                        <button className="create-event-btn eprbtn2" style={{
                            margin: '1rem'
                        }}>Create an Event</button>
                        <button className="create-event-btn eprbtn1" style={{
                            margin: '1rem'
                        }}>Search events</button>
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
            <TeamMembers />
        </>
    );
};
export default About2;
