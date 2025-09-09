import React from "react";
import { Search , LocateFixed , House , ChevronDown , SquareArrowOutUpRight  } from "lucide-react";
import heroImg from "@/assets/hero_buy.png"; // use your actual hero image

const Hero = () => {
  return (
    <section className="px-8 md:px-14 pt-4 pb-12">
      {/* Hero Card */}
      <div className="relative rounded-[34px]  ">
        {/* Background */}
        <img
          src={heroImg}
          alt="Property"
          className="w-full h-[527px] object-cover rounded-[34px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-transparent rounded-[34px]" />

        {/* Text Content */}
        <div className="absolute -bottom-0 flex flex-col items-center justify-center text-center text-white px-6 pb-15 pl-18">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Featured Properties For Sale
          </h1>
          <p className="text-lg mb-8">
            Discover, Buy, or Rent Verified Properties with Ease.
          </p>
        </div>

        {/* Search + Filters Container */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl flex flex-col items-center gap-4">

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-6 bg-white rounded-full  w-full px-5 py-5 max-w-6xl text-gray-500 mt-6 -mb-15 shadow-xl">
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
