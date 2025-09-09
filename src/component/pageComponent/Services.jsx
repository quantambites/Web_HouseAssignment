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
      <div className="max-w-full px-8 md:px-14 mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-2">
          What We Do?
        </h2>
        <p className="text-gray-500 mb-10 text-lg">
          Helping you find, buy, and rent the perfect <br />property with ease.
        </p>

        {/* cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-2">
          {services.map((service, index) => (
                        <div
              key={index}
              className={`rounded-lg p-6 flex flex-col items-center text-center transition border border-gray-100
                ${
                  index === 1
                    ? "bg-white shadow-lg" // always hovered
                    : "bg-gray-100 "
                }`}
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
