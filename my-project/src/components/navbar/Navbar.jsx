import React from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar({ isScrolled }) {
  return (
    <header
      role="banner"
      className={`
        fixed top-0 left-0 w-full z-50
        flex items-center justify-between
        px-4 sm:px-8 md:px-16 lg:px-24
        py-5 backdrop-blur-lg
        transition-all duration-300 
        ${isScrolled ? "bg-white text-black shadow-md" : "bg-white"}
      `}
    >
      <Logo isScrolled={isScrolled} />
      <NavMenu isScrolled={isScrolled} />
      <MobileMenu isScrolled={isScrolled} />
    </header>
  );
}
