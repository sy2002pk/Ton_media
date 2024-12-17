import React, { useState } from 'react';
import {  FiUser, FiMenu, FiX } from 'react-icons/fi';
import { IoChevronDown, IoChevronForward, IoChevronBack } from 'react-icons/io5';
import InputSreach from './commom/input';
import Button from './commom/Button';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const navigationItems = [
    { 
      name: 'News', 
      href: '#', 
      isActive: true,
      submenu: [
        { name: 'Latest news', href: '#' },
        { name: 'Company updates', href: '#' },
        { name: 'Long reads', href: '#' }
      ]
    },
    { name: 'TV', href: '#' },
    { name: 'Research', href: '#' },
    { 
      name: 'Events', 
      href: '#',
      submenu: [
        { name: 'Upcoming Events', href: '#' },
        { name: 'Past Events', href: '#' },
        { name: 'Virtual Events', href: '#' }
      ]
    },
    { 
      name: 'Community', 
      href: '#',
      submenu: [
        { name: 'Members', href: '#' },
        { name: 'Discussion', href: '#' },
        { name: 'Guidelines', href: '#' }
      ]
    },
    { name: 'Jobs', href: '#' },
    { name: 'APIs', href: '#' },
  ];

  const categoryItems = [
    { name: 'payments', href: '#' },
    { name: 'markets', href: '#' },
    { name: 'retail', href: '#' },
    { name: 'wholesale', href: '#' },
    { name: 'wealth', href: '#' },
    { name: 'regulation', href: '#' },
    { name: 'crime', href: '#' },
    { name: 'crypto', href: '#' },
    { name: 'sustainable', href: '#' },
    { name: 'startups', href: '#' },
    { name: 'devops', href: '#' },
    { name: 'identity', href: '#' },
    { name: 'security', href: '#' },
    { name: 'cloud', href: '#' },
    { name: 'ai', href: '#' }
  ];

  const handleMouseEnter = (menuName) => {
    setActiveSubmenu(menuName);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  return (
    <header className="w-full border-b">
      <div className="px-4 py-3 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo and Predict Button */}
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold">
              <span className="text-black">Fin</span>
              <span className="text-blue-400">extra</span>
            </div>
            
            <div className="hidden md:block">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-full hover:bg-gray-50">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Predict 2025
                <IoChevronDown />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <InputSreach 
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search Finextra..."
                className="w-64"
              />
            </div>

            <div className="items-center hidden gap-2 md:flex">
              <Button>
                <FiUser className='w-10 h-5'/>
              </Button>
              <Button>
                Sign Up
              </Button>
            </div>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 md:hidden"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="relative hidden mt-4 md:block">
          <ul className="flex gap-6">
            {navigationItems.map((item) => (
              <li 
                key={item.name}
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <a 
                  href={item.href}
                  className={`flex items-center gap-1 ${
                    item.isActive 
                      ? 'text-blue-500 font-medium' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                  {item.submenu && (
                    <IoChevronDown 
                      className={`transition-transform duration-200
                      ${activeSubmenu === item.name ? 'rotate-180' : ''}`} 
                    />
                  )}
                </a>

                {/* Desktop Submenu */}
                {item.submenu && activeSubmenu === item.name && (
                  <div className="absolute left-0 z-10 w-48 mt-2 bg-white rounded-lg shadow-lg">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Category Navigation */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex items-center gap-2 py-2 overflow-x-auto hide-scrollbar">
            {categoryItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex-shrink-0 px-3 py-1 text-sm text-white rounded-full hover:bg-white/10"
              >
                 {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="border-b">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">
                    <span className="text-black">Fin</span>
                    <span className="text-blue-400">extra</span>
                  </div>
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setActiveSubmenu(null);
                    }}
                    className="p-2 text-gray-600"
                  >
                    <FiX size={24} />
                  </button>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <div>
                <button className="flex items-center gap-2 px-4 py-2 mb-2 ml-4 bg-white border rounded-full hover:bg-gray-50">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Predict 2025
                  <IoChevronDown />
                </button>
                </div>
                <div className="px-4 pb-3">
                  <InputSreach 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search Finextra..."
                    isMobile={true}
                  />
                </div>

              </div>
            </div>

            {/* Mobile Content */}
            <div className="relative flex-1 overflow-hidden">
              {/* Main Menu */}
              <div 
                className={`absolute w-full h-full bg-white transition-transform duration-300 ${
                  activeSubmenu ? 'animate-slide-out' : ''
                }`}
              >
                <div className="divide-y">
                  {navigationItems.map((item) => (
                    <div 
                      key={item.name} 
                      className="px-4 py-4 cursor-pointer"
                      onClick={() => item.submenu ? setActiveSubmenu(item.name) : null}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg">{item.name}</span>
                        {item.submenu && (
                          <IoChevronForward className="text-gray-400" size={20} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submenu */}
              {activeSubmenu && (
                <div 
                  className={`absolute w-full h-full bg-white ${
                    activeSubmenu ? 'animate-slide-in' : ''
                  }`}
                >
                  <div className="border-b">
                    <div className="flex items-center gap-3 px-4 py-4">
                      <button 
                        onClick={() => setActiveSubmenu(null)}
                        className="flex items-center text-gray-600"
                      >
                        <IoChevronBack size={20} />
                        <span className="ml-2">Back</span>
                      </button>
                    </div>
                    <div className="px-4 pb-4">
                      <span className="text-xl font-semibold">{activeSubmenu}</span>
                    </div>
                  </div>
                  
                  <div>
                    {navigationItems
                      .find(item => item.name === activeSubmenu)
                      ?.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-4 text-gray-600 border-b"
                        >
                          {subItem.name}
                        </a>
                      ))
                    }
                  </div>
                </div>
              )}
            </div>

            {/* Category Items */}
            <div className="border-t">
              <div className="px-4 py-3 overflow-x-auto hide-scrollbar">
                <div className="flex gap-2">
                  {categoryItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex-shrink-0 px-3 py-1 text-sm text-gray-600 border rounded-full hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="p-4 border-t">
              <div className="space-y-2">
                <Button className='items-center justify-center w-full'>
                  <FiUser className='text-xl'/>
                  Account              
                </Button>
                <Button className='items-center justify-center w-full'>
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;