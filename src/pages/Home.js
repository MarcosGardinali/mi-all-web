import React from 'react';
import Sidebar from '../components/SideBar';
import HomeContent from '../Home/HomeContent';


const HomePage = () => {
  return (
    <div className="flex w-full">
      <Sidebar/>
      <HomeContent/>
    </div>
  );
};

export default HomePage;
