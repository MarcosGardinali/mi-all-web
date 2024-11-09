import React from 'react';
import logo from '../assets/sidebar-logo.png';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <aside className="w-20 bg-gray-100 h-full fixed top-0 left-0 flex flex-col items-center py-5">
            <div className="mb-8">
                {/* Logo */}
                <img src={logo} alt="Logo" className="w-10 h-10" />
            </div>
            
            {/* Navigation Icons */}
            <nav className="flex flex-col space-y-6">
                <button onClick={() => navigate('/home')} className="p-2 rounded-full bg-green-100 text-customGreen">
                    <i className="fas fa-home" style={{ color: "#000000" }}></i>
                </button>
                <button onClick={() => navigate('/files')} className="p-2 rounded-full text-gray-500 hover:bg-gray-200">
                    <i className="fas fa-file-alt" style={{ color: "#000000" }}></i>
                </button>
                <button onClick={() => navigate('/pets')} className="p-2 rounded-full text-gray-500 hover:bg-gray-200">
                    <i className="fas fa-paw" style={{ color: "#000000" }}></i>
                </button>
                <button onClick={() => navigate('/appointments')} className="p-2 rounded-full text-gray-500 hover:bg-gray-200">
                    <i className="fa-regular fa-clock" style={{ color: "#000000" }}></i>
                </button>

                <hr className="border-t-2 border-[#DBDBDB] w-full my-4" />
                
                <button onClick={() => navigate('/settings')} className="p-2 rounded-full text-gray-500 hover:bg-gray-200">
                    <i className="fa-solid fa-user-gear" style={{ color: "#000000" }}></i>
                </button>
            </nav>            
            <button onClick={() => navigate('/')} className="p-2 rounded-full text-gray-500 hover:bg-gray-200 mt-auto">
                <i className="fas fa-sign-out-alt" style={{ color: "#000000" }}></i>
            </button>
        </aside>
    );
};

export default Sidebar;
