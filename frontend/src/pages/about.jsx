import React from "react";

function About() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-gray-900 text-white py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Us
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We connect talented freelancers with real-world projects and
          opportunities to grow their careers.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed">
          We are a growing platform focused on connecting skilled freelancers
          with clients looking for quality work in areas like video editing,
          graphic design, SEO, and digital marketing. Our mission is to help
          freelancers find consistent work and build long-term careers.
        </p>
      </section>

      {/* MISSION */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-gray-600">
          Our mission is to create a strong freelance ecosystem where talent
          meets opportunity. We aim to empower freelancers by providing them
          with consistent work, fair pay, and growth opportunities.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Want to Work With Us?
        </h2>
        <p className="mb-6">
          Join our freelance network and start getting projects today.
        </p>
        <a
          href="/apply"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
        >
          Apply Now
        </a>
      </section>
    </div>
  );
}

export default About;