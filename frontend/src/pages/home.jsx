import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Join Our Freelance Network 🚀
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          We connect talented freelancers with exciting projects in video editing,
          graphic design, marketing, and more.
        </p>

        <Link
          to="/apply"
          className="bg-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
        >
          Apply as Freelancer
        </Link>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">What We Offer</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Video Editing",
            "Graphic Design",
            "SEO & Marketing",
            "Meta Ads",
            "Video & Photo Shoot",
            "More Freelance Work",
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

      {/* WHY CHOOSE US */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Work With Us?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-2">Regular Projects</h3>
            <p className="text-gray-600">
              Get consistent freelance opportunities.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Flexible Work</h3>
            <p className="text-gray-600">
              Work from anywhere at your own schedule.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Grow Your Skills</h3>
            <p className="text-gray-600">
              Work on real projects and build your portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Freelance Journey?
        </h2>

        <Link
          to="/apply"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
        >
          Apply Now
        </Link>
      </section>
    </div>
  );
}

export default Home;