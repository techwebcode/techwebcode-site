// src/App.tsx
import React from "react";
import Navbar from "./components/Navbar";
import JsonFormatter from "./tools/JsonFormatter";
import UrlEncoder from "./tools/UrlEncoder";
import Base64Tool from "./tools/Base64Tool";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <JsonFormatter />
        <UrlEncoder />
        <Base64Tool />
      </div>
    </div>
  );
}

export default App;
