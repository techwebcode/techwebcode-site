import React, { useState } from "react";

async function hashString(algorithm, str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hash = await crypto.subtle.digest(algorithm, data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function CryptoToolkit() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("detect");
  const [copied, setCopied] = useState(false);

  const detect = () => {
    let text = input.trim();
    let info = [];

    const base64Regex = /^[A-Za-z0-9+/=]+$/;
    if (base64Regex.test(text) && text.length % 4 === 0) {
      try {
        info.push(`Encoding: Base64 → Decoded: ${atob(text)}`);
      } catch {
        info.push("Encoding: Base64 (Invalid)");
      }
    }

    const hexRegex = /^[a-fA-F0-9]+$/;
    if (hexRegex.test(text)) {
      info.push("Encoding: Hexadecimal");
      if (text.length === 32) info.push("Possible Hash: MD5");
      if (text.length === 40) info.push("Possible Hash: SHA-1");
      if (text.length === 64) info.push("Possible Hash: SHA-256");
      if (text.length === 128) info.push("Possible Hash: SHA-512");
    }

    try {
      const decoded = decodeURIComponent(text);
      if (decoded !== text) {
        info.push(`Encoding: URL Encoded → Decoded: ${decoded}`);
      }
    } catch {}

    if (info.length === 0) {
      info.push("Plain Text or Unknown");
    }

    setOutput(info.join("\n"));
  };

  const runTool = async () => {
    switch (mode) {
      case "md5":
        setOutput("MD5 not supported by SubtleCrypto. Use SHA family.");
        break;
      case "sha1":
        setOutput(await hashString("SHA-1", input));
        break;
      case "sha256":
        setOutput(await hashString("SHA-256", input));
        break;
      case "sha512":
        setOutput(await hashString("SHA-512", input));
        break;
      case "base64-encode":
        setOutput(btoa(input));
        break;
      case "base64-decode":
        try {
          setOutput(atob(input));
        } catch {
          setOutput("Invalid Base64");
        }
        break;
      case "hex-encode":
        setOutput(
          Array.from(new TextEncoder().encode(input))
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("")
        );
        break;
      case "hex-decode":
        try {
          setOutput(
            new TextDecoder().decode(
              new Uint8Array(input.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)))
            )
          );
        } catch {
          setOutput("Invalid Hex");
        }
        break;
      case "url-encode":
        setOutput(encodeURIComponent(input));
        break;
      case "url-decode":
        try {
          setOutput(decodeURIComponent(input));
        } catch {
          setOutput("Invalid URL Encoding");
        }
        break;
      case "detect":
        detect();
        break;
      default:
        setOutput("Select a mode first.");
    }
    setCopied(false); // reset copy state after new result
  };

  const copyToClipboard = async () => {
    if (output) {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🔐 Crypto Toolkit</h1>

      <textarea
        className="w-full p-3 border rounded-md mb-3 font-mono"
        rows="4"
        placeholder="Enter text, hash, or encoded string..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="mb-3 flex flex-wrap gap-2">
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="detect">🔍 Detect Encoding / Hash</option>
          <option value="md5">🔑 MD5 Hash</option>
          <option value="sha1">🔑 SHA-1 Hash</option>
          <option value="sha256">🔑 SHA-256 Hash</option>
          <option value="sha512">🔑 SHA-512 Hash</option>
          <option value="base64-encode">📦 Base64 Encode</option>
          <option value="base64-decode">📦 Base64 Decode</option>
          <option value="hex-encode">🔢 Hex Encode</option>
          <option value="hex-decode">🔢 Hex Decode</option>
          <option value="url-encode">🌐 URL Encode</option>
          <option value="url-decode">🌐 URL Decode</option>
        </select>

        <button
          onClick={runTool}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Run
        </button>
      </div>

      {output && (
        <div className="mt-4 p-3 bg-gray-100 border rounded-md relative">
          <pre className="whitespace-pre-wrap font-mono">{output}</pre>
          <button
            onClick={copyToClipboard}
            className="absolute top-2 right-2 px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            {copied ? "✅ Copied" : "📋 Copy"}
          </button>
        </div>
      )}
    </div>
  );
}
