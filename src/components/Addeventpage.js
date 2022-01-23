import React from 'react';
import "./css/addeventpage.css";
import Navbar from './Navbar';
 import Footer from './Footer';

export default function Addeventpage() {
  return (
      <>
      <Navbar />
    <div className='main'>
      
       
        
     <div className="mainform">
     <p className='m1'>Event Details </p>
        <p className="m2"> Show previous events hosted</p>
      <form  className="forms">
      
        <p className="label">Name of the event</p>
        <input type="text" className="input" placeholder='Event name here'/><br/>
        <p className="label">Date of the event</p>
        <input type="date" className="input" /><br/>
        <p className="label">Mode</p>
        <input typ e="text" className="input" placeholder='Online/Offline'/><br/>
        <p className="label">Location</p>
        <input type="text" className="input" placeholder='Address Here' /><br/>
        <p className="label">Topics Covered</p>
        <input type="text" className="input" placeholder='Write' /><br/>
        <p  className="label">Audience Size</p>
        <input type="text" className="input" placeholder='0'/><br/>
        <p className="label">Payment Terms</p>
        <input type="text" className="input" placeholder='Paid' /><br/>
      </form>
      <form  className="forms2">
      
        <p className="label2">This event includes (in short):</p>
        <textarea name="description" className='textarea1' placeholder='A small about the event that is going to be held for the speakers.' ></textarea>
       
        <p className="label2">About (elaborate)</p>
        <textarea name="description" className='textarea2' placeholder='A small about the event that is going to be held for the speakers.' ></textarea>
        <p className="label2"> Contact Information:</p>
        <input type="text" className="input2" placeholder='+91-9087654321' /><br/>
        <p className="label2">Session Type</p>
        <input type="text" className="input2" placeholder='Conference ' /><br/>
        <p  className="label2">Audience Type </p>
        <input type="text" className="input2" placeholder='0'/><br/>
        <p className="label2">Tags:</p>
        <input type="text" className="input2" placeholder='first' />
        <button className='add' type='submit'>Add</button>
        <ul className="tags">
            <li>first</li>
            <li>Second</li>
            <li>third</li>
            <li>fourth</li>
            <li>fifth</li>
        </ul>
      </form>
      <input type="checkbox" className='apply'name="apply"/>
      <p className="m3">Apply for SpeakerOre Exclusive</p>
      <p className="m4">Events only for SpeakerOre subscribers. All the speaker in these events will be selected among speakers or members.</p>
      <button className="cancelevent">CANCEL EVENT</button>
      <button className="addevent">ADD EVENT</button>
      </div>
      <div className="profile">
        <img src={require("./images/profile.png") } className='dp' alt={"" } />  
        <p className="p1">Hi, Mohit Gopal!</p>
        <p className="p2">Event Manager</p>
        <button className="p3">Create a new event</button>
        <button className="p4">SpeakerOre exclusive Events</button>
        <button className="p5">Subscribed</button>

      </div>

        <div className="resource">
            <p className="rhead">Resources</p>
            <p className="r1">About Us</p>
            <p className="r2">How It Works</p>
            <p className="r3">Privacy policy</p>
            <button className="r4">Contact Us</button>
        </div>
  </div>
  <Footer />
  </>)
}
