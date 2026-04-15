import React from 'react';
import { Github, Linkedin, Instagram, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800 py-12 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 mb-8"
          >
            <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
            Back to Top
          </button>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/raghavtiwari974"
              className="group relative p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a
              href="https://www.linkedin.com/in/raghavtiwari973/"
              className="group relative p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a
              href="https://instagram.com/theraghavtiwari973"
              className="group relative p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Raghav Tiwari. All rights reserved.
          </p>
          <p className="text-gray-500 flex items-center justify-center gap-2">
            {/* Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> and lots of ☕ */}
          </p>
          <p className="text-gray-500 mt-2 text-sm">
     
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;