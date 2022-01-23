import React from "react";
import "./css/category.css";
export default function Categories() {
  return (
    <>
      <div className="category">
        <p className="head1">CATEGORIES</p>
        <p className="desc">WIDE RANGE OF CATEGORIES FOR SPEAKERORE USERS</p>
        <div className="catcards">
          <div className="c1">
            <img
              className="imag1"
              src={require("./images/category.jpg")}
              alt={""}
            />
            <p className="detail1">FILM & INDUSTRY</p>
          </div>
          <div className="c2">
            <img
              className="imag2"
              src={require("./images/category.jpg")}
              alt={""}
            />
            <p className="detail2">FILM & INDUSTRY</p>
          </div>
          <div className="c3">
            <img
              className="imag3"
              src={require("./images/category.jpg")}
              alt={""}
            />
            <p className="detail3">FILM & INDUSTRY</p>
          </div>
          <div className="c4">
            <img
              className="imag4"
              src={require("./images/category.jpg")}
              alt={""}
            />
            <p className="detail4">FILM & INDUSTRY</p>
          </div>
          <div className="c5">
            <img
              className="imag5"
              src={require("./images/category.jpg")}
              alt={""}
            />
            <p className="detail5">FILM & INDUSTRY</p>
          </div>
          <div className="c6">
            <img
              className="imag6"
              src={require("./images/category.jpg")}
              alt={""}
            />
            <p className="detail6">FILM & INDUSTRY</p>
          </div>
        </div>
        <p className="head2">which one are you?</p>
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
        </div>
      </div>
    </>
  );
}
