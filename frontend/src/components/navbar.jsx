import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-blue-900 text-white px-6 py-4">
            <div className="flex justify-between items-center">

                {/* Logo */}
                <h2 className="text-xl font-bold">My<span className="text-red-400">App</span></h2>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6">
                    <li className="hover:text-red-400"><Link to="/">Home</Link></li>
                    <li className="hover:text-red-400"><Link to="/about">About</Link></li>
                    <li className="hover:text-red-400"><Link to="/video">Video Editing</Link></li>
                    <li className="hover:text-red-400"><Link to="/graphics">Graphic Design</Link></li>
                    <li className="hover:text-red-400"><Link to="/seo">SEO</Link></li>
                    <li className="hover:text-red-400"><Link to="/meta">Meta Ads</Link></li>
                    <li className="hover:text-red-400"><Link to="/vshoot">Video Shoot</Link></li>
                    <li className="hover:text-red-400"><Link to="/pshoot">Photo Shoot</Link></li>
                    <li className="hover:text-red-400"><Link to="/register">SignUp</Link></li>
                </ul>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <ul className="flex flex-col md:hidden mt-4 gap-3">
                    <li className="hover:text-red-400"><Link to="/">Home</Link></li>
                    <li className="hover:text-red-400"><Link to="/about">About</Link></li>
                    <li className="hover:text-red-400"><Link to="/video">Video Editing</Link></li>
                    <li className="hover:text-red-400"><Link to="/graphics">Graphic Design</Link></li>
                    <li className="hover:text-red-400"><Link to="/seo">SEO</Link></li>
                    <li className="hover:text-red-400"><Link to="/meta">Meta Ads</Link></li>
                    <li className="hover:text-red-400"><Link to="/vshoot">Video Shoot</Link></li>
                    <li className="hover:text-red-400"><Link to="/pshoot">Photo Shoot</Link></li>
                    <li className="hover:text-red-400"><Link to="/register">SignUp</Link></li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;