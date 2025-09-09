import React from "react";
import Logo from "@/assets/logo.png"; 

const Footer = () => {
  return (
    <footer className="bg-[#455a9c] text-white px-6 py-10">
      {/* Top Section */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-2">Get in Touch with Us</h2>
        <p className="text-sm">
          Subscribe now for exclusive property insights and deals!
        </p>

        {/* Subscription Bar */}
        <div className="mt-4 flex justify-center">
          <div className="flex w-full max-w-md rounded-full overflow-hidden bg-gray-200">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 text-gray-700 focus:outline-none bg-gray-200"
            />
            <button className="bg-[#2d3d73] px-5 text-white text-sm font-medium hover:bg-[#22305a]">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" pt-4 pl-8 flex flex-col md:flex-row justify-between items-center text-sm">
        {/* Left - Logo */}
        <div className="flex items-center gap-2 mb-3 md:mb-0">
          <img src={Logo} alt="PropBot Logo" className="w-6 h-6 object-contain filter invert" />
          <span className="font-bold text-md">PropBot</span>
        </div>

        {/* Center - Links */}
        <div className="flex gap-4 text-xs mb-3 md:mb-0">
          <a href="#" className="hover:underline">For Sale</a>
          <a href="#" className="hover:underline">Rentals</a>
          <a href="#" className="hover:underline">New Projects</a>
          <a href="#" className="hover:underline">Property News</a>
        </div>

        {/* Right - Copyright */}
        <div className="text-xs text-gray-200">
          ©2025 Propbot. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
