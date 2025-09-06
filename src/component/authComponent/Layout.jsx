import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Layout from '@/assets/layout.png';
import {  House  } from "lucide-react";

const AuthLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden">

      {/* Overlay Header */}
      <header className="absolute top-0 left-0 right-0 bg-white bg-opacity-90 shadow p-4 flex items-center justify-between z-50">
        {/* Left: Back to Homepage */}
        <button
          className="text-primary bg-white border border-primary px-4 py-2 rounded-3xl hover:bg-primary hover:text-white"
          onClick={() => navigate('/shop/home')}
        >
          ⟵ Back to Homepage
        </button>

        {/* Center: Logo */}
          <div className=" flex items-center gap-2 ">
              <span className="text-xl"><House size={20}/></span>
              <span className="font-semibold text-lg">PropBot</span>
          </div>


        {/* Right: About Us */}
        <button
          className="bg-primary text-white px-4 py-2 rounded-3xl hover:bg-white hover:text-primary border border-primary"
          onClick={() => navigate('/shop/about')}
        >
          About Us ➔
        </button>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center h-full pt-16"> {/* pt-16 accounts for header height */}
        <div className="bg-white shadow-lg rounded-lg flex w-full max-w-8xl h-[calc(100vh-64px)]">

          {/* Left Side: Form */}
          <div className="w-full md:w-1/3 p-8 flex items-center justify-center">
            <Outlet /> {/* SignIn / SignUp form */}
          </div>

          {/* Right Side: Image */}
          <div className="hidden md:block w-2/3">
            <img
              src={Layout}
              alt="Modern Home"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>

    </div>
  );
};

export default AuthLayout;
