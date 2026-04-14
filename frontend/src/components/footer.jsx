import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-10">

            <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

                {/* About */}
                <div>
                    <h2 className="text-xl font-bold">My<span className="text-red-400">App</span></h2>

                    <p className="text-gray-400">
                        We connect talented freelancers with real work opportunities in
                        video editing, design, SEO, ads, photography and more.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

                    <ul className="space-y-2 text-gray-400">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/about" className="hover:text-white">About</Link></li>
                        <li><Link to="/apply" className="hover:text-white">Apply</Link></li>
                        <li><Link to="/video"className="hover:text-white">Video Editing</Link></li>
                        <li><Link to="/graphics"className="hover:text-white">Graphic Design</Link></li>
                        <li><Link to="/seo"className="hover:text-white">SEO</Link></li>
                        <li><Link to="/meta"className="hover:text-white">Meta Ads</Link></li>
                        <li><Link to="/vshoot"className="hover:text-white">Video Shoot</Link></li>
                        <li><Link to="/pshoot"className="hover:text-white">Photo Shoot</Link></li>
                    
                </ul>
            </div>

            {/* Services */}
            <div>
                <h3 className="text-xl font-semibold mb-4">Services</h3>

                <ul className="space-y-2 text-gray-400">
                    <li>Video Editing</li>
                    <li>Graphic Design</li>
                    <li>SEO Services</li>
                    <li>Meta Ads</li>
                    <li>Photo & Video Shoot</li>
                </ul>
            </div>
        </div>

      {/* Bottom Bar */ }
    <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()}. All rights reserved.
    </div>
      
    </footer >
  );
}

export default Footer;