import React, { useState } from "react";
import "../monacoSetup"; 
import { DiffEditor } from "@monaco-editor/react";

export default function CodeDiff() {
  // Declare base code states
  const [oldCode, setOldCode] = useState(`function add(a, b) {
  return a + b;
}`);
  const [newCode, setNewCode] = useState(`function add(a, b) {
  return a - b; // Changed from + to -
}`);

  // States for compare
  const [compareOld, setCompareOld] = useState(oldCode);
  const [compareNew, setCompareNew] = useState(newCode);

  // UI state
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState("vs-light");

  const handleCompare = () => {
    setCompareOld(oldCode);
    setCompareNew(newCode);
  };

  return (
    <div className="p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 gap-4">
        <h1 className="text-lg font-semibold">Code Diff Checker</h1>

        <div className="flex gap-3">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border px-3 py-1 rounded-md text-sm"
          >
            <option value="javascript">JavaScript</option>
            <option value="json">JSON</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="csharp">C#</option>
            <option value="cpp">C++</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="sql">SQL</option>
            <option value="markdown">Markdown</option>
            <option value="yaml">YAML</option>
          </select>

          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="border px-3 py-1 rounded-md text-sm"
          >
            <option value="vs">Light</option>
            <option value="vs-dark">Dark</option>
            <option value="hc-black">High Contrast</option>
          </select>
        </div>
      </div>

      {/* Input Textareas */}
      <div className="flex gap-4 mb-4">
        <textarea
          value={oldCode}
          onChange={(e) => setOldCode(e.target.value)}
          placeholder="Paste OLD code here..."
          className="flex-1 h-[200px] p-3 border rounded-md font-mono text-sm"
        />
        <textarea
          value={newCode}
          onChange={(e) => setNewCode(e.target.value)}
          placeholder="Paste NEW code here..."
          className="flex-1 h-[200px] p-3 border rounded-md font-mono text-sm"
        />
      </div>

      {/* Compare Button */}
      <button
        onClick={handleCompare}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Compare
      </button>

      {/* Monaco Diff Viewer */}
      <div className="h-[500px] border rounded-md overflow-hidden flex items-center justify-center">
        {(!compareOld?.trim() || !compareNew?.trim()) ? (
          <div className="text-gray-500 text-sm">
            🚫 Please enter both OLD and NEW code to compare.
          </div>
        ) : (
          <DiffEditor
            original={compareOld}
            modified={compareNew}
            language={language}
            theme={theme}
          />
        )}
      </div>
    </div>
  );
}
