// src/tools/Base64Tool.tsx
import React, { useState } from "react";
import ToolCard from "../components/ToolCard";

export default function Base64Tool() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  return (
    <ToolCard title="Base64 Encoder / Decoder">
      <textarea
        className="w-full p-2 border rounded mb-2"
        rows={4}
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex gap-2">
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded"
          onClick={() => setResult(btoa(text))}
        >
          Encode
        </button>
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded"
          onClick={() => setResult(atob(text))}
        >
          Decode
        </button>
      </div>
      <pre className="mt-4 bg-gray-100 p-3 rounded text-sm whitespace-pre-wrap">
        {result}
      </pre>
    </ToolCard>
  );
}
