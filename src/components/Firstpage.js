import React from "react";
import About from "./About";
import Categories from "./Categories";
import "./css/Firstpage.css";
export default function Firstpage() {
  return (
    <>
      <div className="speaker">
        <img src={require("./images/speaker.jpg")} alt={""} />
        <div className="fp-text">
          <button className="btn">EXPLORE EVENTS</button>
          <p className="one">SpeakerOre</p>
          <p className="two">One Liner from SpeakerOre to the users</p>
        </div>
      </div>
      <About /> 
      <Categories />
      
    </>
  );
}
