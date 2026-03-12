'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { companyInfo, services, navLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-white/95 py-3'
      )}
    >
      {/* Top bar with phone */}
      <div className="bg-[#1e3a5f] text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a
            href={`tel:${companyInfo.phone}`}
            className="flex items-center gap-2 hover:text-blue-200 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">{companyInfo.phoneFormatted}</span>
          </a>
          <div className="hidden sm:flex items-center gap-4 text-sm">
            <span>Dubai's Trusted Deep Cleaning Experts</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1e3a5f] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <div>
              <span className="text-xl font-bold text-[#1e3a5f]">DeepClean</span>
              <span className="text-xl font-light text-gray-600"> Dubai</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.children ? (
                  <>
                    <button
                      className="flex items-center gap-1 text-gray-700 hover:text-[#1e3a5f] font-medium transition-colors py-2"
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div
                      className={cn(
                        'absolute top-full left-0 mt-0 bg-white shadow-lg rounded-lg py-2 min-w-[220px] transition-all duration-200',
                        openDropdown === link.label || 'group-hover:block'
                          ? 'opacity-100 visible'
                          : 'opacity-0 invisible'
                      )}
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-[#1e3a5f] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-[#1e3a5f] font-medium transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              className="bg-[#e63946] hover:bg-[#d62828] text-white px-6"
            >
              <Link href="#contact">Book Online</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-[#1e3a5f]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <div className="space-y-1">
                      <span className="text-gray-500 font-medium px-4 py-2 block">
                        {link.label}
                      </span>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-8 py-2 text-gray-700 hover:bg-blue-50 hover:text-[#1e3a5f] transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-[#1e3a5f] font-medium transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 px-4">
                <Button
                  asChild
                  className="w-full bg-[#e63946] hover:bg-[#d62828] text-white"
                >
                  <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Book Online
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
