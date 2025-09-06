import React, { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

// Fallback images
import fallback1 from "@/assets/random_1.jpg";
import fallback2 from "@/assets/random_2.jpg";
import fallback3 from "@/assets/random_3.jpg";
import fallback4 from "@/assets/random_4.jpg";

const fallbackImages = [fallback1, fallback2, fallback3, fallback4];

// Small reusable card component
const PropertyCard = ({ property }) => {
  const [imgSrc, setImgSrc] = useState(property.safeImage);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg">
      {/* Background Image */}
      <img
        src={imgSrc}
        alt={property.name}
        className="w-full h-[320px] object-cover"
        onError={() =>
          setImgSrc(
            fallbackImages[Math.floor(Math.random() * fallbackImages.length)]
          )
        }
      />

      {/* Overlay Card */}
      <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-lg p-4">
        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600 font-medium mb-2">
          <MapPin size={16} className="text-primary" />
          <span>
            {property.city}, {property.state}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-3">
          Spacious {property.buildingNumber}BHK apartment in a prime location
          with modern amenities.
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg text-gray-800">{property.price}</p>
          <button className="bg-primary text-white px-4 py-2 rounded-full text-sm shadow hover:bg-primary/90">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default function FeaturedProperty() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing")
      .then((res) => res.json())
      .then((data) => {
        const enriched = data.map((p) => ({
          ...p,
          rating: (Math.random() * (5 - 4) + 4).toFixed(1),
          safeImage:
            p.image && p.image.trim() !== ""
              ? p.image
              : fallbackImages[Math.floor(Math.random() * fallbackImages.length)],
          price: `$${(450000 + Math.floor(Math.random() * 100000)).toLocaleString()}`,
        }));

        const top2 = enriched.sort((a, b) => b.rating - a.rating).slice(0, 2);
        setFeatured(top2);
      })
      .catch((err) => console.error("Error fetching featured properties:", err));
  }, []);

  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Featured Property
          </h2>
          <button className="px-4 py-2 border border-primary text-primary rounded-full text-sm hover:bg-primary hover:text-white transition">
          See 268 New Projects →
          </button>
        </div>

        {/* Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
