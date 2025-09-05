import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        At <strong>Tech Web Code</strong> (techwebcode.in), we respect your privacy and are committed to protecting it.
        This Privacy Policy explains how we handle your information when you use our tools and website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p className="mb-4">
        Our tools (such as JSON Formatter, URL Encoder/Decoder, etc.) run entirely in your browser.
        We do not store, track, or share any of your input data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cookies & Ads</h2>
      <p className="mb-4">
        We use third-party advertising (Google AdSense) which may use cookies to serve ads based on your interests.
        Google’s use of the <strong>DART cookie</strong> allows it to serve ads to you based on your visit to our site
        and other websites. You can opt out by visiting{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Google Ads Settings
        </a>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Links</h2>
      <p className="mb-4">
        Our website may contain links to third-party websites. We are not responsible for their privacy practices.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Your Consent</h2>
      <p className="mb-4">
        By using our site, you consent to this Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, you can contact us at:
        <br />
        📧 <strong>techwebcode@gmail.com</strong>
      </p>
    </div>
  );
}
