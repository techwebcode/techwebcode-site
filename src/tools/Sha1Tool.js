import React, { useState } from "react";

export default function Sha1Tool() {
  const [input, setInput] = useState("");
  const [hash, setHash] = useState("");

  // Function to calculate SHA-1
  const sha1 = async (message) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-1", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
  };

  const handleEncrypt = async () => {
    if (!input.trim()) {
      setHash("⚠️ Please enter text first!");
      return;
    }
    const result = await sha1(input);
    setHash(result);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">SHA-1 Hash Generator</h1>

      <textarea
        className="w-full p-3 border rounded-md mb-3 font-mono"
        rows="4"
        placeholder="Enter text to hash..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleEncrypt}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Generate SHA-1
      </button>

      {hash && (
        <div className="mt-4 p-3 bg-gray-100 border rounded-md font-mono break-all">
          {hash}
        </div>
      )}
    </div>
  );
}
