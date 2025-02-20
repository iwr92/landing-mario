import React, { useState } from 'react';

import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-scroll';

import config from '../config/index.json';

const Menu = () => {
  const { navigation, company } = config;
  const { name: companyName, logo } = company;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">{companyName}</span>
              <img className="h-12 w-auto" src={logo} alt="logo" />
            </a>
          </div>

          {/* Menú para móviles */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Menú principal */}
          <nav className="hidden md:flex space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                smooth={true}
                duration={1000}
                className="text-gray-500 hover:text-gray-900 cursor-pointer"
                style={
                  item.name === 'Contacto' && {
                    fontWeight: 'bold',
                    color: '#4a759f',
                  }
                }
              >
                {item.name}
              </Link>
            ))}
            {/* <a href={callToAction.href} className="text-[#4a759f] font-bold hover:text-[#2C3E50]">
              {callToAction.text}
            </a> */}
          </nav>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="absolute top-16 inset-x-0 bg-white shadow-lg md:hidden z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 relative">
            {/* <button onClick={toggleMenu} className="absolute top-2 right-4 p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none">
              <XIcon className="h-6 w-6" />
            </button> */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                smooth={true}
                duration={1000}
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
                style={
                  item.name === 'Contacto' && {
                    fontWeight: 'bold',
                    color: '#4a759f',
                  }
                }
              >
                {item.name}
              </Link>
            ))}
            {/* <a
              href={callToAction.href}
              className="block w-full px-5 py-3 text-center font-medium text-[#4a759f] bg-gray-50 hover:bg-gray-100"
            >
              {callToAction.text}
            </a> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Menu;
