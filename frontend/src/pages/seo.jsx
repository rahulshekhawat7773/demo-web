import React from "react";
import { Link } from "react-router-dom";

function SEO() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-green-600 text-white py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          SEO Services 
        </h1>
        <p className="max-w-2xl mx-auto">
          Boost your website ranking on Google and grow your organic traffic
          with our expert SEO services.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our SEO Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "On-Page SEO",
            "Off-Page SEO",
            "Keyword Research",
            "Technical SEO",
            "Link Building",
            "SEO Audit",
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
          Are You an SEO Expert?
        </h2>

        <p className="text-gray-600 mb-6">
          Join our team and work on exciting SEO projects.
        </p>

        <Link
          to="/apply"
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Apply for SEO Role
        </Link>
      </section>

  
    </div>
  );
}

export default SEO;