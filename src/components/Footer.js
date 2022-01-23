import React from "react";
import "./css/footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <ul className="firstcolumn">
          <li className="fc1">About Us</li>
          <li className="fc2">Contact Us</li>
          <li className="fc3">Events</li>
          <li className="fc4">Plans</li>
        </ul>
        <ul className="secondcolumn">
          <li className="fc5">Terms of Use</li>
          <li className="fc6">Privacy Policy</li>
        </ul>
        <ul className="thirdcolumn">
          <input
            type="text"
            className="fc7"
            placeholder=" Your email address"
          />
          <button className="fc8" type="submit">
            SUBSCRIBE
          </button>
          <hr />
          <li className="fc9">
            {" "}
            Subscribing to SpeakerOre unlocks unlimited events.{" "}
          </li>
          <li className="fc10">Payment with RazorPay </li>
          <li className="fc11">Copyright &copy; 2021 SpeakerOre</li>
        </ul>
      </div>
    </>
  );
}
