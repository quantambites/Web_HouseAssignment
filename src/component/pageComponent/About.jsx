import React from "react";
import foot1 from "@/assets/foot_1.jpg"; // adjust path as needed
import foot2 from "@/assets/foot_2.jpg";
import { Wallet, ShieldCheck, MapPin } from "lucide-react";

export default function PropertyFeatures() {
  return (
    <div className="flex justify-center items-center py-16 bg-white px-6 md:px-16">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12">
        {/* Left side - Images */}
        <div className="relative flex-1 flex justify-center md:justify-start">
          {/* Back Image */}
          <img
            src={foot1}
            alt="Modern House"
            className="w-80 h-85 object-cover rounded-md shadow-md border-4 border-white relative z-0"
          />
          {/* Front Image */}
          <img
            src={foot2}
            alt="Luxury House"
            className="w-60 h-60 object-cover rounded-md shadow-md border-4 border-white absolute top-34 left-36 z-10"
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
              <Wallet className="text-primary w-7 h-7 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-primary">Budget Friendly</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Venenatis sed ac
                  aenean tempus. Lectus quis pretium varius iaculis sed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ShieldCheck className="text-primary w-7 h-7 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-primary">Trusted By Thausand</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Venenatis sed ac
                  aenean tempus. Lectus quis pretium varius iaculis sed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-primary w-7 h-7 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-primary">Prime Location</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Venenatis sed ac
                  aenean tempus. Lectus quis pretium varius iaculis sed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
