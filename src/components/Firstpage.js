import React from "react";
import "./css/Firstpage.css";
export default function Firstpage() {
  return (
    <>
      <div className="speaker">
        <img src={require("./images/speaker.jpg")} alt={""} />
        <button className="btn">EXPLORE EVENTS</button>
        <p className="one">SpeakerOre</p>
        <p className="two">One Liner from SpeakerOre to the users</p>
      </div>
    </>
  );
}
