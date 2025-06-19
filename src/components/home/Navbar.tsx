import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 w-[95%] max-w-4xl",
        "transition-[background-color,backdrop-filter,box-shadow,border-color] duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg border border-gray-200/20 dark:border-gray-700/20"
          : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-md",
        isOpen ? "rounded-2xl" : "rounded-full"
      )}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-[#0066FF] to-blue-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <span className="font-bold text-xl text-gray-900 dark:text-white">
            VibeInn
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="/"
            className="text-gray-700 dark:text-gray-300 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors font-medium"
          >
            Home
          </a>
          <a
            href="/community"
            className="text-gray-700 dark:text-gray-300 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors font-medium"
          >
            Community
          </a>
          <a
            href="/services"
            className="text-gray-700 dark:text-gray-300 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors font-medium"
          >
            Services
          </a>
          <a
            href="/blog"
            className="text-gray-700 dark:text-gray-300 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors font-medium"
          >
            Blog
          </a>
          <a
            href="/about-us"
            className="text-gray-700 dark:text-gray-300 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors font-medium"
          >
            About
          </a>
          <a
            href="/help-center"
            className="text-gray-700 dark:text-gray-300 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors font-medium"
          >
            Help
          </a>
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button
            variant="default"
            size="sm"
            className="hidden md:flex bg-gradient-to-r from-[#0066FF] to-blue-500 hover:from-[#0052CC] hover:to-blue-600 text-white border-none rounded-full px-6"
          >
            Download App
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200/20 dark:border-gray-700/20">
          <div className="flex flex-col space-y-3">
            <a
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors font-medium py-2"
            >
              Home
            </a>
            <a
              href="/community"
              className="text-gray-700 dark:text-gray-300 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors font-medium py-2"
            >
              Community
            </a>
            <a
              href="/services"
              className="text-gray-700 dark:text-gray-300 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors font-medium py-2"
            >
              Services
            </a>
            <a
              href="/blog"
              className="text-gray-700 dark:text-gray-300 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors font-medium py-2"
            >
              Blog
            </a>
            <a
              href="/about-us"
              className="text-gray-700 dark:text-gray-300 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors font-medium py-2"
            >
              About
            </a>
            <a
              href="/help-center"
              className="text-gray-700 dark:text-gray-300 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors font-medium py-2"
            >
              Help
            </a>
            <Button
              variant="default"
              size="sm"
              className="mt-3 bg-gradient-to-r from-[#0066FF] to-blue-500 hover:from-[#0052CC] hover:to-blue-600 text-white border-none rounded-full"
            >
              Download App
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
