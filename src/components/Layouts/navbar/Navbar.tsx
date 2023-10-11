import Logo from "@/components/Elements/navbar/Logo";
import SearchInput from "@/components/Elements/navbar/SearchInput";
import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
const Navbar: React.FC = () => {
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

      </div>
    </nav>
  );
};

export default Navbar;
