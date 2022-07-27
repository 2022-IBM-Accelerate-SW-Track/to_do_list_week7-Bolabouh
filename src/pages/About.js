import React, { Component } from 'react';
import "./About.css";
import pic3 from "../assets/pic3.jpg"; 

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src= {pic3}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Omo Ajibola</div>
            <div className="brief_description">
            <p>I am a Junior at Kent State University, majoring in Computer Science and concentrating in Robotics and Embedded Systems.</p>
            <p>Generally, I love to push boundaries with myself and my career, my hobbies include working out, writing, and taking on innovative passion projects - technical or otherwise</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}