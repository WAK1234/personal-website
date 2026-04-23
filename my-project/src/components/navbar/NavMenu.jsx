import React from 'react';
import { NavLink } from 'react-router-dom';

const navitems = [
    {name: "Home", path: "/"},
    {name: "About", path: "/about"},
    {name: "Books", path: "/books"},
    {name: "Course", path: "/course"}
];
export default function NavMenu() {
    return(
        <nav role='navigation' className="hidden lg:flex items-center gap-5">
            <ul className="flex items-center gap-8">
                {navitems.map((item, index) => {
                    return (
                      <li key={index}>
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            `uppercase text-[14px] font-bold ${
                              isActive ? "text-blue-500" : "text-black"
                            }`
                          }
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    );
                })}
            </ul>
        </nav>
    )
}