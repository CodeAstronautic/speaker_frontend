import React from "react";
import LoggedInSidebar from "../accountSide/LoggedInSidebar";
import "../css/About2.css";
import Culture from "../images/cul.png";

import TeamMembers from '../Team/TeamMembers';

const About2 = () => {
    return (
        <>
            <div className="ep-parent">
                <div className="ep-left">
                    <div className="epl-heading" style={{
                        fontWeight: '600'
                    }}>
                        <p>About Us</p>
                    </div>
                    <div className="col-first">
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
                            margin: "2rem 0",
                            textAlign: "center",
                        }}
                    >
                        Why SpeakerOre Exclusive?
                    </h3>
                    <p className="eprtext1" style={{ textAlign: "center", fontSize: 'smaller', paddingLeft: '3rem' }}>
                        Thousands of people have joined SpeakerOre and are creating better
                        opportunities to grow. Are you?
                    </p>
                    <div className="btn-container">
                        <a href="/addevent">
                            <button className="create-event-btn eprbtn2" style={{
                                margin: '1rem'
                            }}>Create an Event</button></a>
                        <button className="create-event-btn eprbtn1" style={{
                            margin: '1rem'
                        }}>Search events</button>
                    </div>
                </div>
                <LoggedInSidebar />
            </div>
            <TeamMembers />
        </>
    );
};
export default About2;
