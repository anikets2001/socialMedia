import React from 'react';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import '../home/home.css';


const Home = () => {
  return (
    <React.Fragment>
      <Topbar />
      
      <div className='main-wrapper'>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>

    </React.Fragment>
  )
}

export default Home