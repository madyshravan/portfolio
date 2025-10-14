import Link from "next/link";
import React from "react";
import ThemeToggle from "./ToggleTheme";

export default function NavBar({ theme, toggleTheme }) {
  return (
    <nav className="bg-black text-white px-10 py-5 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold tracking-wide">
        <span className="text-yellow-300">My</span>Portfolio
      </h1>

      <div className="space-x-8 uppercase text-sm tracking-wide">
        <Link href="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link href="/projects" className="hover:text-gray-400">
          Projects
        </Link>
        <Link href="/about" className="hover:text-gray-400">
          About
        </Link>
        <Link href="/contact" className="hover:text-gray-400">
          Contact
        </Link>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
}
