import React from "react";
import "../css/footer.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <ul className="firstcolumn">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Events</li>
          <li>Plans</li>
        </ul>
        <ul className="secondcolumn">
          <li><a href="/terms">
            Terms of Use</a></li>
          <li><a href="/privacy">
            Privacy Policy</a></li>
          <li>FAQ</li>
          <li>Help</li>
        </ul>
        <ul className="thirdcolumn">
          <li>
            <input
              type="text"
              className="fp-footerinput"
              placeholder=" Your email address"
            />
            <button className="fp-footerbtn" type="submit">
              SUBSCRIBE
            </button>
          </li>

          <li >

            Subscribing to SpeakerOre unlocks unlimited events.{" "}
          </li>
          <li className="fc10">
            <span><BsFacebook /></span>
            <span><BsInstagram /></span>
            <span><BsLinkedin /></span>
            <span><BsYoutube /></span>
          </li>
          <li>Social Handles</li>
        </ul>
      </div>
      <p className="copyright-line">Copyright &copy; 2021 SpeakerOre</p>
    </>
  );
}
