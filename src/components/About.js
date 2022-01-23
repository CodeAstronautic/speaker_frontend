import React from 'react'
import "./css/About.css";

export default function About() {
    return (
        <>
            <div className='about'>
                <p className='heading1'>ABOUT SPEAKER</p>
                <div className="cards">
                    <div className="card1">
                        <p className='num1 '>01</p>
                        <p className='desc1'>Filter out events according to your preference</p>
                        <img className='image1' src={require("./images/about.jpg")} alt={""} />
                    </div>
                    <div className="card2">
                        <p className='num2 '>02</p>
                        <p className='desc2'>Fill the speakerore exclusive events form and increase your probability of being selected by the organizer.</p>
                        <p className="des2">SpeakerOre Exclusive</p>
                        <img className='image2' src={require("./images/about.jpg")} alt={""} />
                    </div>
                    <div className="card3">
                        <p className='num3 '>03</p>
                        <p className='desc3'>Share your previous speaking work and persuade the organizer</p>
                        <img className='image3' src={require("./images/about.jpg")} alt={""} />
                    </div>
                    <div className="card4">
                        <p className='num4 '>04</p>
                        <p className='desc4'>Get details of the nearby events and apply</p>
                        <img className='image4' src={require("./images/about.jpg")} alt={""} />
                    </div>
                </div>
            </div>
        </>
    )
}
