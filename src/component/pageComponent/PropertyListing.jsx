import React, { useEffect, useState } from "react";
import { MapPin, Star } from "lucide-react";

// Import fallback images
import random1 from "@/assets/random_1.jpg";
import random2 from "@/assets/random_2.jpg";
import random3 from "@/assets/random_3.jpg";
import random4 from "@/assets/random_4.jpg";

const fallbackImages = [random1, random2, random3, random4];

export default function PropertyListing() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error("Error fetching properties:", err));
  }, []);

  // Add fake price & rating
  const enrichedProperties = properties.map((p, i) => ({
    ...p,
    price:
      i % 2 === 0
        ? `$${(450000 + i * 10000).toLocaleString()}`
        : `$${1200 + i * 200}/month`,
    rating: (Math.random() * (5 - 4) + 4).toFixed(1),
    type: i % 2 === 0 ? "sale" : "rent",
    safeImage:
      p.image && p.image.trim() !== ""
        ? p.image
        : fallbackImages[Math.floor(Math.random() * fallbackImages.length)],
  }));

  const saleProperties = enrichedProperties.filter((p) => p.type === "sale");
  const rentalProperties = enrichedProperties.filter((p) => p.type === "rent");

  const PropertyCard = ({ property, type }) => {
  const [imgSrc, setImgSrc] = useState(property.safeImage);

  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden w-[270px] flex-shrink-0 flex flex-col">
      {/* Fixed Image */}
      <img
        src={imgSrc}
        alt={property.name}
        className="w-full h-[180px] object-cover p-2 rounded-xl"
        onError={() =>
          setImgSrc(
            fallbackImages[Math.floor(Math.random() * fallbackImages.length)]
          )
        }
      />

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-4 space-y-3">
        {/* Location */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-gray-500 text-sm w-[70%] truncate">
            <MapPin size={16} />
            <span className="truncate">{property.city}, {property.state}</span>
          </div>
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            <Star size={16} fill="currentColor" />
            <span>{property.rating}/5</span>
          </div>
        </div>

        {/* Description (fixed height for alignment) */}
        <p className="text-gray-700 text-sm leading-snug line-clamp-2 h-[40px]">
          Spacious {property.buildingNumber}BHK apartment in a prime location
          with modern amenities.
        </p>

        {/* Footer pinned to bottom */}
        <div className="flex justify-between items-center mt-auto pt-2">
          <button className="bg-primary text-white px-4 py-1 rounded shadow hover:bg-primary/90">
            {type === "sale" ? "Buy Now" : "Rent Now"}
          </button>
          <p className="font-bold text-gray-800">{property.price}</p>
        </div>
      </div>
    </div>
  );
};

  return (
    <div className=" py-12 px-6 md:px-12">
      <div className="max-w-8xl mx-auto space-y-16 pl-16">
        {/* Sale Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                Best Properties Available For Sale
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Browse our top-rated properties for sale, featuring premium
                listings tailored to your needs. Find your dream home today!
              </p>
            </div>
            <button className="bg-primary text-white px-6 py-2 rounded-full shadow hover:bg-primary/90">
              View More Properties
            </button>
          </div>

          <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
            {saleProperties.map((property) => (
              <PropertyCard key={property.id} property={property} type="sale" />
            ))}
          </div>
        </section>

        {/* Rental Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                Find The Perfect Rental Home
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Browse our top-rated properties for rent, featuring premium
                listings tailored to your needs. Find your dream home today!
              </p>
            </div>
            <button className="bg-primary text-white px-6 py-2 rounded-full shadow hover:bg-primary/90">
              View All Rentals
            </button>
          </div>

          <div className="flex space-x-6 overflow-x-scroll scrollbar-hide">
            {rentalProperties.map((property) => (
              <PropertyCard key={property.id} property={property} type="rent" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
