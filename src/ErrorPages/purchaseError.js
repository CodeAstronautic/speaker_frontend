import React from "react";
import "./purchase.css";
export default function PurchaseError() {
  return (
    <div className="main-purchase">
        <p className="back-btn">Back</p>
      <h1>Oops, it seems you have not yet subscribed!</h1>
      <p style={{ marginTop: "33px" }}>SUBSCRIBE NOW by SIGNING IN!!</p>
      <div className="card-new">
        <div className="div-1">Get event details for FREE.</div>
        <div className="div-2">Unlimited Click on Events</div>
        <div className="div-3">Get hired through SpeakerOre Exclusive</div>
      </div>
    </div>
  );
}
