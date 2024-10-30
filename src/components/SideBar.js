import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-20 bg-gray-100 h-full fixed top-0 left-0 flex flex-col items-center py-5">
      <div className="mb-8">
        {/* Logo */}
        <img src="/path-to-logo.png" alt="Logo" className="w-10 h-10" />
      </div>
      {/* Navigation Icons */}
      <nav className="flex flex-col space-y-6">
        <button className="p-2 rounded-full bg-green-100 text-customGreen">
          <i className="fas fa-home"></i>
        </button>
        <button className="p-2 rounded-full text-gray-500 hover:bg-gray-200">
          <i className="fas fa-calendar"></i>
        </button>
        <button className="p-2 rounded-full text-gray-500 hover:bg-gray-200">
          <i className="fas fa-paw"></i>
        </button>
        <button className="p-2 rounded-full text-gray-500 hover:bg-gray-200">
          <i className="fas fa-file-alt"></i>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
