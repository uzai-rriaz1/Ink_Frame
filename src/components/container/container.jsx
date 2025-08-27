import React from "react";

function Container({ children }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white shadow-sm rounded-xl">
      {children}
    </div>
  );
}

export default Container;
