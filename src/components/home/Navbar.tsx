import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/lovable-uploads/6dfb1f13-34bd-4a33-99d7-e39bf0950e95.png"
            alt="Vibeinn Logo"
            className="h-8"
          />
          <span className="font-bold text-xl text-primary dark:text-white">
            Vibeinn
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            How it works
          </a>
          <a
            href="#rewards"
            className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            Rewards
          </a>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 dark:border-gray-600 dark:text-gray-300"
          >
            Sign In
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white dark:bg-blue-600 dark:hover:bg-blue-700">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" onClick={toggleMobileMenu} className="p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 bg-white dark:bg-slate-900 p-4 flex flex-col items-center transition-all duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <nav className="flex flex-col items-center gap-6 py-8">
          <a
            href="#features"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-600 hover:text-primary text-lg dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-600 hover:text-primary text-lg dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            How it works
          </a>
          <a
            href="#rewards"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-600 hover:text-primary text-lg dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            Rewards
          </a>
        </nav>
        <div className="flex flex-col w-full gap-2 mt-4">
          <Button
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary/10 dark:border-gray-600 dark:text-gray-300"
          >
            Sign In
          </Button>
          <Button className="w-full bg-primary hover:bg-primary/90 text-white dark:bg-blue-600 dark:hover:bg-blue-700">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
