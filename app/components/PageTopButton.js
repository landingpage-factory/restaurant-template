// components/PageTopButton.js
'use client';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function PageTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Funktion, um den Button anzuzeigen, wenn der Benutzer nach unten scrollt
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Funktion, um nach oben zu scrollen
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Event-Listener für das Scrollen
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="bg-soft-gold text-white p-4 shadow-lg hover:bg-beige-gray hover:text-gray-900 hover:cursor-pointer transition-colors"
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
}