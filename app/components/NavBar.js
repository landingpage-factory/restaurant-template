"use client";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  // Überwache den Scroll-Status
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'catering', 'events', 'menu', 'about', 'reservations', 'gallery', 'contact'];
      const offset = 60; // Hier definierst du den Offset, den du verwenden möchtest.

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Wenn der Bereich im Viewport ist, setze ihn als aktiv
          if (rect.top - offset <= 0 && rect.bottom - offset > 0) {
            setActiveSection(section);
          }
        }
      });
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
        isScrolled ? "bg-black text-white opacity-90" : "bg-transparent text-white"
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
        <div className="hidden lg:flex space-x-8 text-xl">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-50}
            className={`hover:text-gray-300 hover:cursor-pointer ${activeSection === 'home' ? 'active' : ''}`}
          >
            Startseite
          </ScrollLink>
          <ScrollLink
            to="catering"
            smooth={true}
            duration={500}
            offset={-50}
            className={`hover:text-gray-300 hover:cursor-pointer ${activeSection === 'catering' ? 'active' : ''}`}
          >
            Catering
          </ScrollLink>
          <ScrollLink
            to="events"
            smooth={true}
            duration={500}
            offset={-50}
            className={`hover:text-gray-300 hover:cursor-pointer ${activeSection === 'events' ? 'active' : ''}`}
          >
            Veranstaltungen
          </ScrollLink>
          <ScrollLink
            to="reservations"
            smooth={true}
            duration={500}
            offset={-50}
            className={`hover:text-gray-300 hover:cursor-pointer ${activeSection === 'reservations' ? 'active' : ''}`}
          >
            Tisch Reservierung
          </ScrollLink>
          <ScrollLink
            to="menu"
            smooth={true}
            duration={500}
            offset={-50}
            className={`hover:text-gray-300 hover:cursor-pointer ${activeSection === 'menu' ? 'active' : ''}`}
          >
            Menü
          </ScrollLink>
          <ScrollLink
            to="gallery"
            smooth={true}
            duration={500}
            offset={-50}
            className={`hover:text-gray-300 hover:cursor-pointer ${activeSection === 'gallery' ? 'active' : ''}`}
          >
            Gallerie
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-50}
            className={`hover:text-gray-300 hover:cursor-pointer ${activeSection === 'about' ? 'active' : ''}`}
          >
            Über Uns
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
            className={`hover:text-gray-300 hover:cursor-pointer ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Kontakt
          </ScrollLink>
        </div>

        {/* Hamburger Menü für mobile Ansicht */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl" aria-label="Menü öffnen">
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
              offset={-50}
              className={`hover:text-gray-300 ${activeSection === 'home' ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              Startseite
            </ScrollLink>
            <ScrollLink
              to="catering"
              smooth={true}
              duration={500}
              offset={-50}
              className={`hover:text-gray-300 ${activeSection === 'catering' ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              Catering
            </ScrollLink>
            <ScrollLink
              to="events"
              smooth={true}
              duration={500}
              offset={-50}
              className={`hover:text-gray-300 ${activeSection === 'events' ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              Veranstaltungen
            </ScrollLink>
            <ScrollLink
              to="reservations"
              smooth={true}
              duration={500}
              offset={-50}
              className={`hover:text-gray-300 ${activeSection === 'reservations' ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              Tisch Reservierung
            </ScrollLink>
            <ScrollLink
              to="menu"
              smooth={true}
              duration={500}
              offset={-50}
              className={`hover:text-gray-300 ${activeSection === 'menu' ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              Menü
            </ScrollLink>
            <ScrollLink
              to="gallery"
              smooth={true}
              duration={500}
              offset={-50}
              className={`hover:text-gray-300 ${activeSection === 'gallery' ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              Gallerie
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-50}
              className={`hover:text-gray-300 ${activeSection === 'about' ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              Über Uns
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-50}
              className={`hover:text-gray-300 ${activeSection === 'contact' ? 'active' : ''}`}
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
