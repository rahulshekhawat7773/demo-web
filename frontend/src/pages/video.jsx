import React from "react";
import { Link } from "react-router-dom";

function VideoEditing() {
  return (
    <div id="video">
      {/* HERO */}
      <section className="bg-black text-white py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Video Editing Services
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We provide high-quality video editing services for brands, creators,
          and businesses. Join us as a video editor or get your videos edited.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">What We Offer</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "YouTube Video Editing",
            "Reels & Shorts Editing",
            "Corporate Videos",
            "Ads & Promotions",
            "Color Grading",
            "Motion Graphics",
          ].map((item, index) => (
                         <Link to="/apply" >
            
            <div
              key={index}
              className="p-6 border rounded-xl shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
            </div>
            </Link>
          ))}
        </div>
      </section>


      {/* FOR FREELANCERS */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Are You a Video Editor?
        </h2>

        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Join our freelance network and work on exciting video projects.
          Grow your skills and earn with us.
        </p>

        <Link
          to="/apply"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Apply as Video Editor
        </Link>
      </section>

    </div>
  );
}

export default VideoEditing;