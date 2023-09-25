"use client";
import { useEffect, useRef, useState } from "react";
import { Container, Col } from '@citrica/objects'
import Link from "next/link";

export const navLinks = [
  {
    id: "about-us",
    title: "Quienes somos",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("about-us");
  const [toggle, setToggle] = useState(false);

  const closeSidebar = () => {
    setToggle(false);
  };

  // change nav color scrolling
  const [colorbg, setcolorbg] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setcolorbg(true)
    } else {
      setcolorbg(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);

    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  // function close with outside of menu
  const menuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };



  });

  return (
    <nav className={`w-full p-3 fixed flex items-center z-30 ${colorbg ? "bg-[rgba(0,0,0,0.651)] z-40 " : "bg-transparent"}
      `}>

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
      <Container >
        <div ref={menuRef} className="flex flex-1 justify-end items-center">
          <picture>
            <img
              src={toggle ? '/img/icons/Menuclose.svg' : '/img/icons/Menu.svg'}
              alt="menu"
              className="w-[40px] h-[40px] object-contain"
              onClick={() => setToggle(!toggle)}
            />
          </picture>

          {/* Sidebar */}
          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-black-gradient absolute top-20 right-5 bg-black-brand mx-4 my-2 min-w-[140px] rounded-xl z-50 `}
          >
            <ul className="  list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`  navbar-text-color text-white font-medium cursor-pointer text-[16px]
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => {
                    setActive(nav.title);
                    closeSidebar();
                  }}
                >
                  <Link href={`#${nav.id}`} prefetch={true}>
                    {nav.title}
                  </Link>
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

