import React from "react";
import Home from "./pages/home/Home";
import Course from "./pages/course/Course";
import Books from "./pages/books/Books";
import About from "./pages/about/About";
import Mainlayout from "./layout/Mainlayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Mainlayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/course" element={<Course />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
