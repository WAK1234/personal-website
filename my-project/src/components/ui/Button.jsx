import React from "react";

export default function Button({ variant = "primary", children }) {
  const baseStyles = "w-fit uppercase px-8 py-2 rounded-full border transition-all text-[14px] duration-150";

  const variantStyles =
    variant === "primary"
      ? "bg-white text-black border-transparent hover:bg-transparent hover:border-white hover:text-white"
      : "bg-black text-white border-transparent hover:bg-transparent hover:border-black hover:text-black";

  return (
    <button className={`${baseStyles} ${variantStyles}`}>{children}</button>
  );
}
