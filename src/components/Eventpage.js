import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./css/eventpage.css";

export default function Eventpage() {
  return (
    <>
      <Navbar />
      <div className="search-ticket">
        <input
          className="searchbar"
          type="text"
          placeholder="Search by event name, location, or category name"
          name="search"
        />
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
        <input type="checkbox" className="apply1" name="apply1" />
        <p className="s1">SpeakerOre Exclusive</p>
        <p className="s2">
          Events only for SpeakerOre subscribers. All the speaker in these
          events will be selected among speakers or members.
        </p>
        <p className="s3">Location: </p>
        <input type="text" className="s4" placeholder="New Delhi" />
        <p className="s5">Categories:</p>
        <input type="text" className="s6" placeholder="Film Industry" />
        <p className="s7"> Sort:</p>
        <input type="text" className="s8" placeholder="by date" />
        <p className="s9">from</p>
        <input type="text" className="s10" placeholder="dd/mm/yyyy" />
        <p className="s11">to</p>
        <input type="text" className="s12" placeholder="dd/mm/yyyy" />
        <p className="s13">Reset Filter</p>
      </div>
      <div className="view-event">
        <div className="event-card">
          <p className="e1">NEW MOVIE COMMENCING IN THE NEARBY...</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">ONLINE</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>
        <div className="event-card">
          <p className="e1">EVENT NAME</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">Offline</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>
        <div className="event-card">
          <p className="e1">EVENT NAME</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">Offline</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>
        <div className="event-card">
          <p className="e1">NEW MOVIE COMMENCING IN THE NEARBY...</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">ONLINE</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>
        <div className="event-card">
          <p className="e1">EVENT NAME</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">Offline</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>
        <div className="event-card">
          <p className="e1">EVENT NAME</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">Offline</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>{" "}
        <div className="event-card">
          <p className="e1">NEW MOVIE COMMENCING IN THE NEARBY...</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">ONLINE</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>
        <div className="event-card">
          <p className="e1">EVENT NAME</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">Offline</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>
        <div className="event-card">
          <p className="e1">EVENT NAME</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">Offline</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>{" "}
        <div className="event-card">
          <p className="e1">NEW MOVIE COMMENCING IN THE NEARBY...</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">ONLINE</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>
        <div className="event-card">
          <p className="e1">EVENT NAME</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">Offline</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>
        <div className="event-card">
          <p className="e1">EVENT NAME</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">Offline</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>{" "}
        <div className="event-card">
          <p className="e1">NEW MOVIE COMMENCING IN THE NEARBY...</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">ONLINE</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>
        <div className="event-card">
          <p className="e1">EVENT NAME</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">Offline</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>
        <div className="event-card">
          <p className="e1">EVENT NAME</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">Offline</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>{" "}
        <div className="event-card">
          <p className="e1">NEW MOVIE COMMENCING IN THE NEARBY...</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">ONLINE</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>
        <div className="event-card">
          <p className="e1">EVENT NAME</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">Offline</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>
        <div className="event-card">
          <p className="e1">EVENT NAME</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">Offline</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>{" "}
        <div className="event-card">
          <p className="e1">NEW MOVIE COMMENCING IN THE NEARBY...</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">ONLINE</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>
        <div className="event-card">
          <p className="e1">EVENT NAME</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">Offline</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>
        <div className="event-card">
          <p className="e1">EVENT NAME</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">Offline</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>
        <div className="event-card">
          <p className="e1">NEW MOVIE COMMENCING IN THE NEARBY...</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">ONLINE</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>
        <div className="event-card">
          <p className="e1">EVENT NAME</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">Offline</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>
        <div className="event-card">
          <p className="e1">EVENT NAME</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">Offline</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>
        <div className="event-card">
          <p className="e1">NEW MOVIE COMMENCING IN THE NEARBY...</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">ONLINE</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>
        <div className="event-card">
          <p className="e1">EVENT NAME</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">Offline</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>
        <div className="event-card">
          <p className="e1">EVENT NAME</p>
          <p className="e2">New Delhi, India</p>
          <input
            type="date"
            className="e7"
            placeholder="Date: 27th December 2021"
          />
          <p className="e8">Offline</p>
          <p className="e4">Tags: Industry, Film, Acting, Speaking </p>
          <p className="e5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
            turpis turpis eu adipiscing et. Et enim amet faucibus sed gravida
            tristique sagittis diam, habitant. Vel morbi viverra nam ac. Justo
            integer lorem nisl ullamcorper sed. Quam vel placerat.
          </p>
          <button className="e6">View Details</button>
        </div>
      </div>
      <div className="stranger">
        <img src={require("./images/blank-profile-picture.png")} alt={""} />
        <p className="st1">Hi, Stranger!</p>
        <p className="st2">Are you an event manager or a speaker?</p>
        <button className="st3"> Sign In </button>
        <button className="st4">Sign Up</button>
        <p className="st5">Single click Google Sign in.</p>
        <hr />
        <p className="st6">Why Sign In/Up?</p>
        <ul className="st7">
          <li>Get event details for FREE. </li>
          <li>Unlimited clicks on events</li>
          <li> Get hired through speakerOre exclusive events</li>
        </ul>
      </div>
      <div className="myprofile">
        <p className="mp-1">My Profile</p>
        <p className="mp-2">Basic Information</p>
        <p className="mp-3">Account Settings</p>
        <button className="mp-4">Show bookmarked events</button>
        <button className="mp-5">View Profile</button>
      </div>
      <div className="myresource">
        <p className="mr-1">Resources</p>
        <p className="mr-2">About Us</p>
        <p className="mr-3">How It Works</p>
        <p className="mr-4">Privacy policy</p>
        <button className="mr-5">Contact Us</button>
      </div>
      <Footer />
    </>
  );
}
