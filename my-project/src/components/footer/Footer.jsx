import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../assets/b7ff3eeb04b039629353d7f15e4a9ea8.jpg";
import Button from "../ui/Button";

export default function Footer() {
  return (
    <footer className="w-full bg-black px-4 sm:px-8 md:px-16 lg:px-24 py-16">
      {/* 🔥 MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* 🔥 LEFT SIDE (3 ITEMS) */}
        <div className="grid grid-cols-3 gap-4">
          {/* LOGO */}
          <div>
            <h1 className="text-white text-5xl md:text-9xl italic font-bold">
              n<span>D</span>
            </h1>
          </div>

          {/* LEARN */}
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-[16px] uppercase font-semibold">
              Learn
            </h2>

            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Books", path: "/books" },
              { name: "Course", path: "/course" },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="text-white text-[14px]"
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* CONNECT */}
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-[16px] uppercase font-semibold">
              Connect
            </h2>

            {["Instagram", "Youtube", "Threads", "Linkedin", "Tiktok"].map(
              (social) => (
                <a key={social} href="#" className="text-white text-[14px]">
                  {social}
                </a>
              ),
            )}
          </div>
        </div>

        {/* 🔥 RIGHT SIDE (CARD) */}
        <div className="border border-white p-4 flex flex-col sm:flex-row items-start gap-4">
          <img
            src={img}
            alt="training"
            className="w-full md:w-1/2 object-cover"
          />

          <div className="flex flex-col justify-center items-center text-center gap-3">
            <h3 className="text-white text-[19px] text-center font-semibold leading-[25px]">
              FREE BUSINESS <br /> EXPANSION TRAINING
            </h3>

            <p className="text-gray-300 text-[14px] w-full md:max-w-[200px] ">
              Why I bet on myself and how I expanded my business to nine-figures
            </p>

            <Button variant="primary">WATCH YOUR FREE TRAINING</Button>
          </div>
        </div>
      </div>
      <hr className="my-10 w-full h-[1px] bg-white" />
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl gap-7 md:gap-5 text-white mx-auto">
        <div className="flex flex-row items-center gap-4 text-[13px] leading-[27px]">
          <h1>Privacy Policy</h1>
          <p>Terms & condition</p>
        </div>
        <div className="flex flex-row items-center gap-4 text-[13px] leading-[27px]">
          <h1>2026 Natalie dawson</h1>
          <p>
            website by:
            <span className="border-b border-b-white">Wakuma Hailu</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
