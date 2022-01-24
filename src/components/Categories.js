import React from "react";
import "./css/category.css";
export default function Categories() {
  return (
    <>
      <div className="category">
        <p className="head1">CATEGORIES</p>
        <p className="desc">WIDE RANGE OF CATEGORIES FOR SPEAKERORE USERS</p>
        <div className="catcards">
          <div className="catcards-section">
            <div className="catcard">
              <img
                className="catimgs"
                src={require("./images/category.jpg")}
                alt={""}
              />
              <p className="catsub">FILM & INDUSTRY</p>
            </div>
            <div className="catcard">
              <img
                className="catimgs"
                src={require("./images/category.jpg")}
                alt={""}
              />
              <p className="catsub">FILM & INDUSTRY</p>
            </div>
            <div className="catcard">
              <img
                className="catimgs"
                src={require("./images/category.jpg")}
                alt={""}
              />
              <p className="catsub">FILM & INDUSTRY</p>
            </div>
          </div>
          <div className="catcards-section">
            <div className="catcard">
              <img
                className="catimgs"
                src={require("./images/category.jpg")}
                alt={""}
              />
              <p className="catsub">FILM & INDUSTRY</p>
            </div>
            <div className="catcard">
              <img
                className="catimgs"
                src={require("./images/category.jpg")}
                alt={""}
              />
              <p className="catsub">FILM & INDUSTRY</p>
            </div>
            <div className="catcard">
              <img
                className="catimgs"
                src={require("./images/category.jpg")}
                alt={""}
              />
              <p className="catsub">FILM & INDUSTRY</p>
            </div>
          </div>
        </div>
        {/* <p className="head2">which one are you?</p>
        <div className="c7">
          <p className="sub1">SPEAKER</p>
          <p className="subh1">Get nearby event detail by SpeakerOre</p>
          <img
            className="imag7"
            src={require("./images/category.jpg")}
            alt={""}
          />
          <p className="subh2">
            {" "}
            I am willing to look for events to get an opportunity to speak in
            one of the greatest events.
          </p>
          <button className="check"> checkout events</button>
        </div>
        <div className="c8">
          <p className="sub2">EVENT MANAGER</p>
          <p className="subh3">
            Create events and search for fresh and best talent for it.
          </p>
          <img
            className="imag8"
            src={require("./images/category.jpg")}
            alt={""}
          />
          <p className="subh4">
            {" "}
            Sign me up for the amazing journey of finding fresh and new talent
            via SPEAKERORE.
          </p>
          <button className="check1"> CREATE AN EVENT</button>
        </div> */}
      </div>
    </>
  );
}
