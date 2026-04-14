import React from "react";
import { Link } from "react-router-dom";

function PhotoShoot() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-pink-600 text-white py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Photo Shoot Services 
        </h1>
        <p className="max-w-2xl mx-auto">
          Capture stunning visuals with our professional photography services
          for brands, events, and individuals.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">What We Offer</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Product Photography",
            "Event Photography",
            "Fashion Shoot",
            "Portrait Photography",
            "E-commerce Photos",
            "Brand Shoots",
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
          Are You a Photographer?
        </h2>

        <p className="text-gray-600 mb-6">
          Join us and work on exciting photo shoot projects.
        </p>

        <Link
          to="/apply"
          className="bg-pink-600 text-white px-6 py-3 rounded-lg"
        >
          Apply as Photographer
        </Link>
      </section>

   
    </div>
  );
}

export default PhotoShoot;
