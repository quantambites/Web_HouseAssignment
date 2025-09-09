import React from "react";
import { LocateFixed , House , ChevronDown , SquareArrowOutUpRight  } from "lucide-react";
import heroImg from "@/assets/hero_img.png"; 
import Search from "@/assets/search.png"; 
import Location from "@/assets/location.png"; 


const Hero = () => {
  return (
    <section className="px-8 md:px-14 pt-4  pb-15">
      {/* Hero Card */}
      <div className="relative rounded-[34px]  ">
        {/* Background */}
        <img
          src={heroImg}
          alt="Property"
          className="w-full h-[527px] object-cover rounded-[34px]"
        />
        <div className="absolute inset-0 bg-black/10 rounded-[34px]" />

        {/* Text Content */}
        <div className="absolute  top-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 whitespace-nowrap">
            Find Your Dream Home in One Click!
          </h1>
          <p className="text-lg mb-8">
            Discover, Buy, or Rent Verified Properties with Ease.
          </p>
        </div>

        {/* Search + Filters Container */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl flex flex-col items-center gap-4">
          {/* Search Bar */}
          <div className="flex flex-row w-full">
          <div className="flex items-center bg-white rounded-lg shadow-md  overflow-hidden min-w-md px-2">
            <img src={Location} alt="s" className="w-6 h-6 object-contain " />       
            <input
              type="text"
              placeholder="Search Location..."
              className=" px-3 py-3 text-gray-700 focus:outline-none"
            />
            <img src={Search} alt="s" className="w-6 h-6 object-contain ml-auto" />

          </div>
            <button className="bg-white text-primary border border-primary px-5 py-2 rounded-full m-1 hover:bg-primary hover:text-white text-sm whitespace-nowrap ml-auto">
              List Your Property
            </button>
          </div>


          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-6 bg-white rounded-full  w-full px-5 py-5 max-w-6xl text-gray-500 mt-3 -mb-15 shadow-xl">
            <button className="flex items-center gap-2 px-8 py-3 bg-gray-100 rounded-full text-sm border border-border">
              <SquareArrowOutUpRight size={15}/>
              <span className="text-gray-900 "> For Rent</span>
              <span className="ml-6 text-gray-900"><ChevronDown size={15}/></span>
            </button>
            <button className="flex items-center gap-2 px-8 py-3 bg-gray-100 rounded-full text-sm border border-border">
              <House size={15}/>
              <span className="text-gray-900 "> House</span>
              <span className="ml-6 text-gray-900"><ChevronDown size={15}/></span>
            </button>
            <button className="flex items-center gap-2 px-8 py-3 bg-gray-100 rounded-full text-sm border border-border">
              <LocateFixed size={17}/> 
              <span className="text-gray-900 "> Indonesia</span>
              <span className="ml-6 text-gray-900"><ChevronDown size={15}/></span>
            </button>
            <button className="bg-primary text-white px-12 py-3 rounded-full hover:bg-blue-800 text-sm">
              Find Property
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
