// src/components/ToolCard.js
import React from "react";
import PropTypes from "prop-types";

export default function ToolCard({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}

ToolCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};
