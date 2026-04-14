import React from "react";
import { Link } from "react-router-dom";

function VideoShoot() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-black text-white py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Video Shoot Services
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300">
          High-quality video production for brands, events, and marketing campaigns.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">What We Offer</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Corporate Videos",
            "Event Videography",
            "Product Videos",
            "Ad Shoots",
            "YouTube Content",
            "Social Media Videos",
          ].map((item, i) => (
                            <Link to="/apply" >
            <div key={i} className="p-6 border rounded-xl shadow">
              <h3 className="text-xl font-semibold">{item}</h3>
            </div>
            </Link>
          ))}
        </div>
      </section>

   

      {/* FREELANCER */}
      <section className="py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Are You a Videographer?
        </h2>

        <p className="text-gray-600 mb-6">
          Join our network and work on professional video shoots.
        </p>

        <Link
          to="/apply"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Apply as Videographer
        </Link>
      </section>

   
    </div>
  );
}

export default VideoShoot;