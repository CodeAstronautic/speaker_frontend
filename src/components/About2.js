import React from "react";
import "./css/About2.css";
import Culture from "./images/cul.png";

const About2 = () => {
    return (
        <div className="main-class">
            <div className="inner-class">
                <p>About Us</p>
                <p>SpeakerOre</p>
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
                <div>
                    <img src={Culture} alt="" />
                    <p>Why SpeakerOre Exclusive?</p>
                </div>
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
                <p>Achievements so far in SpeakerOre community</p>
                <div className="second-box">
                    <div className="box-two"><p >400+</p><p>TOTAL EVENTS </p></div>
                    <div className="box-two"><p >400+</p><p>TOTAL EVENTS </p></div>
                    <div className="box-two"><p >400+</p><p>TOTAL EVENTS </p></div>
                </div>
                <p>Thousands of people have joined SpeakerOre and are creating better opportunities to grow. Are you?</p>
            </div>
            <div>
                <button className="create-event-btn">Create Event</button>
                <button className="create-event-btn">Search events</button>
            </div>
        </div>
    );
}
export default About2