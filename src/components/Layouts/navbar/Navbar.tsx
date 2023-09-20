"use client";
import React, { useState } from "react";
import Logo from "../../Elements/navbar/Logo";
import SearchInput from "../../Elements/navbar/SearchInput";
import HamburgerButton from "../../Elements/navbar/HamburgerMenu";
import MobileMenu from "../../Fragments/navbar/MobileMenu";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Logo />
        </div>

        <div className="flex justify-center items-center">
          <SearchInput />
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
