import React from "react";

export default function Grid({ children }) {
  return (
    <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-8">{children}</div>
  );
}
