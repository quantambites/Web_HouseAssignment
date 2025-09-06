import React from "react";
import { BarChart3, Key, Search, Lock } from "lucide-react"; // icons

const services = [
  {
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    title: "Buy & Sell Properties",
    desc: "Find verified homes for sale or list your property with ease.",
  },
  {
    icon: <Key className="w-8 h-8 text-primary" />,
    title: "Find Rental Homes",
    desc: "Browse through thousands of rental options suited to your needs.",
  },
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "Smart AI Property Search",
    desc: "Get instant recommendations based on your budget & location.",
  },
  {
    icon: <Lock className="w-8 h-8 text-primary" />,
    title: "Safe & Secure Transactions",
    desc: "Verified listings & secure deals to ensure a smooth experience.",
  },
];

const Services = () => {
  return (
    <section className="py-12 px-6 bg-background ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">
          What We Do?
        </h2>
        <p className="text-gray-500 mb-10">
          Helping you find, buy, and rent the perfect property with ease.
        </p>

        {/* cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-300 mb-4">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
