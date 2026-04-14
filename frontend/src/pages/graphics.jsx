import React from "react";
import { Link } from "react-router-dom";

function GraphicDesign() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Graphic Design Services
        </h1>
        <p className="max-w-2xl mx-auto text-gray-100">
          Creative and professional graphic design solutions for brands,
          businesses, and creators. Bring your ideas to life with stunning visuals.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">What We Offer</h2>

        <div className="grid md:grid-cols-3 gap-8">
        
          {[
              "Logo Design",
              "Social Media Posts",
              "Banner & Poster Design",
              "Brand Identity Design",
              "YouTube Thumbnails",
              "UI/UX Design",
            ].map((item, index) => (
        
             <Link to="/apply" >

               <div
                key={index}
                className="p-6 border rounded-xl shadow hover:shadow-lg transition"
                >
              <h3 className="text-xl font-semibold">{item}</h3>
            
            </div>
                    </Link> 
          ))}
        </div>
      </section>

  

      {/* FOR FREELANCERS */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Are You a Graphic Designer?
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Join our freelance network and work on creative projects.
          Showcase your talent and grow your career with us.
        </p>

        <Link
          to="/apply"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg"
        >
          Apply as Designer
        </Link>
      </section>

   
    </div>
  );
}

export default GraphicDesign;
