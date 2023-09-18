"use client";
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenuItem, NavbarMenu} from "@nextui-org/react";
import { Container } from "@/styles/07-objects/objects";


export default function NavbarCUI() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    
  ];

  return (
    <div className="p-5 absolute w-full bg-transparent">
      <Container className="flex flex-row justify-between">
          <div>
            Logo
          </div>
          <div>
            Burguer
          </div>
      </Container>
    </div>
  )
}

