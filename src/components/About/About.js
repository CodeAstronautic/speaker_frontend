import React from 'react'
import "../css/About.css";

export default function About() {
    return (
        <>
            <div className='about'>
                   <p className='heading1'>ABOUT SPEAKERORE</p> 
                
                <div className="cards-section">
                    <div className="card">
                        <div className="fp-cardtext">
                           <p className='num'>01</p>
                        <p className='desc'>Filter out events according to your preference</p> 
                        </div>
                        
                        <img className='image' src={require("../images/about.jpg")} alt={""} />
                    </div>
                    <div className="card">
                        <div className="fp-cardtext">
                           <p className='num' style={{textAlign:'end'}}>02</p>
                        <p className='desc'>Fill the speakerore exclusive events form and increase your probabilty of being selected by the organizer.</p> 
                        </div>
                        
                        <img className='image' src={require("../images/about.jpg")} alt={""} />
                    </div>
                    
                </div>
                <div className="cards-section" style={{position:'relative', top:'-7rem'}}>
                    <div className="card">
                        <div className="fp-cardtext">
                           <p className='num'>03</p>
                        <p className='desc'>Filter out events according to your preference</p> 
                        </div>
                        
                        <img className='image' src={require("../images/about.jpg")} alt={""} />
                    </div>
                    <div className="card">
                        <div className="fp-cardtext">
                           <p className='num' style={{textAlign:'end'}}>04</p>
                        <p className='desc'>Fill the speakerore exclusive events form and increase your probabilty of being selected by the organizer.</p> 
                        </div>
                        
                        <img className='image' src={require("../images/about.jpg")} alt={""} />
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}