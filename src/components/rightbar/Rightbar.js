import React from "react";
import "./rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightbar-wrapper">
      <div className="wish-wrapper">
        <div className="gift-box"></div>
        <p> <a href="#">Nikhil</a> and <a href="#"> 3 other </a>and have birthday today </p>
      </div>
      <div className="right-image">

        {/* <img src='https://images.pexels.com/photos/17586064/pexels-photo-17586064/free-photo-of-cesta-baloncesto.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/> */}
      </div>
      <div className="staus-wrapper">
        <h4 className="status">Online Friends</h4>
        <div className="img-name-wrapper">
          <div className="status-dot"></div>
          <div className="img-wrapper-rightbar">
            <img src={require('../../assets/person/2.jpeg')} alt="person 1"/>
          </div>
          <p>John Carter</p>
        </div>
      </div>

      <div className="wish-wrapper">
        <div className="gift-box"></div>
        <p> <a href="#">Nikhil</a> and <a href="#"> 3 other </a>and have birthday today </p>
      </div>
      <div className="right-image">

        {/* <img src='https://images.pexels.com/photos/17586064/pexels-photo-17586064/free-photo-of-cesta-baloncesto.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/> */}
      </div>
      <div className="staus-wrapper">
        <h4 className="status">Online Friends</h4>
        <div className="img-name-wrapper">
          <div className="status-dot"></div>
          <div className="img-wrapper-rightbar">
            <img src={require('../../assets/person/2.jpeg')} alt="person 1"/>
          </div>
          <p>John Carter</p>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
