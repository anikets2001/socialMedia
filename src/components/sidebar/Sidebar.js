import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='navigation-wrapper'>
      <ul>
        <li><a><i className="fas fa-wifi icons"></i> Feed</a></li>
        <li><a><i className="fas fa-envelope icons"></i> Chat</a></li>
        <li><a><i className="fas fa-video icons"></i> Videoes</a></li>
        <li><a><i className="fas fa-user-friends icons"></i>Groups</a></li>
        <li><a><i className="fas fa-bookmark icons"></i>  Bookmarks</a></li>
        <li><a> <i className="fas fa-question-circle icons"></i>Questions</a></li>
        <li><a> <i className="fas fa-briefcase icons"></i>Jobs</a></li>
        <li><a><i className="fas fa-calendar icons"></i>  Events</a></li>
        <li><a><i className="fas fa-graduation-cap icons"></i>Courses</a></li>
        <li><a> <i className="fas fa-comment-alt icons"></i>Feedback</a></li>

      </ul>
    </div>
  )
}

export default Sidebar