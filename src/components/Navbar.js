import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">TechWebCode</div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <a href="#json-formatter" className="hover:underline">
              JSON Formatter
            </a>
          </li>
          <li>
            <a href="#url-encoder" className="hover:underline">
              URL Encoder
            </a>
          </li>
          <li>
            <a href="#url-decoder" className="hover:underline">
              URL Decoder
            </a>
          </li>
          <li>
            <a href="#more" className="hover:underline">
              More Tools
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
