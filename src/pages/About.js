import React from "react";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Tech Web Code</h1>
      <p className="mb-4">
        Welcome to <strong>Tech Web Code</strong> – a free online platform providing simple and useful developer tools
        like JSON Formatter, URL Encoder/Decoder, Base64 Converter, and more.
      </p>

      <p className="mb-4">
        Our goal is to make everyday coding tasks easier by offering tools that run directly in your browser.
        We believe in <strong>privacy-first utilities</strong>, so none of your input data is stored on our servers.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Why Choose Us?</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>⚡ Fast and secure – works in your browser</li>
        <li>🛡️ Privacy-friendly – no data storage</li>
        <li>📱 Mobile-friendly – works on any device</li>
        <li>💡 Free tools for developers and learners</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Our Mission</h2>
      <p className="mb-4">
        To empower developers, students, and tech enthusiasts with free, reliable, and privacy-focused coding tools.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p>
        Got suggestions or feedback? We’d love to hear from you!
        <br />
        📧 <strong>techwebcode@gmail.com</strong>
      </p>
    </div>
  );
}
