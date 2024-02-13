'use client'
import React, { useEffect, useRef, useState } from "react";
import { Col, Container } from '@citrica/objects';
import Link from "next/link";

export const navLinks = [
  {
    id: "hero-section",
    title: "Top",
  },
  {
    id: "our-products",
    title: "Productos",
  },
  {
    id: "parrilla",
    title: "Mi Parrilla",
  },
  {
    id: "delivery",
    title: "Jordi Delivery",
  },
  {
    id: "our-partners",
    title: "Socios",
  },
  {
    id: "carrusel",
    title: "Videos",
  },
  {
    id: "boutiques",
    title: "Boutiques",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("hero-section");
  const [toggle, setToggle] = useState(false);

  const closeSidebar = () => {
    setToggle(false);
  };

  // change nav color scrolling
  const [colorbg, setcolorbg] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 700) {
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

  // Function to handle clicks outside of the menu
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

  // Function to highlight active section based on scroll position
  const highlightActiveSection = () => {
    const sectionEls = document.querySelectorAll("section");
    let currentSection = "";

    sectionEls.forEach((sectionEl) => {
      if (
        sectionEl.offsetTop <= window.scrollY + 120 &&
        sectionEl.offsetTop + sectionEl.clientHeight >= window.scrollY + 120
      ) {
        currentSection = sectionEl.id;
      }
    });

    setActive(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", highlightActiveSection);

    return () => {
      window.removeEventListener("scroll", highlightActiveSection);
    };
  });

  return (
    <nav className={`btn w-screen fixed box-border z-30 ${colorbg ? "bg-[rgba(0,0,0,0.651)]" : "bg-[rgba(0,0,0,0.651)]"}`}>
      <Container>
        <Col cols={{ lg: 12, md: 6, sm: 4 }} className="h-16 flex justify-between items-center pt-3 pb-3">
          {/* Logo */}
          <div className="flex">
            <picture className={` flex  ${colorbg ? "flex" : "invisible"}`}>
              <img src='/img/jordi-prime-grill-logo.svg' alt="logo-nav" className="w-24" />
            </picture>
          </div>

          {/* Desktop Navigation */}
          <ul className="only-lg-flex list-none gap-14">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`flex text-[#D5B16C] cursor-pointer nav_link ${active === nav.id ? "nav_link_active" : "text-[#D5B16C]"}`}
                onClick={() => setActive(nav.id)}
              >
                <Link className=" pb-1 " href={`#${nav.id}`} prefetch={true}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          <div ref={menuRef} className="only-sm-md justify-end items-center p-5 flex-1">
            <picture>
              <img
                src={toggle ? '/img/icons/Menuclose.svg' : '/img/icons/Menu.svg'}
                alt="menu"
                className="w-[40px] h-[40px] object-contain"
                onClick={() => setToggle(!toggle)}
              />
            </picture>

            {/* Sidebar */}
            <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 bg-black-brand mx-4 my-2 min-w-[140px] rounded-xl z-50 `}>
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`subtitle navbar-text-color text-white font-medium cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => {
                      setActive(nav.id);
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

        </Col>
      </Container>
    </nav>
  );
};

export default Navbar;
