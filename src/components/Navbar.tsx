'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Expertise', href: '#expertise' },
  ];

  const servicesItems = [
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'Mobile Development', href: '/services/mobile-development' },
    { label: 'API Development', href: '/services/api-development' },
  ];

  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (servicesOpen) setServicesOpen(false); // close services dropdown when toggling mobile menu
  };

  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Prevent the default instant jump

    // Close mobile menu and services dropdown if open
    setMobileMenuOpen(false);
    setServicesOpen(false);

    const id = href.substring(1); // remove the '#' to get id

    // Use the DOM API to find the element and scroll smoothly
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-none">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/laracode-logo.png"
            alt="LaraCode Logo"
            width={40}
            height={40}
            priority
            className="object-contain"
          />
          <span className="text-2xl font-semibold text-white">LaraCode</span>
        </Link>

        {/* Hamburger button - mobile only */}
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Nav + Mobile Nav (conditionally rendered) */}
        <div className="hidden md:flex space-x-6 text-white font-medium items-center relative">
        {navItems.map((item) =>
        item.href.startsWith('#') ? (
            <a
            key={item.href}
            href={item.href}
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full hover:text-white-400"
            onClick={(e) => handleHashLinkClick(e, item.href)} // <== add this here
            >
            {item.label}
            </a>
        ) : (
            <Link
            key={item.href}
            href={item.href}
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full hover:text-white-400"
            >
            {item.label}
            </Link>
        )
        )}

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={toggleServices}
              className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full hover:text-white-400 flex items-center space-x-1"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              <span>Services</span>
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                  servicesOpen ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white/10 backdrop-blur-md rounded-md shadow-lg py-2 z-50 border border-white/20">
                {servicesItems.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 text-white hover:bg-white/20 transition-colors whitespace-nowrap"
                    onClick={() => setServicesOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-80 rounded-b-lg px-6 py-4 shadow-lg">
          <div className="flex flex-col space-y-4 font-medium text-white">
            {navItems.map((item) =>
              item.href.startsWith('#') ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="block hover:text-blue-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block hover:text-blue-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}

            {/* Services dropdown inside mobile menu */}
            <div>
              <button
                onClick={toggleServices}
                className="flex items-center justify-between w-full hover:text-blue-400"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                    servicesOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {servicesOpen && (
                <div className="mt-2 pl-4 border-l border-white/20">
                  {servicesItems.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-2 py-1 text-white hover:bg-white/20 rounded-md transition-colors whitespace-nowrap"
                      onClick={() => {
                        setServicesOpen(false);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
