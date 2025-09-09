import React from "react";
import foot1 from "@/assets/foot_1.jpg"; // adjust path as needed
import foot2 from "@/assets/foot_2.jpg";
import { Wallet, ShieldCheck, MapPin } from "lucide-react";
import Budget from "@/assets/budget.png"
import Map from "@/assets/map.png"
import Trusted from "@/assets/trusted.png"

export default function PropertyFeatures() {
  return (
    <div className="flex justify-center items-center py-16 bg-white px-15 md:px-44 pb-32">
      <div className="w-full  flex flex-col md:flex-row items-center gap-12">
        {/* Left side - Images */}
        <div className="relative flex-1 flex justify-center md:justify-start">
          {/* Back Image */}
          <img
            src={foot1}
            alt="Modern House"
            className="w-95 h-100 object-cover rounded-md shadow-md border-4 border-gray-200 relative z-0"
          />
          {/* Front Image */}
          <img
            src={foot2}
            alt="Luxury House"
            className="w-75 h-75 object-cover rounded-md shadow-md border-4 border-gray-200 absolute top-42 left-46 z-10"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
            We Provide Latest Properties <br /> For Our Valuable Clients
          </h2>

          {/* Features list */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <img src={Budget} alt="PropBot Logo" className="w-8 h-8 object-contain" />
              <div>
                <h3 className="font-semibold text-2xl text-primary">Budget Friendly</h3>
                <p className="text-gray-600 text-lg">
                  Lorem ipsum dolor sit amet consectetur. <br />Venenatis sed ac
                  aenean tempus.<br /> Lectus quis pretium varius iaculis sed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img src={Trusted} alt="PropBot Logo" className="w-8 h-8 object-contain" />
              <div>
                <h3 className="font-semibold text-2xl text-primary">Trusted By Thausand</h3>
                <p className="text-gray-600 text-lg">
                  Lorem ipsum dolor sit amet consectetur. <br />Venenatis sed ac
                  aenean tempus.<br /> Lectus quis pretium varius iaculis sed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img src={Map} alt="PropBot Logo" className="w-8 h-8 object-contain" />
              <div>
                <h3 className="font-semibold text-2xl text-primary">Prime Location</h3>
                <p className="text-gray-600 text-lg">
                  Lorem ipsum dolor sit amet consectetur. <br />Venenatis sed ac
                  aenean tempus.<br /> Lectus quis pretium varius iaculis sed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
