"use client";
import { useEffect, useRef, useState } from "react";
import {Container, Col} from '@citrica/objects'

export const navLinks = [
  {
    id: "about-us",
    title: "Quienes somos",
  },
  {
    id: "history-section",
    title: "Nuestra Historia",
  },
  {
    id: "mision-vision",
    title: "Visión y Misión",
  },
  {
    id: "our-companies",
    title: "Nuestras Empresas",
  },
	{
    id: "our-brands",
    title: "Nuestras Marcas",
  },
	{
    id: "our-partners",
    title: "Nuestros Socios Estrategicos",
  },
	{
    id: "contact-section",
    title: "Contactanos",
  },
	{
    id: "platforms",
    title: "Plataformas",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("about-us");
  const [toggle, setToggle] = useState(false);
  
  const closeSidebar = () => {
    setToggle(false); 
  };
  


  return (
    <nav className="w-full  p-3 bg-transparent fixed flex items-center">
      {/* Logo */}
      {/* <h1 className="text-3xl text-black">Logo</h1> */}
      
      {/* Desktop Navigation */}
      {/* <ul className="list-none sm:flex justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={` hidden font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul> */}

      {/* Mobile Navigation */}
      <Container>
        <div className="flex flex-1 justify-end items-center">
          <img
            src={toggle ? '/img/Menuclose.svg' : '/img/Menu.svg'}
            alt="menu"
            className="w-[40px] h-[40px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          {/* Sidebar */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-5 bg-black mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className=" list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={` text-white font-poppins font-medium cursor-pointer hover:text-blue-800 text-[16px] ${
                    active === nav.title ? "text-blue-300" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => {
                    setActive(nav.title);
                    closeSidebar(); 
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

