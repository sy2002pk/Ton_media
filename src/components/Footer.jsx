import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import { AiOutlineMail } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import Button from './commom/Button';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#012437] via-[#023658] to-[#012437] text-white pt-8 pb-6">
      <div className="max-w-6xl px-4 mx-auto text-center sm:text-left">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-2xl">
            <span className="font-bold text-white">Fin</span>
            <span className="text-[#3BBDFF] font-bold">extra</span>
          </h1>
        </div>

        {/* Main Navigation Grid */}
        <div className="grid grid-cols-1 gap-8 mb-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {/* Finextra Column */}
          <div>
            <h3 className="mb-2 font-semibold text-white">Finextra</h3>
            <ul className="mb-6">
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">About</a></li>
            </ul>
            
            <h3 className="mb-2 font-semibold text-white">Community</h3>
            <ul>
              <li className="mb-1"><a href="#" className="text-sm text-gray-300 hover:text-white">Rules</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">Contact the community team</a></li>
            </ul>
          </div>

          {/* News Column */}
          <div>
            <h3 className="mb-2 font-semibold text-white">News</h3>
            <ul className="mb-6">
              <li className="mb-1"><a href="#" className="text-sm text-gray-300 hover:text-white">Guidance</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">Contact the news desk</a></li>
            </ul>
            
            <h3 className="mb-2 font-semibold text-white">Sales</h3>
            <ul>
              <li className="mb-1"><a href="#" className="text-sm text-gray-300 hover:text-white">Media pack</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">Contact the sales team</a></li>
            </ul>
          </div>

          {/* Get involved Column */}
          <div>
            <h3 className="mb-2 font-semibold text-white">Get involved</h3>
            <ul>
              <li className="mb-1"><a href="#" className="text-sm text-gray-300 hover:text-white">Finextra Live@</a></li>
              <li className="mb-1"><a href="#" className="text-sm text-gray-300 hover:text-white">Webinars</a></li>
              <li className="mb-1"><a href="#" className="text-sm text-gray-300 hover:text-white">Finextra TV</a></li>
              <li className="mb-1"><a href="#" className="text-sm text-gray-300 hover:text-white">Research</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">Finextra.jobs</a></li>
            </ul>
          </div>

          {/* Events Column */}
          <div>
            <h3 className="mb-2 font-semibold text-white">Events</h3>
            <ul>
              <li className="mb-1"><a href="#" className="text-sm text-gray-300 hover:text-white">Sustainable Finance Live</a></li>
              <li className="mb-1"><a href="#" className="text-sm text-gray-300 hover:text-white">NextGen Nordics</a></li>
              <li className="mb-1"><a href="#" className="text-sm text-gray-300 hover:text-white">EBAday</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">NextGen.AI</a></li>
            </ul>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex flex-col gap-4 mb-6 sm:flex-row">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button  >
              <RiTeamFill/>
              Join the community 
            </Button>
            <Button  >
              <AiOutlineMail/>
              Register for news alerts
            </Button>
          </div>
          <div className="flex flex-row items-center justify-center gap-4 ">
            <a href="#" className="bg-gradient-to-r from-[#00D1B2] to-[#4CAF50] p-4 rounded-full 
                            shadow-[0_8px_0_rgba(0,0,0,0.2)]
                            hover:translate-y-[2px] hover:shadow-[0_6px_0_rgba(0,0,0,0.2)]
                            active:translate-y-[8px] active:shadow-none
                            transition-all duration-150
                            flex items-center justify-center">
                <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="#" className="bg-gradient-to-r from-[#00D1B2] to-[#4CAF50] p-4 rounded-full
                          shadow-[0_8px_0_rgba(0,0,0,0.2)]
                          hover:translate-y-[2px] hover:shadow-[0_6px_0_rgba(0,0,0,0.2)]
                          active:translate-y-[8px] active:shadow-none
                          transition-all duration-150
                          flex items-center justify-center">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="bg-gradient-to-r from-[#00D1B2] to-[#4CAF50] p-4 rounded-full
                          shadow-[0_8px_0_rgba(0,0,0,0.2)]
                          hover:translate-y-[2px] hover:shadow-[0_6px_0_rgba(0,0,0,0.2)]
                          active:translate-y-[8px] active:shadow-none
                          transition-all duration-150
                          flex items-center justify-center">
              <SiZalo className="w-6 h-6" />
            </a>
          </div>
        </div>
        {/* Social Media Links */}

        {/* App Store Links */}
        <div className="flex items-center justify-center gap-3 mb-8 sm:justify-start">
          <a href="#" className="hover:opacity-90">
            <img src="/api/placeholder/120/40" alt="Download on App Store" className="h-8" />
          </a>
          <a href="#" className="hover:opacity-90">
            <img src="/api/placeholder/135/40" alt="Get it on Google Play" className="h-8" />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-[#334155] gap-4">
          <div className="text-sm text-center text-gray-400 sm:text-left">
            © Finextra Research 2024
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm sm:gap-6">
            <a href="#" className="text-gray-400 hover:text-white">Terms of use</a>
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Cookie Centre</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;