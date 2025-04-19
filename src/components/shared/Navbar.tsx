"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaSearch,
  FaShieldAlt,
  FaStar,
  FaUser,
  FaTimes,
} from "react-icons/fa";
import LoginModal from "../ui/LoginModal";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const navLinks = [
    { path: "/", label: "DISCOVER" },
    { path: "/transfer", label: "TRANSFERS & RUMOURS" },
    { path: "/live", label: "LIVE UPDATES" },
    { path: "/stats", label: "STATS" },
    { path: "/fixture", label: "FIXTURE" },
    { path: "/odds", label: "ODDS" },
  ];

  return (
    <header className="font-sans shadow-md sticky top-0 z-50 ">
      {/* Top Bar */}
      <div className="bg-gray-200 text-gray-800 p-2 flex items-center justify-between flex-wrap">
        {/* Logo & Live Tag */}
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className="text-2xl font-bold flex items-center space-x-1"
          >
            <span className="text-black">Transfer</span>
            <span className="text-[#a39712]">News</span>
            <span className="ml-1 text-black">Live</span>
          </Link>
          <Link
            href="/live"
            className="relative flex items-center gap-1 bg-red-800 hover:bg-red-700 text-white text-xs font-semibold px-2 py-1 rounded"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            LIVE 2
          </Link>
        </div>

        {/* Search & Icons */}
        <div className="flex items-center space-x-3 mt-2 md:mt-0">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Enter your search term"
              className="bg-gray-100 text-black pl-4 pr-10 py-2 rounded focus:outline-none w-48 sm:w-64"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black" />
          </div>
          <FaUser className="text-black cursor-pointer hidden sm:block" />
          <FaStar className="text-black cursor-pointer hidden sm:block" />
          <FaShieldAlt className="text-black cursor-pointer hidden sm:block" />

          <div className="block sm:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <FaTimes className="text-gray-800 text-xl" />
              ) : (
                <FaBars className="text-gray-800 text-xl" />
              )}
            </button>
          </div>

          <LoginModal />
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="bg-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-4 p mt-2 -sm:py-0 md:flex md:items-center md:justify-between">
          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-6 p-3">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link
                  href={path}
                  className={`text-black font-semibold ${
                    pathname === path ? "underline" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          {isOpen && (
            <ul className="md:hidden flex flex-col space-y-2 mt-3 bg-[var(--color-primary)] p-4 rounded-md">
              {navLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    href={path}
                    className={`block text-black font-semibold ${
                      pathname === path ? "underline" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
