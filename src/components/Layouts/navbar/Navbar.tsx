"use client";
import React, { useState } from "react";
import Logo from "@/components/Elements/navbar/Logo";
import SearchInput from "@/components/Elements/navbar/SearchInput";
import HamburgerButton from "@/components/Elements/navbar/HamburgerMenu";
import MobileMenu from "@/components/Fragments/navbar/MobileMenu";
import Dropdown from "../Dropdown/Dropdown";
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 border border-none rounded-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Logo />
        </div>

        <div className="flex justify-center items-center">
          <SearchInput />
        </div>

        <div className="flex justify-center items-center gap-x-2 xs:hidden">
          <Dropdown />
        </div>

        {/* hamburger menu */}
        <HamburgerButton onClick={toggleMenu} isOpen={isMenuOpen} />

        {/* Mobile menu */}
        <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
