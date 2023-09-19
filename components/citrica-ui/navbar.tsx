"use client";
import { useState } from "react";

const menuItems = [
	{
		name: 'Quienes somos',
		url: '#about-us'
	},
	{
		name: 'Nuestra Historia',
		url: '#history-section'
	},
	{
		name: 'Visión y Misión',
		url: '#mision-vision'
	},
	{
		name: 'Nuestras Empresas',
		url: '#our-companies'
	},
	{
		name: 'Nuestras Marcas',
		url: '#our-brands'
	},
	{
		name: 'Nuestros Socios Estrategicos',
		url: '#our-partners'
	},
	{
		name: 'Contactanos',
		url: '#contact-section'
	},
	{
		name: 'Plataformas',
		url: '#platforms'
	}

];
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

  return (
    <nav className="w-full bg-transparent fixed flex justify-between items-center navbar">
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
      <div className="flex flex-1 justify-end items-center mr-5">
        <img
          src={toggle ? '/img/button-icon.svg' : '/img/Menu.svg'}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {/* Sidebar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className=" list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` text-red-900 font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

