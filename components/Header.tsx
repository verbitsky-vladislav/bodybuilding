'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 h-10 md:h-12">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/phone-consultation" 
              className={`text-sm font-semibold ${
                pathname === '/phone-consultation' 
                  ? 'text-black border-b-2 border-black' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              PHONE CONSULTATION
            </Link>
            <Link 
              href="/about" 
              className={`text-sm font-semibold ${
                pathname === '/about' 
                  ? 'text-black border-b-2 border-black' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              ABOUT
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/coaching-services" className="bg-black text-white px-4 lg:px-6 py-2 text-xs lg:text-sm font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap">
              BUY COACHING
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

          {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            <Link 
              href="/phone-consultation" 
              className={`block text-sm font-semibold ${
                pathname === '/phone-consultation' 
                  ? 'text-black font-bold' 
                  : 'text-gray-700'
              }`}
            >
              PHONE CONSULTATION
            </Link>
            <Link 
              href="/about" 
              className={`block text-sm font-semibold ${
                pathname === '/about' 
                  ? 'text-black font-bold' 
                  : 'text-gray-700'
              }`}
            >
              ABOUT
            </Link>
            <Link href="/coaching-services" className="w-full bg-black text-white px-6 py-2 text-sm font-semibold text-center block">
              BUY COACHING
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

