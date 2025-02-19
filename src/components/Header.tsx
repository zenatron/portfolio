'use client';

import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-2 bg-primary-bg text-primary-text shadow-md relative z-30">
      {/* Name with Link to Home */}
      <Link
        href="/"
        className="text-xl font-bold hover:text-accent transition-colors"
      >
        Philip Vishnevsky
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-4">
        <Link href="/projects" className="btn-nav">
          Projects
        </Link>
        <Link href="/blog" className="btn-nav">
          Blog
        </Link>
        <Link href="/about" className="btn-nav">
          About
        </Link>
        <ThemeSwitch />
      </nav>

      {/* Mobile Menu */}
      <MobileMenu />
    </header>
  );
}