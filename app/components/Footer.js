// components/Footer.js
'use client';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { PiFlowerLotusThin } from "react-icons/pi";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  // Funktion zur Unterscheidung zwischen Scroll-Links und internen Links
  const renderLink = (to, text) => {
    if (to.startsWith('/')) {
      // Interne Links (z. B. /imprint, /datenschutz)
      return (
        <Link href={to} className="hover:text-soft-gold">
          {text}
        </Link>
      );
    } else {
      // Scroll-Links (z. B. #home, #about)
      return (
        <ScrollLink
          to={to}
          smooth={true}
          duration={500}
          offset={-50}
          className="hover:text-soft-gold cursor-pointer"
        >
          {text}
        </ScrollLink>
      );
    }
  };

  return (
    <footer id="footer" className="bg-footer text-foreground overflow-hidden">
      <div className="footer-top pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Kontakt Informationen */}
            <div className="lg:w-3/4">
              <div className="footer-info">
                <h3 className="text-3xl font-bold text-soft-gold mb-4">DeinRestaurant</h3>
                <p className="mb-4">
                  Musterstraße 123<br />
                  12345 Berlin, Deutschland<br /><br />
                  <strong>Telefon:</strong> +49 123 456789<br />
                  <strong>Email:</strong> info@deinrestaurant.de
                </p>
                <div className="social-links mt-6 flex space-x-4">
                  <a href="#" className="text-soft-gold hover:text-foreground">
                    <FaTwitter size={20} />
                  </a>
                  <a href="#" className="text-soft-gold hover:text-foreground">
                    <FaFacebookF size={20} />
                  </a>
                  <a href="#" className="text-soft-gold hover:text-foreground">
                    <FaInstagram size={20} />
                  </a>
                  <a href="#" className="text-soft-gold hover:text-foreground">
                    <FaLinkedinIn size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Nützliche Links */}
            <div className="footer-links">
              <h4 className="text-xl font-semibold mb-4">Nützliche Links</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <PiFlowerLotusThin className="text-soft-gold mr-2" />
                  {renderLink('home', 'Startseite')}
                </li>
                <li className="flex items-center">
                  <PiFlowerLotusThin className="text-soft-gold mr-2" />
                  {renderLink('about', 'Über uns')}
                </li>
                <li className="flex items-center">
                  <PiFlowerLotusThin className="text-soft-gold mr-2" />
                  {renderLink('#', 'Impressum')}
                </li>
                <li className="flex items-center">
                  <PiFlowerLotusThin className="text-soft-gold mr-2" />
                  {renderLink('#', 'Datenschutz')}
                </li>
              </ul>
            </div>

            {/* Unsere Services */}
            <div className="footer-links">
              <h4 className="text-xl font-semibold mb-4">Unsere Services</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <PiFlowerLotusThin className="text-soft-gold mr-2" />
                  {renderLink('catering', 'Catering')}
                </li>
                <li className="flex items-center">
                  <PiFlowerLotusThin className="text-soft-gold mr-2" />
                  {renderLink('events', 'Events')}
                </li>
                <li className="flex items-center">
                  <PiFlowerLotusThin className="text-soft-gold mr-2" />
                  {renderLink('menu', 'Speisekarte')}
                </li>
                <li className="flex items-center">
                  <PiFlowerLotusThin className="text-soft-gold mr-2" />
                  {renderLink('reservierung', 'Reservierung')}
                </li>
                <li className="flex items-center">
                  <PiFlowerLotusThin className="text-soft-gold mr-2" />
                  {renderLink('contact', 'Kontakt')}
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="footer-newsletter">
              <h4 className="text-xl font-semibold mb-4">Unser Newsletter</h4>
              <p className="mb-4">
                Abonnieren Sie unseren Newsletter für aktuelle Angebote und Neuigkeiten.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bereich */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="copyright mb-4 md:mb-0">
              © Copyright <strong className="text-soft-gold">DeinRestaurant</strong>. Alle Rechte
              vorbehalten
            </div>
            <div className="credits text-gray-400">
              Designed by{' '}
              <a
                href="https://github.com/landingpage-factory"
                className="text-soft-gold hover:text-foreground"
                target='_blank'
              >
                Landingpage Factory🚀
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}