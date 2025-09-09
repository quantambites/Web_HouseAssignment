import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Layout from '@/assets/layout.png';
import Logo from "@/assets/logo.png"; 
import arrow from "@/assets/arrow1.png"; 

const AuthLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden">

      {/* Overlay Header */}
      <header className="absolute top-0 left-0 right-0 bg-white bg-opacity-90 shadow-lg p-4 flex items-center justify-between z-50">
        {/* Left: Back to Homepage */}
        <button
          className="text-gray-800 bg-white border border-primary px-4 py-2 rounded-3xl hover:bg-primary hover:text-white flex flex-row gap-2"
          onClick={() => navigate('/shop/home')}
        >
          <img
            src={arrow}
            alt=">"
            className="w-6 h-6 object-contain rotate-180 filter invert-0 brightness-0 saturate-100 hue-rotate-180"
          />
          <span>Back to Homepage</span>
        </button>

        {/* Center: Logo */}
          <div className=" flex items-center gap-2 ">
            <img src={Logo} alt="PropBot Logo" className="w-6 h-6 object-contain" />
            <span className="font-bold text-xl">PropBot</span>
          </div>


        {/* Right: About Us */}
        <button
          className="bg-primary text-white px-4 py-2 rounded-3xl border border-primary flex flex-row gap-2 hover:bg-blue-800"
          onClick={() => navigate('/shop/about')}
        >
          <span>About Us</span>
          <img src={arrow} alt=">" className="w-6 h-6 object-contain" />
        </button>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center h-full pt-16"> {/* pt-16 accounts for header height */}
        <div className="bg-white shadow-lg rounded-lg flex w-full max-w-8xl h-[calc(100vh-64px)]">

          {/* Left Side: Form */}
          <div className="w-full md:w-3/7 p-8 flex items-center justify-center">
            <Outlet /> {/* SignIn / SignUp form */}
          </div>

          {/* Right Side: Image */}
          <div className="hidden md:block w-4/7 py-10">
            <img
              src={Layout}
              alt="Modern Home"
              className="w-full h-full object-cover rounded-l-4xl"
            />
          </div>

        </div>
      </div>

    </div>
  );
};

export default AuthLayout;
