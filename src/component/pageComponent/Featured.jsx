import React from "react";
import featured_l from "@/assets/feature_L.jpg";
import featured_m from "@/assets/feature_M.jpg";
import featured_s1 from "@/assets/feature_S_1.jpg";
import featured_s2 from "@/assets/feature_S_2.jpg";

const Featured = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Featured Property</h2>
        <button className="px-4 py-2 border border-primary text-primary rounded-full text-sm hover:bg-primary hover:text-white transition">
          See 268 New Projects →
        </button>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Large Left Image */}
        <div className="md:col-span-2 relative rounded-xl overflow-hidden">
          <img
            src={featured_l}
            alt="Featured Property"
            className="w-full h-[500px] object-cover"
          />
          {/* Overlay Text */}
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm opacity-80">By Finder & Projects</p>
            <h3 className="font-bold text-xl">Kenanga Residence</h3>
          </div>
        </div>

        <img
            src={featured_m}
            alt="Medium Property"
            className="rounded-xl object-cover w-full h-full"
          />

        {/* Right Side Images */}
        <div className="grid grid-rows-2 gap-6">
          {/* Medium Image */}
          
          {/* Small Image 1 */}
          <img
            src={featured_s1}
            alt="Small Property 1"
            className="rounded-xl object-cover w-full h-full"
          />
          {/* Small Image 2 */}
          <img
            src={featured_s2}
            alt="Small Property 2"
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Featured;
