import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "@/services/authContext";
import { House, Menu, X } from "lucide-react";

const Header = ({ profileActive, setProfileActive }) => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 bg-background z-50 relative ">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 ml-14">
            <House size={18} />
            <span className="font-semibold text-lg">PropBot</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm">
            <button onClick={() => navigate('/shop/home')}>Home</button>
            <button onClick={() => navigate('/shop/buy')}>Buy</button>
            <button onClick={() => navigate('/shop/home')}>Rent</button>
            <button onClick={() => navigate('/shop/about')}>About</button>
            <button onClick={() => navigate('/shop/contact')}>Contact</button>
          </nav>

          {/* Profile / Auth */}
          <div className="hidden md:block">
            {userLoggedIn ? (
              <button className="mr-14" onClick={() => setProfileActive(!profileActive)}>Profile</button>
            ) : (
              <button
                className="bg-primary text-white px-4 py-2 rounded-3xl text-sm mr-14"
                onClick={() => navigate('/auth/login')}
              >
                Login / Register
              </button>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileOpen && (
          <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-background border-t border-border">
            <button onClick={() => navigate('/shop/home')}>Home</button>
            <button onClick={() => navigate('/shop/buy')}>Buy</button>
            <button onClick={() => navigate('/shop/home')}>Rent</button>
            <button onClick={() => navigate('/shop/about')}>About</button>
            <button onClick={() => navigate('/shop/contact')}>Contact</button>

            {userLoggedIn ? (
              <button  onClick={() => setProfileActive(!profileActive)}>Profile</button>
            ) : (
              <button
                className="bg-primary text-white px-4 py-2 rounded-3xl text-sm"
                onClick={() => navigate('/auth/login')}
              >
                Login / Register
              </button>
            )}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
