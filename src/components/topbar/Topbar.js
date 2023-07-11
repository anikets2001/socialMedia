import React from 'react';
import "./topbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <span className='logo'>socialOpedia</span>
      </div>

      <div className='searchBar'>
        <i className="fas fa-search"></i>
        <input className='search' type="text" placeholder="Search for friend, post, or video"></input>
      </div>

      <div className='topbarRight'>
        <a className='topbarLink'>Homepage</a>
        <a className='topbarLink'>Timeline</a>
      </div>

      <div className='topbarIcons'>
        <div className='topbarIconItems'>
          <i className="fas fa-user"><sup className='topbarIconBadge'>1</sup></i>
        </div>

        <div className='topbarIconItems'>
          <i className="fas fa-envelope"> <sup className='topbarIconBadge'>2</sup></i>

        </div>
        <div className='topbarIconItems'>
          <i className='far fa-bell'><sup className='topbarIconBadge'>1</sup></i>

        </div>
      </div>

      <div className='img-wrapper'>
        <img src={require('../../assets/person/1.jpeg')} alt="My Image" />
      </div>
    </div>
  )
}

export default Topbar