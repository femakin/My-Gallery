import React from "react";
import profilePhoto from "../Images/profilePhoto.png";

export default function Header() {
  return (
    <div className="container">
      <header>
        <div className="header_content">
          <section className="header_one">
            <img
              src={profilePhoto}
              alt="profilephoto"
              className="header_image"
            />
            <h2 className="header_name">Rodney Cotton</h2>
            <p className="header_location">Helsinki, Finland</p>
          </section>
          <section className="header_two">
            <div className="social">
              <p className="social_number">100</p>
              <p className="social_role">Posts</p>
            </div>
            <div className="social">
              <p className="social_number">2,242</p>
              <p className="social_role">Follower</p>
            </div>
            <div className="social">
              <p className="social_number">1,432</p>
              <p className="social_role">Following</p>
            </div>
          </section>
        </div>
      </header>
    </div>
  );
}
