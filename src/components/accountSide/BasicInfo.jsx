import React from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
import AccountSide from "../accountSide";
import LoggedInSidebar from "../accountSide/LoggedInSidebar";
export default function BasicInfo() {
  // const navigate = useNavigate();
  // const handleLogout = () => {
  //   localStorage.clear("@token");
  //   navigate("/login");
  // };
  return (
    <>
      <div className="mp-parent">
        <div className="mp-left">
          <AccountSide />
          <div style={{ marginLeft: "2rem", display: "flex" }}>
            <span style={{ fontSize: "2rem" }}>
              <AiOutlineSafetyCertificate />
            </span>
            <span
              style={{
                fontSize: "small",
                marginLeft: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Your information is secured with <br /> SpeakerOre
            </span>
          </div>
        </div>
      <LoggedInSidebar />
      </div>
    </>
  );
}
