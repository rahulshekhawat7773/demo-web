import React, { useState } from "react";
import axios from "axios";

function Apply() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    skills: "",
    experience: "",
    portfolio: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "code-mxhq.vercel.app/api/v1/apply",
        form
      );

      if (res.status === 200 || res.status === 201) {
        setMessage("Application submitted successfully 🚀");

        setForm({
          name: "",
          email: "",
          contact: "",
          skills: "",
          experience: "",
          portfolio: "",
        });
      }
    } catch (error) {
      console.log(error.response?.data);
      setMessage(error.response?.data?.message || "Server error ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-xl">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Apply for Freelance 🚀
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          {/* Contact */}
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          {/* Skills */}
          <input
            type="text"
            name="skills"
            value={form.skills}
            onChange={handleChange}
            placeholder="Your Skills (e.g. React, Node)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Experience */}
          <input
            type="text"
            name="experience"
            value={form.experience}
            onChange={handleChange}
            placeholder="Experience (e.g. 2 years)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Portfolio */}
          <input
            type="text"
            name="portfolio"
            value={form.portfolio}
            onChange={handleChange}
            placeholder="Portfolio Link"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Submit Application
          </button>

        </form>

        {/* Message */}
        {message && (
          <p className="text-center mt-4 text-green-600 font-medium">
            {message}
          </p>
        )}

      </div>
    </div>
  );
}

export default Apply;