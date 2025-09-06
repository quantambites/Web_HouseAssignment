import React from "react";

export default function JourneyForm() {
  return (
    <div className="flex justify-center items-center py-12 bg-white px-12">
      <div className="w-full max-w-7xl">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Start Your Journey Today!
        </h2>
        <p className="text-gray-600 mb-6">
          Create a profile in seconds and find your ideal home.
        </p>

        {/* Form */}
        <form className="flex flex-col md:flex-row gap-6 items-center md:items-stretch">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <select
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-gray-600"
          >
            <option value="">Select User Type</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
            <option value="agent">Agent</option>
          </select>

          <input
            type="text"
            placeholder="Enter Your Location"
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <button
            type="submit"
            className="flex-1 px-8 py-2 bg-primary text-white font-medium rounded-full hover:bg-blue-700 transition"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
