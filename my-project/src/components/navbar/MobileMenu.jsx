import React from "react";
import useMobileMenu from "../../hooks/useMobileMenu";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu() {
  const { menuOpen, navToggle } = useMobileMenu();

  return (
    <div className="lg:hidden">
      {/* TOGGLE BUTTON */}
      <button onClick={navToggle} className="cursor-pointer fixed top-2 right-2 z-[100]">
        {menuOpen ? <IoMdClose size={26} /> : <IoMdMenu size={26} />}
      </button>

      {/* MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-white text-black flex flex-col items-center justify-center gap-4 p-6"
            initial={{ y: "-10%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-10%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/books">Books</a>
            <a href="/course">Course</a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
