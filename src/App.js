import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// Import your tool pages
import JsonFormatter from "./tools/JsonFormatter";
import UrlEncoder from "./tools/UrlEncoder";
import Base64Converter from "./tools/Base64Tool";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CodeDiff from "./tools/CodeDiffView";
import Sha1Tool from "./tools/Sha1Tool";
import CryptoToolkit from "./tools/CryptoToolkit";

const router = [
  {
    path: "/json-formatter",
    element: <JsonFormatter />
  },
  {
    path: "/url-encoder",
    element: <UrlEncoder />
  },
  {
    path: "/base64-converter",
    element: <Base64Converter />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />
  },
  {
    path: "/",
    element: <JsonFormatter />
  },
  {
    path: "/code-diff",
    element: <CodeDiff />
  },
  {
    path: "/sha1-tool",
    element: <Sha1Tool />
  },
  {
    path: "/crypto-toolkit",
    element: <CryptoToolkit />
  }
];

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<CryptoToolkit />} /> {/* Default page */}
          <Route path="/json-formatter" element={<JsonFormatter />} />
          <Route path="/code-diff" element={<CodeDiff />} />
          <Route path="/url-encoder" element={<UrlEncoder />} />
          <Route path="/base64-converter" element={<Base64Converter />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<About />} />
          <Route path="/sha1-tool" element={<Sha1Tool />} />
          <Route path="/crypto-toolkit" element={<CryptoToolkit />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}


export default App;
