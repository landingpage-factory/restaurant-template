// app/gallery/page.js
"use client";
import { Link as ScrollLink } from "react-scroll";
import Parallax from "../components/Parallax";
import CateringGallery from "../components/CateringGallery";
import RestaurantGallery from "../components/RestaurantGallery";

export default function GalleryPage() {

  return (
    <div id="gallery" className="min-h-screen bg-background">
      {/* Parallax Hero Section */}
      <Parallax backgroundImage="/images/bg-gallery.jpg" priority="true">
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
        <div className="relative z-10 h-[400px] flex items-center justify-center">
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <h1 className="text-4xl md:text-6xl font-bold text-soft-gold mb-4">
              Unsere Galerie
            </h1>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Entdecken Sie die Highlights unserer Catering-Events und die
              Atmosphäre unseres Restaurants.
            </p>
          </div>
        </div>
      </Parallax>

      {/* Catering Gallery Section */}
      <div className="mx-auto px-4 py-20">
        <h2
          className="text-3xl font-semibold text-soft-gold mb-12 text-center relative flex items-center justify-center"
          data-aos="fade-up"
        >
          <span className="flex-1 h-px bg-soft-gold/40 max-w-[120px]"></span>
          <span className="px-4">Catering-Events</span>
          <span className="flex-1 h-px bg-soft-gold/40 max-w-[120px]"></span>
        </h2>
        <div data-aos="fade-up" data-aos-delay="200">
          <CateringGallery />
        </div>
      </div>

      {/* Restaurant Gallery Section */}
      <div className="py-20">
        <div className="mx-auto px-4">
          <h2
            className="text-3xl font-semibold text-soft-gold mb-12 text-center relative flex items-center justify-center"
            data-aos="fade-up"
          >
            <span className="flex-1 h-px bg-soft-gold/40 max-w-[120px]"></span>
            <span className="px-4">Unser Restaurant</span>
            <span className="flex-1 h-px bg-soft-gold/40 max-w-[120px]"></span>
          </h2>
          <div data-aos="fade-up" data-aos-delay="200">
            <RestaurantGallery />
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <div
          className="p-8 text-center shadow-xl px-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-4xl font-bold text-soft-gold mb-4">
            Haben wir Ihr Interesse geweckt?
          </h2>
          <p className="text-lg text-beige-gray mb-6">
            Kontaktieren Sie uns für weitere Informationen oder eine
            unverbindliche Beratung.
          </p>

          {/* ScrollLink Button */}
          <ScrollLink
            to="contact" // Die ID der Kontakt-Sektion
            smooth={true}
            duration={500}
            offset={-50} // Optional, wenn du einen Offset für den Header hast
          >
            <button className="px-8 py-3 bg-soft-gold text-foreground hover:text-gray-900 font-semibold hover:bg-beige-gray hover:cursor-pointer transition-all duration-300">
              Jetzt anfragen
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
