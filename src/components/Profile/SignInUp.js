import React, { useState } from "react";
import "../css/SignInUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoggedInSidebar from "../accountSide/LoggedInSidebar";
const SignInUp = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [tabs, setTabs] = useState(0);
  const [message, setMessage] = useState("");
  // const [provider, setProvider] = useState()
  const navigate = useNavigate();
  console.log(
    process.env.REACT_APP_URL,
    "process.env.REACT_APP_URLprocess.env.REACT_APP_URL"
  );
  const handleSubmit = (e, provide) => {
    if (email === "") {
      return setMessage("Please enter the details");
    }
    e.preventDefault();
    if (provide) {
      axios
        .post(`${process.env.REACT_APP_URL}/auth/login/`, {
          name: name,
          phone: phone,
          email: email,
          provider: provide,
          isSubscribed: false,
        })
        .then((data) => {
          console.log();
          localStorage.setItem("@token", JSON.stringify(data?.data));
          if (data?.data?.isSubscribed) {
            navigate("/events");
          } else {
            navigate("/subplan");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  console.log(tabs, "kjlkjl");
  return (
    <div className="mp-parent" style={{ background: "none", marginTop: "0" }}>
      <div className="mp-left siu-left">
        <div className="siul-child">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className={tabs == 1 ? "mpl-heading " : ""}>
              <p onClick={() => setTabs(1)}>Become a member now!</p>
            </div>
            <div className={tabs == 0 ? "mpl-heading " : ""}>
              <p onClick={() => setTabs(0)}>
                Already a memeber? SIGN IN
              </p>
            </div>
          </div>

          {message && (
            <p
              style={{
                color: "red",
                padding: "10px",
                textAlign: "center",
              }}
            >
              {message}
            </p>
          )}
          {tabs === 0 && (
            <form>
              <div className="siuinput-parent">
                <p>Name</p>
                <input
                  type="text"
                  className="siu-input"
                  placeholder="enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="siuinput-parent">
                <p>Email Address</p>
                <input
                  type="email"
                  className="siu-input"
                  placeholder="xyz@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="siubtn-parent">
                <div
                  className="eprbtn2 siubtn1"
                  onClick={(e) => handleSubmit(e, "GOOGLE")}
                >
                  SIGN - UP WITH GOOGLE
                </div>
                <h3
                  style={{
                    color: "grey",
                    margin: "2rem",
                  }}
                >
                  OR
                </h3>
                <div
                  className="eprbtn2 siubtn1"
                  style={{ width: "fit-content" }}
                  onClick={(e) => handleSubmit(e, "FACEBOOK")}
                >
                  SIGN - UP WITH FACEBOOK
                </div>
              </div>
            </form>
          )}
          {tabs === 1 && (
            <form>
              <div className="siuinput-parent">
                <p>Name</p>
                <input
                  type="text"
                  className="siu-input"
                  placeholder="enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="siuinput-parent">
                <p>Email Address</p>
                <input
                  type="email"
                  className="siu-input"
                  placeholder="xyz@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="siuinput-parent">
                <p>Phone</p>
                <input
                  type="number"
                  className="siu-input"
                  placeholder="015675675"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="siubtn-parent">
                <div
                  className="eprbtn2 siubtn1"
                  onClick={(e) => handleSubmit(e, "GOOGLE")}
                >
                  SIGN - UP WITH GOOGLE
                </div>
                <h3
                  style={{
                    color: "grey",
                    margin: "2rem",
                  }}
                >
                  OR
                </h3>
                <div
                  className="eprbtn2 siubtn1"
                  style={{ width: "fit-content" }}
                  onClick={(e) => handleSubmit(e, "FACEBOOK")}
                >
                  SIGN - UP WITH FACEBOOK
                </div>
              </div>
            </form>
          )}
        </div>
        <div className="siul-child">
          <p>
            COMPONENT TO SHOW THE PROCESS OF WHAT A USER CAN ONCE HE SIGNS IN.
          </p>
        </div>
      </div>
      <LoggedInSidebar />
    </div>
  );
};
export default SignInUp;
