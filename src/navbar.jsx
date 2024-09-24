import React from 'react';
import { useState } from 'react';
import { FaChevronRight } from "react-icons/fa6";
// import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Using heroicons for the menu icons
import { CiMenuFries } from "react-icons/ci";
import { CgAddR } from "react-icons/cg";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-4 py-4 bg-white">
      <div className="flex items-center space-x-4">
        <img
          src="https://sr-website.shiprocket.in/wp-content/uploads/2023/01/shiprocket_logo.svg"
          alt="Shiprocket Logo"
          className=" ms-16 w-[200px]"
        />
      </div>

      {/* Hamburger icon for mobile screens */}
      <div className="block md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <CgAddR className="w-6 h-6 text-gray-800" />
          ) : (
            <CiMenuFries  className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-9">
        <li className="list-none text-[#666666] text-[16px]">Products</li>
        <li className="list-none text-[#666666] text-[16px]">Platform</li>
        <li className="list-none text-[#666666] text-[16px]">Pricing</li>
        <li className="list-none text-[#666666] text-[16px]">Partners</li>
        <li className="list-none text-[#666666] text-[16px]">Track Order</li>
        <li className="list-none text-[#666666] text-[16px]">Resources</li>
      </div>

      <div className="hidden md:flex space-x-4">
        <button className="text-[#0A0653] font-semibold text-[14px]">Log In</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Try for Free</button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        // <div className="absolute top-0 left-0 w-full h-screen bg-white z-10 flex flex-col items-start ms-10 justify-center md:hidden">
        //   <ul className="space-y-6 text-center">
        //     <div className="flex items-center justify-space-between">
        //     <li className="list-none text-[#666666] text-[16px]">Products</li>
        //     <FaChevronRight />
        //     </div>
        //     <hr/>
        //     <li className="list-none text-[#666666] text-[16px]">Platform</li>
        //     <hr/>
        //     <li className="list-none text-[#666666] text-[16px]">Pricing</li>
        //     <hr/>
        //     <li className="list-none text-[#666666] text-[16px]">Partners</li>
        //     <hr/>
        //     <li className="list-none text-[#666666] text-[16px]">Track Order</li>
        //     <hr/>
        //     <li className="list-none text-[#666666] text-[16px]">Resources</li>
        //     <hr/>
        //   </ul>
        //   <div className="flex justify-between gap-10 mt-6">
        //     <button className="text-[#0A0653] font-semibold text-[14px]">Log In</button>
        //     <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Try for Free</button>
        //   </div>
        // </div>
        <div className="absolute top-0 left-0 w-full h-screen bg-white z-10 flex flex-col items-start ms-10 justify-center md:hidden">
  <ul className="space-y-6 text-center">
    <li className="list-none text-[#666666] text-[16px] flex items-center">
      Products
      <FaChevronRight />
    </li>
    <hr className="border-t border-gray-300" />
    <li className="list-none text-[#666666] text-[16px]">Platform</li>
    <hr className="border-t border-gray-300" />
    <li className="list-none text-[#666666] text-[16px]">Pricing</li>
    <hr className="border-t border-gray-300" />
    <li className="list-none text-[#666666] text-[16px]">Partners</li>
    <hr className="border-t border-gray-300" />
    <li className="list-none text-[#666666] text-[16px]">Track Order</li>
    <hr className="border-t border-gray-300" />
    <li className="list-none text-[#666666] text-[16px]">Resources</li>
    <hr className="border-t border-gray-300" />
  </ul>
  <div className="flex justify-between gap-10 mt-6">
    <button className="text-[#0A0653] font-semibold text-[14px]">Log In</button>
    <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Try for Free</button>
  </div>
</div>

      )}
    </nav>
  );
}

export default Navbar;
