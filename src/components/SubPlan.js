import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoggedInSidebar from "./accountSide/LoggedInSidebar";
import "./css/subPlan.css";
function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

const SubPlan = () => {
    const navigate = useNavigate()
    const [datas, setDatas] = useState('')
    // const handlePayment = () => {
    //     axios
    //         .post(`${process.env.REACT_APP_URL}/payment`, {
    //             currency: "IN",
    //             amount: "12000",
    //         }, {
    //             headers: {
    //                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm92aWRlciI6IkdPT0dMRSIsImlkIjoxNiwiaWF0IjoxNjQ2MDY1MzQ4fQ.xC1nUV5374lg8onfUMevuCb-w4262LhWXPRI8zPwwlo'
    //             }
    //         }).then((Data) => {
    //             // loadScript("https://checkout.razorpay.com/v1/checkout.js");
    //             console.log(Data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };
    async function showRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const data = await axios.post(`${process.env.REACT_APP_URL}/payment`, {
            currency: "IN",
            amount: "12000",
        }, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm92aWRlciI6IkdPT0dMRSIsImlkIjoxNiwiaWF0IjoxNjQ2MDY1MzQ4fQ.xC1nUV5374lg8onfUMevuCb-w4262LhWXPRI8zPwwlo'
            }
        }).then((t) => setDatas(t?.data?.order_id));
        const options = {
            key: "rzp_test_JKlI55UIjlPhVg",
            currency: 'INR',
            amount: 2499 * 100,
            order_id: datas,
            handler: function (response) {
                alert("Transaction successful", response);
                navigate("/events")
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
    return (
        <>
            <div className="ep-parent">
                <div className="ep-left">
                    <div className="epl-heading subplan-heading">
                        <p style={{ borderBottom: "1px solid rgba(255, 191, 25, 1)" }}>
                            Plans
                        </p>
                        <p style={{ fontWeight: "bolder" }}>SpeakerOre</p>
                    </div>
                    <div className="plan-container">
                        <div className="plan-card">
                            <p>PLAN INCLUDES:</p>
                            <div style={{ height: "15rem" }}></div>
                            <p>Rs. 2499/-</p>
                            <div className="eprbtn1" onClick={showRazorpay}>
                                BUY NOW
                            </div>
                        </div>
                        <div className="plan-card">
                            <p>PLAN INCLUDES:</p>
                            <div style={{ height: "15rem" }}></div>
                            <p>Rs. 2499/-</p>
                            <div className="eprbtn1" onClick={showRazorpay}>
                                BUY NOW{" "}
                            </div>
                        </div>
                    </div>
                </div>
                <LoggedInSidebar />
            </div>
        </>
    );
};
export default SubPlan;
