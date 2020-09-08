import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="greeting-container">
          <h1>Hi, I am Kalid Diriye </h1>
        </div>
        <div className="intro-wrapper">
          <div className="nav-wrapper">
            <div className="icons-wrapper">
              <div id="dot-1" className="browser-dot"></div>
              <div id="dot-2" className="browser-dot"></div>
              <div id="dot-3" className="browser-dot"></div>
            </div>
            <div className="navigation-wrapper">nav</div>
          </div>
          <div className="left-column">
            <div className="image">
              <img
                className="profile-pic"
                src={require("../../Asset/img/IMG_0448.JPG")}
                alt="photoOfMe"
              />
            </div>
            <h3 className="text-theme">Personalize theme</h3>
            
					<div id="theme-options-wrapper">
          <div data-mode="light" id="light-mode" class="theme-dot"></div>
          <div data-mode="blue" id="blue-mode" class="theme-dot"></div>
          <div data-mode="green" id="green-mode" class="theme-dot"></div>
          <div data-mode="purple" id="purple-mode" class="theme-dot"></div>
        </div>

        <p id="settings-note">*Theme settings will be saved for your next vist</p>
          </div>
          <div className="right-column">right
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </div>
    );
  }
}
