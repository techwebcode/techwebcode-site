import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // lightweight icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <img
          src="assets/images/logo.png"  // /public/logo.png
          alt="TechWebCode Logo"
          className="h-10 w-auto"
        />
        <span className="text-2xl font-bold">TechWebCode</span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <Link to="/crypto-toolkit" className="hover:text-gray-200 transition">
              Crypto Toolkit
            </Link>
          </li>
          <li>
            <Link to="/json-formatter" className="hover:text-gray-200 transition">
              JSON Formatter
            </Link>
          </li>
          <li>
            <Link to="/url-encoder" className="hover:text-gray-200 transition">
              URL Encoder/Decoder
            </Link>
          </li>
          <li>
            <Link to="/base64-converter" className="hover:text-gray-200 transition">
              Base64 Converter
            </Link>
          </li>
          <li>
            <Link to="/code-diff" className="hover:text-gray-200 transition">
              Code Diff Checker
            </Link>
          </li>
          <li>
            <Link to="/sha1-tool" className="hover:text-gray-200 transition">
              SHA-1 Encrypt
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="hover:text-gray-200 transition">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200 transition">
              About
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-6 py-4 space-y-3 font-medium">
          <Link
            to="/crypto-toolkit"
            onClick={toggleMenu}
            className="block hover:text-gray-200"
          >
            Crypto Toolkit
          </Link>
          <Link
            to="/json-formatter"
            onClick={toggleMenu}
            className="block hover:text-gray-200"
          >
            JSON Formatter
          </Link>
          <Link
            to="/url-encoder"
            onClick={toggleMenu}
            className="block hover:text-gray-200"
          >
            URL Encoder/Decoder
          </Link>
          <Link
            to="/base64-converter"
            onClick={toggleMenu}
            className="block hover:text-gray-200"
          >
            Base64 Converter
          </Link>
          <Link
            to="/code-diff"
            onClick={toggleMenu}
            className="block hover:text-gray-200"
          >
            Code Diff Checker
          </Link>
          <Link
            to="/sha1-tool"
            onClick={toggleMenu}
            className="block hover:text-gray-200"
          >
            SHA-1 Encrypt
          </Link>
          <Link
            to="/privacy-policy"
            onClick={toggleMenu}
            className="block hover:text-gray-200"
          >
            Privacy Policy
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="block hover:text-gray-200"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
