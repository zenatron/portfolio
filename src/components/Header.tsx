'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-2 bg-primary-bg text-primary-text shadow-md relative z-30">
      {/* Name with Link to Home */}
      <Link
        href="/"
        className="text-xl font-bold hover:text-accent transition-colors"
      >
        Philip Vishnevsky
      </Link>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden flex items-center justify-center p-2 text-primary-text hover:text-accent transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 animate-fade-in"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 animate-fade-in"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-4">
        <Link
          href="/projects"
          className="btn btn-primary hover:text-accent transition-colors"
        >
          Projects
        </Link>
        <Link
          href="/blog"
          className="btn btn-primary hover:text-accent transition-colors"
        >
          Blog
        </Link>
        <Link
          href="/about"
          className="btn btn-primary hover:text-accent transition-colors"
        >
          About
        </Link>
        {/* Theme Switch */}
        <ThemeSwitch />
      </nav>

      {/* Mobile Navigation */}
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* Menu */}
        <nav
          className={`fixed top-0 right-0 h-full w-4/5 bg-primary-bg flex flex-col items-start space-y-6 py-6 px-6 z-30 shadow-lg
            transition-transform transform duration-300 ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Back Button */}
          <button
            className="text-primary-text hover:text-accent flex items-center space-x-2"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span>Close</span>
          </button>

          {/* Links */}
          <Link
            href="/projects"
            className="btn btn-primary w-full text-left hover:text-accent transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="btn btn-primary w-full text-left hover:text-accent transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="btn btn-primary w-full text-left hover:text-accent transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          {/* Theme Switch */}
          <ThemeSwitch />
        </nav>
      </>
    </header>
  );
}