import React from "react";
import { Search , LocateFixed , House , ChevronDown , SquareArrowOutUpRight  } from "lucide-react";
import heroImg from "@/assets/hero_B.png"; // use your actual hero image

const Hero = () => {
  return (
    <section className="px-8 md:px-14 pt-4 pb-12">
      {/* Hero Card */}
      <div className="relative rounded-[34px] overflow-hidden ">
        {/* Background */}
        <img
          src={heroImg}
          alt="Property"
          className="w-full h-[527px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 rounded-[34px]" />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
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
          <div className="flex flex-wrap justify-center gap-3 bg-white rounded-full  w-full px-5 py-3 max-w-2xl text-gray-500">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm">
              <SquareArrowOutUpRight size={15}/> For Buying
              <span className="ml-1"><ChevronDown size={15}/></span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm">
              <House size={15}/> House
              <span className="ml-1"><ChevronDown size={15}/></span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm">
              <LocateFixed size={17}/> Indonesia
              <span className="ml-1"><ChevronDown size={15}/></span>
            </button>
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-800 text-sm">
              Find Property
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
