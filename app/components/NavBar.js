"use client";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Überwache den Scroll-Status
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menü umschalten
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-black text-white opacity-90"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo oder Branding */}
        <div className="text-3xl font-bold text-soft-gold hover:cursor-pointer">
          <ScrollLink to="home" smooth={true} duration={500}>
            Dein Restaurant
          </ScrollLink>
        </div>

        {/* Desktop-Navigation */}
        <div className="hidden lg:flex space-x-8 text-2xl">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-gray-300 hover:cursor-pointer"
          >
            Startseite
          </ScrollLink>
          <ScrollLink
            to="catering"
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-gray-300 hover:cursor-pointer"
          >
            Catering
          </ScrollLink>
          <ScrollLink
            to="events"
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-gray-300 hover:cursor-pointer"
          >
            Veranstaltungen
          </ScrollLink>
          <ScrollLink
            to="menu"
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-gray-300 hover:cursor-pointer"
          >
            Menü
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-gray-300 hover:cursor-pointer"
          >
            Über Uns
          </ScrollLink>
          <ScrollLink
            to="reservations"
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-gray-300 hover:cursor-pointer"
          >
            Tisch Reservierung
          </ScrollLink>
          
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-gray-300 hover:cursor-pointer"
          >
            Kontakt
          </ScrollLink>
        </div>

        {/* Hamburger Menü für mobile Ansicht */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black text-white absolute w-full top-16 left-0 py-4">
          <div className="flex flex-col items-center space-y-4">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-gray-300"
              onClick={toggleMenu}
            >
              Startseite
            </ScrollLink>
            <ScrollLink
            to="catering"
            smooth={true}
              duration={500}
              offset={-50}
              className="hover:text-gray-300"
              onClick={toggleMenu}
          >
            Catering
          </ScrollLink>
          <ScrollLink
            to="events"
            smooth={true}
              duration={500}
              offset={-50}
              className="hover:text-gray-300"
              onClick={toggleMenu}
          >
            Veranstaltungen
          </ScrollLink>
          <ScrollLink
              to="menu"
              smooth={true}
              duration={500}
              offset={-50}
              className="hover:text-gray-300"
              onClick={toggleMenu}
            >
              Menü
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-50}
              className="hover:text-gray-300"
              onClick={toggleMenu}
            >
              Über Uns
            </ScrollLink>
            <ScrollLink
              to="reservations"
              smooth={true}
              duration={500}
              offset={-50}
              className="hover:text-gray-300"
              onClick={toggleMenu}
            >
              Tisch Reservierung
            </ScrollLink>
            
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-50}
              className="hover:text-gray-300"
              onClick={toggleMenu}
            >
              Kontakt
            </ScrollLink>
          </div>
        </div>
      )}
    </header>
  );
}
