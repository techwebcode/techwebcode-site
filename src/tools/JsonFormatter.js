// src/tools/JsonFormatter.tsx
import React, { useState } from "react";
import ToolCard from "../components/ToolCard";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch {
      setOutput("Invalid JSON ❌");
    }
  };

  return (
    <ToolCard title="JSON Formatter">
      <textarea
        className="w-full p-2 border rounded mb-2"
        rows={6}
        placeholder="Paste JSON here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={formatJson}
      >
        Format
      </button>
      <pre className="mt-4 bg-gray-100 p-3 rounded text-sm whitespace-pre-wrap">
        {output}
      </pre>
    </ToolCard>
  );
}
