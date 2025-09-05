import { loader } from "@monaco-editor/react";

// Tell Monaco where to load from
loader.config({
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.50.0/min/vs",
  },
});

export default loader;
