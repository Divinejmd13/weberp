// Drawer.js
import React from "react";

const Drawer = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 bg-white z-50 ${isOpen ? "block" : "hidden"}`}>
      {/* Drawer content */}
      <div className="p-4">
        {/* Add your icons or any other content */}
        <p>Drawer Content Here</p>
        <button onClick={onClose}>Close Drawer</button>
      </div>
    </div>
  );
};

export default Drawer;
