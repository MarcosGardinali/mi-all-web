import React from 'react';
import Appointments from '../Home/Container/Appointments';
import Pets from '../Home/Container/Pets';
import Reports from '../Home/Container/Reports';
import Attendances from '../Home/Container/Attendances';


const HomeContent = () => {
  return (
    <div className="ml-20 p-6 bg-gray-50 min-h-screen w-full">
      <div className="flex w-full justify-between">
        <Appointments/>
        <Pets />
        <Reports />
      </div>
      <Attendances />
    </div>
  );
};

export default HomeContent;
